# djplaylist.github.io

Landingpage für **DJ Playlist Companion** – die Beta-Version für Engine-DJ-Bibliotheken
(Denon SC LIVE, Prime 4, Prime GO, SC6000, Numark Mixstream Pro).

**Live:** https://tintronik.github.io/djplaylist.github.io/

## Inhalt

| Pfad | Zweck |
|---|---|
| `index.html` | Weiterleitung auf die Landingpage (damit die Live-URL `/` gültig bleibt) |
| `04_Website_und_Marketing/index.html` | Struktur der Landingpage + englische Standardtexte (SEO / ohne JavaScript) |
| `04_Website_und_Marketing/style.css` | Design-Tokens, Layout, Animationen |
| `04_Website_und_Marketing/script.js` | Alle Texte (EN/DE), Galerie, FAQ-Akkordeon, Video-Facade |
| `04_Website_und_Marketing/assets/` | Logo, Favicons, Screenshots |

## Texte ändern

Alle sichtbaren Texte stehen in `04_Website_und_Marketing/script.js` im Objekt
`CONFIG.i18n` (`en` und `de`). Die englischen Standardtexte liegen zusätzlich statisch
in `04_Website_und_Marketing/index.html`, damit Suchmaschinen und Besucher ohne
JavaScript die Inhalte sehen – dort denselben Text bitte mitpflegen.

## Download-Link austauschen

```
const DOWNLOAD_URL = "";   // script.js, ganz oben
```

Solange der Wert leer ist, zeigen alle Buttons auf
`https://github.com/tintronik/DJ-Playlist-Companion-Beta/releases/latest`.
Für eine eigene Datei einfach die URL eintragen.

## Lokal starten

```
cd 04_Website_und_Marketing
python -m http.server 8080
```

Danach http://localhost:8080/ im Browser öffnen.

## Hinweise

- Keine Frameworks, keine Build-Tools, kein Tracking, keine externen Schriftarten.
- Das YouTube-Video lädt erst nach einem Klick auf Play (Vorschaubild + Play-Button).
- Der Embed übergibt die Origin der Seite an YouTube (`origin`-Parameter) – ohne Origin
  antwortet der Player mit **Fehler 153**. Deshalb die Seite immer über einen Webserver
  testen (`python -m http.server`) und nicht per Doppelklick auf die `index.html`:
  bei einem `file://`-Aufruf öffnet der Play-Button das Video direkt auf YouTube.
- Unter dem Video gibt es zusätzlich den Link „Auf YouTube öffnen“ als Fallback.
- Marken: `Camelot` und `Open Key` werden bewusst nicht genannt – es ist von
  **Harmonic Key** und **Key Flow** die Rede. Engine DJ, Engine OS und Denon DJ sind
  Warenzeichen von inMusic Brands Inc.; dieses Projekt ist unabhängig und steht in
  keiner Verbindung zu inMusic Brands Inc. oder Denon DJ.
