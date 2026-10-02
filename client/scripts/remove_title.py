import re
import os

jsx_file = r"C:\Users\ADMIN\Desktop\AfraVentures\client\src\pages\Launch.jsx"

with open(jsx_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the title tag entirely
content = re.sub(r'<title>.*?</title>', '', content, flags=re.IGNORECASE)

with open(jsx_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed title tag from Launch.jsx")
