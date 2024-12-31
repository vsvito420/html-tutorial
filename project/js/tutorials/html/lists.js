export const lists = {
  title: "Listen und Aufzählungen",
  examples: [
    {
      title: "Ungeordnete Listen",
      description: "Listen mit Aufzählungszeichen",
      code: `<ul>
  <li>Erster Punkt</li>
  <li>Zweiter Punkt
    <ul>
      <li>Unterpunkt 1</li>
      <li>Unterpunkt 2</li>
    </ul>
  </li>
  <li>Dritter Punkt</li>
</ul>`,
      explanation: `- <ul> erstellt eine ungeordnete Liste
- <li> definiert jeden Listenpunkt
- Listen können verschachtelt werden
- Automatische Einrückung bei Verschachtelung
- Verschiedene Aufzählungszeichen je nach Ebene`
    },
    {
      title: "Geordnete Listen",
      description: "Nummerierte Listen mit verschiedenen Stilen",
      code: `<ol>
  <li>Erster Schritt</li>
  <li>Zweiter Schritt</li>
  <li>Dritter Schritt</li>
</ol>

<ol type="A">
  <li>Punkt A</li>
  <li>Punkt B</li>
  <li>Punkt C</li>
</ol>

<ol type="i" start="4">
  <li>Punkt iv</li>
  <li>Punkt v</li>
  <li>Punkt vi</li>
</ol>`,
      explanation: `- <ol> erstellt eine geordnete Liste
- type="A" für Großbuchstaben
- type="a" für Kleinbuchstaben
- type="I" für römische Zahlen (groß)
- type="i" für römische Zahlen (klein)
- start="4" beginnt bei 4 (oder D, iv etc.)`
    },
    {
      title: "Beschreibungslisten",
      description: "Listen für Begriffe und deren Definitionen",
      code: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - 
      Sprache zur Strukturierung von Webseiten</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets - 
      Sprache für das Styling von Webseiten</dd>
  
  <dt>JavaScript</dt>
  <dd>Programmiersprache für interaktive 
      Webseiten</dd>
</dl>`,
      explanation: `- <dl> definiert eine Beschreibungsliste
- <dt> enthält den zu beschreibenden Begriff
- <dd> enthält die Beschreibung/Definition
- Gut für Glossare und FAQs
- Mehrere <dd> pro <dt> möglich
- Mehrere <dt> pro <dd> möglich`
    }
  ]
};