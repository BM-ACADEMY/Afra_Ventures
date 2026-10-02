import os

jsx_file = r"C:\Users\ADMIN\Desktop\AfraVentures\client\src\pages\Launch.jsx"

with open(jsx_file, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    "<Seo title=\"Afra Ventures Inauguration\" />",
    "<Seo title=\"Afra Ventures Inauguration\" description=\"Inauguration\" file=\"launch.html\" />"
)

with open(jsx_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Launch.jsx with Seo file prop")
