export const basicElements = {
  title: "Grundlegende HTML-Elemente",
  examples: [
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
    {
      title: "Überschriften",
      description: "HTML bietet sechs Ebenen von Überschriften",
      code: `<h1>Hauptüberschrift</h1>
<h2>Wichtiger Abschnitt</h2>
<h3>Unterabschnitt</h3>
<h4>Kleinerer Abschnitt</h4>
<h5>Noch kleinerer Abschnitt</h5>
<h6>Kleinste Überschrift</h6>`,
      explanation: `- <h1> ist die wichtigste Überschrift
- Nur eine <h1> pro Seite verwenden
- Überschriften hierarchisch strukturieren
- Keine Ebenen überspringen
- Wichtig für SEO und Barrierefreiheit`
    },
    {
      title: "Textabsätze",
      description: "Verschiedene Möglichkeiten, Text zu strukturieren",
      code: `<p>Dies ist ein normaler Textabsatz. Er kann 
mehrere Zeilen umfassen.</p>

<p>Dies ist ein zweiter Absatz mit
<br>einem erzwungenen Zeilenumbruch.</p>

<hr>

<p>Nach einer horizontalen Linie.</p>`,
      explanation: `- <p> definiert einen Textabsatz
- Mehrere Leerzeichen werden zu einem zusammengefasst
- <br> erzwingt einen Zeilenumbruch
- <hr> erstellt eine horizontale Linie
- Absätze haben automatisch Abstand zueinander`
    }
  ]
};