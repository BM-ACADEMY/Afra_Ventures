import os

jsx_file = r"C:\Users\ADMIN\Desktop\AfraVentures\client\src\pages\Launch.jsx"

with open(jsx_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Targeted regex fixes
content = content.replace(r"\b\w", r"\\b\\w")
content = content.replace(r"\d", r"\\d")
content = content.replace(r"\D", r"\\D")
content = content.replace(r"\+", r"\\+")
content = content.replace(r'\n', r'\\n')

with open(jsx_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed regex backslashes in Launch.jsx")
