"""Setzt gemeinsame Teile (Icons, Fuß) in alle Seiten ein.
Aufruf: python3 tools/teile.py   (aus dem Projektordner)
Die Marken <!--ICONS--> … <!--/ICONS--> bleiben stehen, damit sich der
Lauf wiederholen lässt."""
import re, pathlib
teile = {n: pathlib.Path(f"tools/teile/{n.lower()}.html").read_text().strip() for n in ("ICONS", "FUSS")}
for seite in pathlib.Path(".").glob("*.html"):
    s = seite.read_text()
    for n, t in teile.items():
        neu = f"<!--{n}-->\n{t}\n<!--/{n}-->"
        if f"<!--/{n}-->" in s:
            s = re.sub(rf"<!--{n}-->.*?<!--/{n}-->", lambda m: neu, s, flags=re.S)
        else:
            s = s.replace(f"<!--{n}-->", neu)
    seite.write_text(s)
    print("eingesetzt:", seite)
