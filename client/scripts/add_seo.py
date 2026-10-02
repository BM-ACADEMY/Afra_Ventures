import os

jsx_file = r"C:\Users\ADMIN\Desktop\AfraVentures\client\src\pages\Launch.jsx"

with open(jsx_file, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    "import React, { useEffect } from 'react';",
    "import React, { useEffect } from 'react';\nimport Seo from '../components/Seo.jsx';"
)

content = content.replace(
    "  return (\n    <>\n      {/* Launch Page Content */}",
    "  return (\n    <>\n      <Seo title=\"Afra Ventures Inauguration\" />\n      {/* Launch Page Content */}"
)

with open(jsx_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Launch.jsx with Seo")
