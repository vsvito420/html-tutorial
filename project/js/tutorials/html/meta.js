export const meta = {
  title: "Meta-Informationen",
  examples: [
    {
      title: "Grundlegende Meta-Tags",
      description: "Wichtige Meta-Informationen für Webseiten",
      code: `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
  <meta name="description" 
        content="Beschreibung der Webseite für Suchmaschinen">
  <meta name="keywords" 
        content="HTML, Tutorial, Webentwicklung">
  <meta name="author" content="Max Mustermann">
  <title>Seitentitel</title>
</head>`,
      explanation: `- charset für Zeichenkodierung
- viewport für mobile Ansicht
- description für Suchmaschinen
- keywords für Suchbegriffe
- author für Autorinfo
- title wichtig für SEO`
    },
    {
      title: "Social Media Meta-Tags",
      description: "Meta-Tags für soziale Medien",
      code: `<head>
  <!-- Open Graph für Facebook -->
  <meta property="og:title" 
        content="Seitentitel">
  <meta property="og:description" 
        content="Seitenbeschreibung">
  <meta property="og:image" 
        content="https://example.com/bild.jpg">
  <meta property="og:url" 
        content="https://example.com">

  <!-- Twitter Cards -->
  <meta name="twitter:card" 
        content="summary_large_image">
  <meta name="twitter:site" 
        content="@benutzername">
  <meta name="twitter:title" 
        content="Seitentitel">
  <meta name="twitter:description" 
        content="Seitenbeschreibung">
  <meta name="twitter:image" 
        content="https://example.com/bild.jpg">
</head>`,
      explanation: `- og: für Facebook/Open Graph
- twitter: für Twitter Cards
- Bilder sollten optimiert sein
- URLs müssen absolut sein
- Wichtig für Social Sharing
- Verbessert Link-Vorschauen`
    }
  ]
};