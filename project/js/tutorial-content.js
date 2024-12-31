// Zentrale Datei für alle Tutorial-Inhalte
export const tutorials = {
  css: {
    title: "CSS Grundlagen",
    examples: [
      {
        title: "Erste Schritte mit CSS",
        description: "Die grundlegendsten CSS-Eigenschaften für Text",
        code: `/* Textfarbe ändern */
p {
  color: blue;
}

/* Schriftgröße ändern */
h1 {
  font-size: 24px;
}

/* Text zentrieren */
.centered {
  text-align: center;
}`,
        html: `<h1>Große Überschrift</h1>
<p>Dieser Text ist blau.</p>
<p class="centered">Dieser Text ist zentriert.</p>`,
        explanation: `- color ändert die Textfarbe
- font-size bestimmt die Schriftgröße (px = Pixel)
- text-align: center zentriert den Text
- Selektoren bestimmen, welche Elemente gestylt werden:
  * p wählt alle Paragraphen
  * h1 wählt die Hauptüberschrift
  * .centered wählt Elemente mit class="centered"`
      },
      {
        title: "Farben in CSS",
        description: "Verschiedene Möglichkeiten, Farben in CSS zu definieren",
        code: `/* Beispiel 1: Grundfarben */
.color-box-1 {
  color: white;
  background-color: #2563eb;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
}

/* Beispiel 2: RGB und Transparenz */
.color-box-2 {
  color: #333;
  background-color: rgb(255, 243, 200);
  border: 2px solid rgb(234, 179, 8);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Beispiel 3: Farbverlauf */
.color-box-3 {
  color: white;
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
  padding: 15px;
  border-radius: 4px;
}`,
        html: `<div class="color-box-1">
  Text in Weiß auf blauem Hintergrund
</div>
<div class="color-box-2">
  Dunkler Text auf hellem Hintergrund mit Schatten
</div>
<div class="color-box-3">
  Text auf Farbverlauf-Hintergrund
</div>`,
        explanation: `Farben in CSS können auf verschiedene Arten definiert werden:

1. Einfache Farbnamen:
   - white, blue, red, etc.
   - Gut für Prototypen

2. HEX-Farben (#RRGGBB):
   - #2563eb = Blau
   - #333333 = Dunkelgrau
   - Häufig in Designs verwendet

3. RGB/RGBA:
   - rgb(255, 243, 200) = Helles Gelb
   - rgba(0, 0, 0, 0.3) = 30% Transparentes Schwarz
   - Gut für Transparenz

4. Moderne Effekte:
   - Farbverläufe (linear-gradient)
   - Schatten (box-shadow)
   - Kombinationen für moderne Designs`
      },
      {
        title: "Box-Modell verstehen",
        description: "Das CSS Box-Modell mit praktischen Beispielen",
        code: `/* Äußere Box */
.outer-box {
  /* Größe */
  width: 300px;
  
  /* Außenabstand */
  margin: 20px;
  
  /* Innenabstand */
  padding: 20px;
  
  /* Rahmen */
  border: 3px solid #4a90e2;
  border-radius: 8px;
  
  /* Hintergrund */
  background-color: #e3f2fd;
}

/* Innere Box */
.inner-box {
  /* Innenabstand */
  padding: 15px;
  
  /* Rahmen */
  border: 2px dashed #2196f3;
  border-radius: 4px;
  
  /* Hintergrund */
  background-color: white;
  
  /* Text */
  text-align: center;
  font-size: 14px;
  color: #333;
}

/* Box mit verschiedenen Abständen */
.spacing-box {
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #90caf9;
  border-radius: 4px;
  background-color: #bbdefb;
  
  /* Verschiedene Abstände demonstrieren */
  margin-left: 40px;
  margin-right: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
}`,
        html: `<div class="outer-box">
  <div class="inner-box">
    Diese Box zeigt das Zusammenspiel von Margin (außen),
    Border (Rahmen) und Padding (innen)
  </div>
  <div class="spacing-box">
    Diese Box zeigt verschiedene Abstände:
    Links mehr Margin als rechts,
    Oben mehr Padding als unten
  </div>
</div>`,
        explanation: `Das Box-Modell von innen nach außen:

1. Content (Inhalt):
   - Der eigentliche Inhalt (Text, Bilder)
   - Bestimmt durch width/height

2. Padding (Innenabstand):
   - Abstand zwischen Inhalt und Rahmen
   - padding-top, -right, -bottom, -left
   - Oder kurz: padding: 10px 20px 10px 20px

3. Border (Rahmen):
   - Umrandung der Box
   - Dicke, Stil und Farbe einstellbar
   - border-radius für runde Ecken

4. Margin (Außenabstand):
   - Abstand zu anderen Elementen
   - margin-top, -right, -bottom, -left
   - margin: auto für horizontale Zentrierung`
      },
      {
        title: "Text-Styling",
        description: "Umfassende Textformatierung",
        code: `.text-styles {
  /* Schriftart */
  font-family: Arial, sans-serif;
  
  /* Schriftgröße und Zeilenhöhe */
  font-size: 16px;
  line-height: 1.5;
  
  /* Schriftstärke */
  font-weight: bold;
  
  /* Textausrichtung */
  text-align: center;
  
  /* Textdekoration */
  text-decoration: underline;
  
  /* Textschatten */
  text-shadow: 1px 1px 2px #888;
  
  /* Farbe */
  color: #333;
}`,
        html: `<p class="text-styles">
  Dieser Text zeigt verschiedene Textformatierungen
</p>`,
        explanation: `Wichtige Text-Eigenschaften:
- font-family: Schriftart (mehrere als Fallback)
- font-size: Schriftgröße
- line-height: Zeilenhöhe (1.5 = 150%)
- font-weight: Schriftstärke (normal, bold)
- text-align: Ausrichtung (left, center, right)
- text-decoration: Unterstreichung etc.
- text-shadow: Textschatten (x y Unschärfe Farbe)`
      },
      {
        title: "Hover-Effekte",
        description: "Interaktive Effekte beim Überfahren mit der Maus",
        code: `.button {
  /* Grund-Styling */
  background-color: #4a90e2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  /* Übergangseffekt */
  transition: all 0.3s ease;
}

/* Hover-Zustand */
.button:hover {
  background-color: #357abd;
  transform: scale(1.05);
}`,
        html: `<button class="button">
  Hover über mich!
</button>`,
        explanation: `Hover-Effekte machen die Seite interaktiv:
- :hover wird aktiv wenn man mit der Maus drüber fährt
- transition macht Änderungen sanft
- transform: scale() für Größenänderung
- cursor: pointer zeigt klickbare Elemente
- Eigenschaften können sich sanft ändern:
  * Farben
  * Größe
  * Schatten
  * und mehr`
      },
      {
        title: "Einfaches Layout",
        description: "Grundlegendes Layout mit Flexbox",
        code: `.nav-menu {
  /* Flexbox aktivieren */
  display: flex;
  
  /* Abstand zwischen Elementen */
  gap: 20px;
  
  /* Ausrichtung */
  justify-content: center;
  
  /* Styling */
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.nav-item {
  /* Link-Styling */
  color: #4a90e2;
  text-decoration: none;
  padding: 5px 10px;
  
  /* Hover-Effekt */
  transition: color 0.3s;
}

.nav-item:hover {
  color: #357abd;
}`,
        html: `<nav class="nav-menu">
  <a href="#" class="nav-item">Start</a>
  <a href="#" class="nav-item">Über uns</a>
  <a href="#" class="nav-item">Kontakt</a>
</nav>`,
        explanation: `Einfaches Layout mit Flexbox:
- display: flex aktiviert Flexbox-Layout
- gap erstellt Abstände zwischen Elementen
- justify-content richtet Elemente aus
- Praktisches Beispiel: Navigationsmenü
- Hover-Effekte machen Links interaktiv
- transition für sanfte Übergänge`
      },
      {
        title: "Responsive Design Basics",
        description: "Grundlagen für verschiedene Bildschirmgrößen",
        code: `.responsive-box {
  /* Basis-Styling */
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
  
  /* Responsive Breite */
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}

/* Für kleine Bildschirme */
@media (max-width: 600px) {
  .responsive-box {
    padding: 10px;
    font-size: 14px;
  }
}`,
        html: `<div class="responsive-box">
  Diese Box passt sich der Bildschirmgröße an.
  Verkleinere das Browserfenster um den Effekt zu sehen!
</div>`,
        explanation: `Responsive Design Grundlagen:
- Prozentuale Breiten (width: 90%)
- max-width verhindert zu breite Elemente
- margin: 0 auto zentriert Elemente
- @media Regeln für verschiedene Bildschirmgrößen
- Anpassungen können sein:
  * Schriftgrößen
  * Abstände
  * Layout
  * und mehr`
      },
      {
        title: "Listen-Styling",
        description: "Ansprechende Gestaltung von Listen",
        code: `.custom-list {
  /* Listen-Styling */
  list-style: none;
  padding: 0;
  
  /* Container-Styling */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.list-item {
  /* Item-Styling */
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  
  /* Flexbox für Icon und Text */
  display: flex;
  align-items: center;
  gap: 10px;
}

.list-item::before {
  /* Custom Bullet Point */
  content: "→";
  color: #4a90e2;
}

.list-item:last-child {
  border-bottom: none;
}`,
        html: `<ul class="custom-list">
  <li class="list-item">Erster Listenpunkt</li>
  <li class="list-item">Zweiter Listenpunkt</li>
  <li class="list-item">Dritter Listenpunkt</li>
</ul>`,
        explanation: `Listen schön gestalten:
- list-style: none entfernt Standard-Bullets
- ::before für eigene Bullet Points
- border-bottom für Trennlinien
- :last-child für letztes Element
- Flexbox für Ausrichtung
- Schatten und Rundungen für modernes Design`
      },
      {
        title: "Bildanpassung",
        description: "Bilder responsive und ansprechend gestalten",
        code: `.image-container {
  /* Container-Styling */
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.responsive-image {
  /* Bild-Styling */
  width: 100%;
  height: auto;
  display: block;
  
  /* Hover-Effekt */
  transition: transform 0.3s ease;
}

.responsive-image:hover {
  transform: scale(1.05);
}`,
        html: `<div class="image-container">
  <img 
    class="responsive-image"
    src="https://picsum.photos/300/200"
    alt="Beispielbild">
</div>`,
        explanation: `Bilder richtig einbinden:
- max-width begrenzt die Größe
- width: 100% macht Bilder responsive
- height: auto behält das Seitenverhältnis
- overflow: hidden für Container
- border-radius für runde Ecken
- transform: scale für Hover-Effekt`
      },
      {
        title: "Formulare stylen",
        description: "Ansprechende Gestaltung von Formularelementen",
        code: `.form-group {
  /* Container für Formularelemente */
  margin-bottom: 15px;
}

.form-label {
  /* Label-Styling */
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  /* Input-Styling */
  width: 100%;
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  /* Fokus-Effekt */
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #4a90e2;
  outline: none;
}`,
        html: `<div class="form-group">
  <label class="form-label">Name:</label>
  <input type="text" class="form-input" placeholder="Dein Name">
</div>
<div class="form-group">
  <label class="form-label">Email:</label>
  <input type="email" class="form-input" placeholder="deine@email.de">
</div>`,
        explanation: `Formular-Styling Grundlagen:
- Gruppierung mit form-group
- Labels klar positionieren
- Einheitliche Größen und Abstände
- Fokus-Effekte für bessere Usability
- Platzhaltertext (placeholder)
- Übergänge für interaktive Elemente
- Klare visuelle Hierarchie`
      }
    ]
  },
  html: {
    title: "HTML Grundlagen",
    examples: [
      // Grundlegende HTML-Elemente
      {
        title: "Dokumentstruktur",
        description: "Die grundlegende Struktur eines HTML-Dokuments",
        code: `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8">
    <title>Meine Webseite</title>
  </head>
  <body>
    <h1>Willkommen</h1>
    <p>Dies ist meine erste Webseite.</p>
  </body>
</html>`,
        explanation: `- <!DOCTYPE html> definiert HTML5
- <html> ist das Wurzelelement
- lang="de" setzt die Sprache
- <head> enthält Metadaten
- <meta charset="UTF-8"> definiert die Zeichenkodierung
- <title> setzt den Titel im Browser-Tab
- <body> enthält den sichtbaren Inhalt`
      },
      // Textformatierung
      {
        title: "Textformatierung",
        description: "HTML-Elemente zur Texthervorhebung",
        code: `<p>Dies ist <strong>wichtiger</strong> Text.</p>
<p>Dies ist <em>betonter</em> Text.</p>
<p>Dies ist <mark>hervorgehobener</mark> Text.</p>
<p>Dies ist <small>kleinerer</small> Text.</p>
<p>Dies ist <del>gelöschter</del> Text.</p>
<p>Dies ist <ins>eingefügter</ins> Text.</p>`,
        explanation: `- <strong> für wichtigen Text
- <em> für Betonung
- <mark> für Hervorhebung
- <small> für Kleingedrucktes
- <del> für gelöschten Text
- <ins> für neuen Text`
      },
      // Listen
      {
        title: "Listen",
        description: "Verschiedene Arten von Listen",
        code: `<ul>
  <li>Ungeordneter Punkt 1</li>
  <li>Ungeordneter Punkt 2</li>
</ul>

<ol>
  <li>Nummerierter Punkt 1</li>
  <li>Nummerierter Punkt 2</li>
</ol>

<dl>
  <dt>Begriff</dt>
  <dd>Definition des Begriffs</dd>
</dl>`,
        explanation: `- <ul> für ungeordnete Listen
- <ol> für nummerierte Listen
- <dl> für Definitionslisten
- <dt> für den Begriff
- <dd> für die Definition`
      },
      // Links
      {
        title: "Links",
        description: "Verschiedene Arten von Links",
        code: `<a href="https://example.com">Externer Link</a>

<a href="kontakt.html">Interne Seite</a>

<a href="mailto:email@example.com">Email Link</a>

<a href="#top">Nach oben springen</a>`,
        explanation: `- href="URL" definiert das Linkziel
- Relative Pfade für interne Seiten
- mailto: für Email-Links
- # für Sprungmarken
- target="_blank" für neue Tabs`
      },
      // Bilder
      {
        title: "Bilder",
        description: "Bilder einbinden und formatieren",
        code: `<img src="bild.jpg" 
     alt="Beschreibung" 
     width="300">

<figure>
  <img src="foto.jpg" 
       alt="Landschaft">
  <figcaption>
    Schöne Berglandschaft
  </figcaption>
</figure>`,
        explanation: `- src für Bildquelle
- alt für Beschreibung
- width/height optional
- figure für Bildgruppen
- figcaption für Beschriftung`
      },
      // Formulare
      {
        title: "Formulare",
        description: "Grundlegende Formularelemente",
        code: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Senden</button>
</form>`,
        explanation: `- form definiert Formular
- label für Beschriftungen
- input für Eingabefelder
- required für Pflichtfelder
- type definiert Eingabetyp`
      },
      // Tabellen
      {
        title: "Tabellen",
        description: "Tabellenstruktur und Formatierung",
        code: `<table>
  <thead>
    <tr>
      <th>Spalte 1</th>
      <th>Spalte 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Zelle 1</td>
      <td>Zelle 2</td>
    </tr>
  </tbody>
</table>`,
        explanation: `- table für Tabellen
- thead für Kopfzeilen
- tbody für Inhalt
- tr für Zeilen
- th für Überschriften
- td für Datenzellen`
      },
      // Semantische Elemente
      {
        title: "Semantische Struktur",
        description: "Semantische HTML5 Elemente",
        code: `<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Titel</h1>
    <p>Inhalt...</p>
  </article>
</main>

<footer>
  <p>&copy; 2024</p>
</footer>`,
        explanation: `- header für Kopfbereich
- nav für Navigation
- main für Hauptinhalt
- article für Artikel
- footer für Fußbereich`
      },
      // Multimedia
      {
        title: "Multimedia",
        description: "Audio und Video einbinden",
        code: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
</audio>

<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
</video>`,
        explanation: `- audio für Audiodateien
- video für Videodateien
- controls für Steuerung
- source für Dateiquellen
- Mehrere Formate möglich`
      },
      // Meta-Informationen
      {
        title: "Meta-Tags",
        description: "Wichtige Meta-Informationen",
        code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" 
        content="width=device-width">
  <meta name="description" 
        content="Seitenbeschreibung">
  <title>Seitentitel</title>
</head>`,
        explanation: `- charset für Kodierung
- viewport für Mobile
- description für SEO
- title für Browser-Tab
- keywords für Suche`
      }
    ]
  }
};
