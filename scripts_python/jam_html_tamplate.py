import os
import html
from urllib.parse import quote

path = input("Path> ")
files = os.listdir(path)

html_output = """
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="/styles/barkilla.css">
    <link rel="stylesheet" href="/styles/text.css">
    <link rel="stylesheet" href="/styles/QA.css">
    <link rel="stylesheet" href="/styles/misc.css">
    <link rel="stylesheet" href="/styles/main.css">
</head>
<body>
    <center><span><a href="../">Back</a> <a href="">Refresh Page</a></span></center>
    <img style="width: 600px; height: 600px;" align="right" src="./logo.png">
"""

def write_mp3_line(filename):
    global html_output

    url_filename = quote(filename)
    display_filename = html.escape(filename.removesuffix(".mp3"))

    html_output += (
        f'<details><audio src="./{url_filename}" controls></audio>'
        f'<summary>{display_filename}</summary></details>\n'
    )

for filename in files:
    if filename.lower().endswith(".mp3"):
        write_mp3_line(filename)

html_output += """
</body>
"""

html_path = os.path.join(path, "index.html")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_output)

print(html_output)