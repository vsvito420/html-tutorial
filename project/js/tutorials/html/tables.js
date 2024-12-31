export const tables = {
  title: "Tabellen",
  examples: [
    {
      title: "Einfache Tabelle",
      description: "Grundlegende Tabellenstruktur",
      code: `<table>
  <caption>Mitarbeiterliste</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Abteilung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>Entwickler</td>
      <td>IT</td>
    </tr>
    <tr>
      <td>Erika Musterfrau</td>
      <td>Designerin</td>
      <td>Marketing</td>
    </tr>
  </tbody>
</table>`,
      explanation: `- <table> definiert eine Tabelle
- <caption> für Tabellentitel
- <thead> gruppiert Kopfzeilen
- <tbody> gruppiert Tabelleninhalt
- <tr> definiert Tabellenzeile
- <th> für Überschriftenzellen
- <td> für Datenzellen`
    },
    {
      title: "Erweiterte Tabellenformatierung",
      description: "Zellenverbindung und Gruppierung",
      code: `<table>
  <colgroup>
    <col style="background-color: #f0f0f0">
    <col span="2">
  </colgroup>
  <thead>
    <tr>
      <th rowspan="2">Produkt</th>
      <th colspan="2">Verkäufe</th>
    </tr>
    <tr>
      <th>Q1</th>
      <th>Q2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Produkt A</td>
      <td>100</td>
      <td>150</td>
    </tr>
    <tr>
      <td>Produkt B</td>
      <td>80</td>
      <td>120</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Gesamt</th>
      <td>180</td>
      <td>270</td>
    </tr>
  </tfoot>
</table>`,
      explanation: `- <colgroup> für Spaltenformatierung
- <col> definiert Spalteneinstellungen
- colspan="n" verbindet n Spalten
- rowspan="n" verbindet n Zeilen
- <tfoot> für Fußzeilen
- span="n" für mehrere Spalten`
    }
  ]
};