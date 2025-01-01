# HTML & CSS Lernplattform

Eine interaktive Lernplattform für HTML- und CSS-Grundlagen, entwickelt für KiberOne-Schüler. Die Plattform bietet interaktive Tutorials, Live-Code-Beispiele und praktische Übungen.

## Funktionen

- 📚 Interaktive HTML & CSS Tutorials
- 💻 Live-Code-Beispiele mit sofortiger Vorschau
- 🎯 Praktische Übungen mit verschiedenen Schwierigkeitsgraden
- 📱 Vollständig responsive Gestaltung
- 🎨 Syntax-Hervorhebung für Code-Beispiele
- 🔄 Hot-Reload während der Entwicklung

## Projektstruktur

```
project/
├── index.html              # Startseite
├── html.html              # HTML-Tutorial-Seite
├── css.html               # CSS-Tutorial-Seite
├── aufgaben.html          # Übungsseite
├── styles.css             # Globale Styles
├── script.js              # Haupt-JavaScript-Datei
├── js/                    # JavaScript-Module
│   ├── tutorial-page.js   # Tutorial-Seiten-Funktionalität
│   ├── tutorial-content.js
│   └── tutorials/         # Tutorial-Inhaltsmodule
│       ├── html/          # HTML-Tutorial-Beispiele
│       └── css/          # CSS-Tutorial-Beispiele
└── aufgaben/             # Übungsbeispiele und Lösungen
    └── beispiele/        # Beispiellösungen
```

## Einrichtung

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

Die Seite ist dann unter `http://localhost:8080` mit aktiviertem Hot-Reload verfügbar.

## Entwicklung

- `npm run dev` - Startet den Entwicklungsserver mit Hot-Reload
- `npm start` - Alias für `npm run dev`
- `npm run preview` - Startet den Vorschau-Server ohne Hot-Reload
- `npm run build` - Baut das Projekt (statische Dateien, kein Build-Schritt erforderlich)

## Deployment

Das Projekt ist für das Deployment auf Cloudflare Pages konfiguriert:

```bash
npm run deploy
```

Dies veröffentlicht die Seite auf Cloudflare Pages unter der in `wrangler.toml` konfigurierten Domain.

## Zum Projekt beitragen

So kannst du zum Projekt beitragen:

### 1. Repository klonen und einrichten

1. Erstelle einen Fork des Repositories
2. Klone deinen Fork:
   ```bash
   git clone https://github.com/vsvito420/html-tutorial.git
   cd html-tutorial
   ```
3. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

### 2. Neue Inhalte hinzufügen

#### Tutorial-Inhalte erweitern
- Neue HTML-Beispiele: Erstelle eine neue Datei unter `js/tutorials/html/`
- Neue CSS-Beispiele: Erstelle eine neue Datei unter `js/tutorials/css/`
- Folge dem bestehenden Format in den vorhandenen Tutorial-Dateien

#### Neue Übungen hinzufügen
1. Erstelle eine neue Übung in `aufgaben.html`
2. Füge eine Beispiellösung unter `aufgaben/beispiele/` hinzu
3. Achte auf eine klare Aufgabenbeschreibung und hilfreiche Tipps

### 3. Code-Richtlinien

- Verwende aussagekräftige Variablen- und Funktionsnamen
- Kommentiere komplexe Logik
- Halte den Code übersichtlich und gut formatiert
- Teste deine Änderungen gründlich
- Stelle sicher, dass die Seite responsive bleibt

### 4. Änderungen einreichen

1. Erstelle einen Feature-Branch:
   ```bash
   git checkout -b feature/neue-funktion
   ```
2. Committe deine Änderungen:
   ```bash
   git add .
   git commit -m 'Beschreibung der Änderungen'
   ```
3. Pushe zu deinem Fork:
   ```bash
   git push origin feature/neue-funktion
   ```
4. Erstelle einen Pull Request mit einer detaillierten Beschreibung deiner Änderungen

## Projektstruktur im Detail

### Tutorial-Seiten

- `html.html` und `css.html` sind die Haupt-Tutorial-Seiten
- Jedes Tutorial ist in interaktive Beispiele unterteilt
- Beispiele enthalten Code-Snippets und Live-Vorschauen
- Die Navigation zwischen Beispielen wird von `tutorial-page.js` gesteuert

### Übungen

- `aufgaben.html` enthält praktische Übungen
- Übungen sind nach Schwierigkeit kategorisiert (Leicht, Mittel, Schwer)
- Jede Übung enthält:
  - Klare Ziele
  - Schritt-für-Schritt-Anleitungen
  - Hilfreiche Tipps
  - Beispiellösungen (wo verfügbar)

### Styling

- Responsives Design mit Mobile-First-Ansatz
- Klares und modernes UI mit einheitlichem Styling
- Syntax-Hervorhebung für Code-Beispiele mit Prism.js
- Flexibles Layout mit CSS Grid und Flexbox

### JavaScript-Architektur

- Modulare Struktur mit ES-Modulen
- Trennung von Tutorial-Inhalten und Navigation
- Interaktive Vorschau-Funktionalität
- Dynamisches Laden von Inhalten

## Lizenz

Dieses Projekt ist für Bildungszwecke gedacht. Bitte kontaktiere die Projektbetreuer für Nutzungsgenehmigungen.
