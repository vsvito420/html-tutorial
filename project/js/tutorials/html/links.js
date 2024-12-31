export const links = {
  title: "Links und Navigation",
  examples: [
    {
      title: "Grundlegende Links",
      description: "Verschiedene Arten von Hyperlinks",
      code: `<!-- Externer Link -->
<a href="https://example.com">
  Externe Webseite
</a>

<!-- Interner Link -->
<a href="/kontakt.html">
  Kontaktseite
</a>

<!-- Link zu Bereich auf der Seite -->
<a href="#section1">
  Zum Abschnitt 1
</a>

<!-- Link mit Zielattribut -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer">
  Öffnet in neuem Tab
</a>`,
      explanation: `- href definiert das Linkziel
- Absolute URLs für externe Links
- Relative URLs für interne Links
- # für Sprungmarken innerhalb der Seite
- target="_blank" öffnet in neuem Tab
- rel="noopener noreferrer" für Sicherheit bei externen Links`
    },
    {
      title: "Spezielle Links",
      description: "E-Mail, Telefon und Download-Links",
      code: `<!-- E-Mail Link -->
<a href="mailto:info@example.com?subject=Anfrage">
  E-Mail senden
</a>

<!-- Telefon Link -->
<a href="tel:+491234567890">
  +49 123 456 7890
</a>

<!-- Download Link -->
<a href="dokument.pdf" download>
  PDF herunterladen
</a>

<!-- Link mit zusätzlichen Attributen -->
<a href="wichtig.html"
   title="Wichtige Informationen"
   accesskey="w">
  Wichtige Seite (Alt+W)
</a>`,
      explanation: `- mailto: für E-Mail-Links
- tel: für Telefonnummern
- download für Datei-Downloads
- title zeigt Tooltip beim Hover
- accesskey definiert Tastenkombination
- Zusätzliche Parameter bei mailto möglich (subject, cc, bcc)`
    }
  ]
};