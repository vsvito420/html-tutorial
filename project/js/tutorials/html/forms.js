export const forms = {
  title: "Formulare",
  examples: [
    {
      title: "Grundlegende Formularelemente",
      description: "Die wichtigsten Formularelemente im Überblick",
      code: `<form action="/submit" method="post">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" 
           required placeholder="Max Mustermann">
  </div>

  <div class="form-group">
    <label for="email">E-Mail:</label>
    <input type="email" id="email" name="email" 
           required placeholder="max@example.com">
  </div>

  <div class="form-group">
    <label for="message">Nachricht:</label>
    <textarea id="message" name="message" 
              rows="4" placeholder="Ihre Nachricht..."></textarea>
  </div>

  <button type="submit">Absenden</button>
</form>`,
      explanation: `- <form> definiert ein Formular
- action bestimmt die Ziel-URL
- method definiert die HTTP-Methode
- <label> verbindet Beschriftung mit Eingabefeld
- for/id verknüpft Label mit Input
- required macht Felder pflichtmäßig
- placeholder zeigt Beispieltext`
    },
    {
      title: "HTML5 Eingabetypen",
      description: "Moderne HTML5 Input-Typen und Validierung",
      code: `<form>
  <div>
    <label for="date">Datum:</label>
    <input type="date" id="date" name="date">
  </div>

  <div>
    <label for="time">Zeit:</label>
    <input type="time" id="time" name="time">
  </div>

  <div>
    <label for="number">Anzahl:</label>
    <input type="number" id="number" name="number"
           min="0" max="100" step="1">
  </div>

  <div>
    <label for="range">Bewertung:</label>
    <input type="range" id="range" name="range"
           min="0" max="5" step="0.5">
  </div>

  <div>
    <label for="color">Farbe:</label>
    <input type="color" id="color" name="color">
  </div>

  <div>
    <label for="tel">Telefon:</label>
    <input type="tel" id="tel" name="tel"
           pattern="[0-9]{4,}" title="Min. 4 Ziffern">
  </div>
</form>`,
      explanation: `- type="date" für Datumsauswahl
- type="time" für Zeitauswahl
- type="number" für Zahlen
- type="range" für Schieberegler
- type="color" für Farbwähler
- type="tel" für Telefonnummern
- pattern für eigene Validierung
- min/max/step für Zahlenbereiche`
    }
  ]
};