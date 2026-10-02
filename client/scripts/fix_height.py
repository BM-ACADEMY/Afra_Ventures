import os

jsx_file = r"C:\Users\ADMIN\Desktop\AfraVentures\client\src\pages\Launch.jsx"

with open(jsx_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace height:100% on html,body with html,body,#root{height:100%} and .app{height:100vh}
content = content.replace(
    "html,body{height:100%;background:var(--deep)}",
    "html,body,#root{height:100%;background:var(--deep)}"
)
content = content.replace(
    ".app{position:relative;height:100%;max-width:460px",
    ".app{position:relative;height:100dvh;max-width:460px"
)

with open(jsx_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated height in Launch.jsx CSS")
