import re
import os
import json

html_file = r"C:\Users\ADMIN\Desktop\AfraVentures\Afra_Ventures_Inauguration_newest.html"
jsx_file = r"C:\Users\ADMIN\Desktop\AfraVentures\client\src\pages\Launch.jsx"

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract script
script_match = re.search(r'<script>(.*?)</script>', content, flags=re.DOTALL)
script_content = script_match.group(1) if script_match else ""
content = re.sub(r'<script>.*?</script>', '', content, flags=re.DOTALL)

# Remove DOCTYPE, html, head, body tags to just keep the core content
content = re.sub(r'<!doctype html>', '', content, flags=re.IGNORECASE)
content = re.sub(r'<html[^>]*>', '', content, flags=re.IGNORECASE)
content = re.sub(r'</html>', '', content, flags=re.IGNORECASE)
content = re.sub(r'<head[^>]*>', '', content, flags=re.IGNORECASE)
content = re.sub(r'</head>', '', content, flags=re.IGNORECASE)
content = re.sub(r'<body[^>]*>', '', content, flags=re.IGNORECASE)
content = re.sub(r'</body>', '', content, flags=re.IGNORECASE)
content = re.sub(r'<title>.*?</title>', '', content, flags=re.IGNORECASE|re.DOTALL)

# Fix common unquoted attributes
content = re.sub(r'charset=utf8', 'charSet="utf8"', content)
content = re.sub(r'name=viewport', 'name="viewport"', content)

# Fix boolean attributes without quotes if any
content = re.sub(r'\bcrossorigin\b(?!=")', 'crossOrigin="anonymous"', content)

# Fix class to className
content = re.sub(r'\bclass=', 'className=', content)
content = re.sub(r'\bfor=', 'htmlFor=', content)
content = re.sub(r'\btabindex=', 'tabIndex=', content)

# Fix SVG attributes (camelCase)
svg_attrs = [
    'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 
    'clip-path', 'viewBox', 'text-anchor', 'font-family', 'font-size', 'font-weight', 'letter-spacing',
    'vector-effect', 'stop-color', 'stroke-opacity'
]
for attr in svg_attrs:
    camel = ''.join(word.capitalize() if i > 0 else word for i, word in enumerate(attr.split('-')))
    if attr == 'viewBox': camel = 'viewBox' # Keep it correct case
    content = re.sub(rf'\b{attr}=', f'{camel}=', content)

# Fix React DOM properties
content = re.sub(r'\bautocomplete=', 'autoComplete=', content)
content = re.sub(r'\binputmode=', 'inputMode=', content)
content = re.sub(r'\bmaxlength=', 'maxLength=', content)

# Fix inline styles
def style_replacer(match):
    styles = match.group(1)
    parts = styles.split(';')
    style_obj = []
    for p in parts:
        if ':' in p:
            k, v = p.split(':', 1)
            k = k.strip()
            v = v.strip()
            if k.startswith('--'):
                camel_k = f"'{k}'"
            else:
                camel_k = ''.join(word.capitalize() if i > 0 else word for i, word in enumerate(k.split('-')))
            style_obj.append(f"{camel_k}: '{v}'")
    return "style={{" + ", ".join(style_obj) + "}}"

content = re.sub(r'style="([^"]+)"', style_replacer, content)

# Self-closing tags
self_closing = ['img', 'input', 'br', 'hr', 'link', 'meta', 'path', 'source']
for tag in self_closing:
    content = re.sub(rf'<{tag}\b([^>]*?)(?<!/)>', rf'<{tag}\1 />', content, flags=re.IGNORECASE)

# Any other generic <style> content replacement: React needs <style>{`...`}</style>
content = re.sub(r'<style>', '<style>{`', content)
content = re.sub(r'</style>', '`}</style>', content)

# Remove the inline comments since they might be invalid in JSX
content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)

# Fix regex escapes in the script before injecting!
# Because the script goes into a template literal block
script_content = script_content.replace(r"\b\w", r"\\b\\w")
script_content = script_content.replace(r"\d", r"\\d")
script_content = script_content.replace(r"\D", r"\\D")
script_content = script_content.replace(r"\+", r"\\+")
script_content = script_content.replace(r'\n', r'\\n')

# Escape backticks in script content
script_content_escaped = script_content.replace('`', '\\`').replace('$', '\\$')

# Fix the heights!
content = content.replace(
    "html,body{height:100%;background:var(--deep)}",
    "html,body,#root{height:100%;background:var(--deep)}"
)
content = content.replace(
    ".app{position:relative;height:100%;max-width:460px",
    ".app{position:relative;height:100dvh;max-width:460px"
)

jsx_template = f"""import React, {{ useEffect }} from 'react';
import Seo from '../components/Seo';

const Launch = () => {{
  useEffect(() => {{
    // Add logic here to execute the extracted script
    const script = document.createElement('script');
    script.innerHTML = `{script_content_escaped}`;
    document.body.appendChild(script);

    return () => {{
      document.body.removeChild(script);
    }};
  }}, []);

  return (
    <>
      <Seo file="launch.html" title="Afra Ventures Launch" description="Things we've actually done" />
      <h1 style={{{{ display: 'none' }}}}>Afra Ventures Launch</h1>
      {{/* Launch Page Content */}}
      {content}
    </>
  );
}};

export default Launch;
"""

os.makedirs(os.path.dirname(jsx_file), exist_ok=True)
with open(jsx_file, 'w', encoding='utf-8') as f:
    f.write(jsx_template)

print("Converted successfully to", jsx_file)
