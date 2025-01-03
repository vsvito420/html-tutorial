# HTML & CSS Lernplattform

Eine interaktive Lernplattform für HTML- und CSS-Grundlagen, entwickelt für KiberOne-Schüler. Die Plattform bietet strukturierte Tutorials, praktische Übungen, ein Quiz-System und umfassende Zusammenfassungen.

## Features

- 📚 Interaktive HTML & CSS Tutorials mit Live-Code-Beispielen
- 🎯 Praktische Übungen in verschiedenen Schwierigkeitsgraden (Leicht, Mittel, Schwer)
- 📝 Interaktives Quiz-System für HTML und CSS
- 📋 Umfassende Zusammenfassungen der wichtigsten Konzepte
- 🌓 Dark/Light Theme Support
- 📱 Vollständig responsives Design
- 🎨 Syntax-Hervorhebung für Code-Beispiele
- 🔄 Hot-Reload während der Entwicklung

## Projektstruktur

```
project/
├── index.html              # Startseite
├── html.html              # HTML-Tutorial
├── css.html               # CSS-Tutorial
├── aufgaben.html          # Praktische Übungen
├── quiz.html              # Interaktives Quiz
├── zusammenfassung.html   # Konzept-Zusammenfassungen
├── styles.css             # Globale Styles
├── script.js              # Haupt-JavaScript
├── js/                    # JavaScript-Module
│   ├── quiz-manager.js    # Quiz-System
│   ├── roadmap.js         # Lernfortschritt
│   ├── tutorial-page.js   # Tutorial-Funktionalität
│   └── tutorials/         # Tutorial-Inhalte
│       ├── html/          # HTML-Beispiele
│       └── css/           # CSS-Beispiele
└── aufgaben/             # Übungsmaterialien
    └── beispiele/        # Beispiellösungen
```

## Installation

1. Repository klonen:
```bash
git clone https://github.com/vsvito420/html-tutorial.git
cd html-tutorial
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

Die Seite ist dann unter `http://localhost:8080` verfügbar.

## Entwicklung

- `npm run dev` - Startet den Entwicklungsserver mit Hot-Reload
- `npm start` - Alias für `npm run dev`
- `npm run preview` - Startet den Server ohne Hot-Reload
- `npm test` - Startet den Server und öffnet die Seite im Browser
- `npm run deploy` - Deployed die Seite auf Cloudflare Pages

## Features im Detail

### Tutorials
- Schrittweise HTML und CSS Tutorials
- Live-Code-Editor mit sofortiger Vorschau
- Fortschritts-Tracking
- Praxisnahe Beispiele

### Übungen
- Verschiedene Schwierigkeitsgrade
- Detaillierte Schritt-für-Schritt-Anleitungen
- Hilfreiche Tipps und Hinweise
- Beispiellösungen zum Vergleichen

### Quiz-System
- Separate Quizze für HTML und CSS
- Verschiedene Schwierigkeitsgrade
- Fortschritts-Tracking
- Sofortiges Feedback

### Zusammenfassungen
- Übersichtliche Darstellung wichtiger Konzepte
- Praktische Code-Beispiele
- Schnelle Referenz für häufig verwendete Elemente
- Responsive Tabellen-Layouts

### Theme-System
- Automatische Erkennung der System-Präferenz
- Manuelles Umschalten zwischen Hell/Dunkel
- Konsistentes Design in beiden Themes
- Persistente Theme-Einstellung

## Deployment

Das Projekt ist für Cloudflare Pages konfiguriert:

1. Cloudflare-Konfiguration in `wrangler.toml` anpassen
2. Deployment ausführen:
```bash
npm run deploy
```

## Mitwirken

1. Fork des Repositories erstellen
2. Feature-Branch erstellen:
```bash
git checkout -b feature/neue-funktion
```
3. Änderungen committen:
```bash
git add .
git commit -m 'Beschreibung der Änderungen'
```
4. Zu deinem Fork pushen:
```bash
git push origin feature/neue-funktion
```
5. Pull Request erstellen

## Richtlinien für Beiträge

- Klare, beschreibende Commit-Messages
- Code-Kommentare für komplexe Logik
- Responsive Design beibehalten
- Bestehende Code-Struktur folgen
- Tests für neue Funktionen

## Lizenz

Dieses Projekt ist für Bildungszwecke gedacht. Alle Rechte vorbehalten.
