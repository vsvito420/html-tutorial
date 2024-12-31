export const images = {
  title: "Bilder und Medien",
  examples: [
    {
      title: "Grundlegende Bildeinbindung",
      description: "Verschiedene Möglichkeiten, Bilder einzubinden",
      code: `<!-- Einfaches Bild -->
<img src="bild.jpg" 
     alt="Beschreibung des Bildes">

<!-- Bild mit Größenangaben -->
<img src="bild.jpg" 
     alt="Beschreibung" 
     width="300" 
     height="200">

<!-- Bild mit Bildunterschrift -->
<figure>
  <img src="bild.jpg" 
       alt="Beschreibung">
  <figcaption>
    Dies ist die Bildunterschrift
  </figcaption>
</figure>`,
      explanation: `- src definiert die Bildquelle
- alt ist PFLICHT für Barrierefreiheit
- width/height verhindern Layout-Verschiebungen
- figure gruppiert Bild mit Beschriftung
- figcaption für Bildunterschriften
- Relative oder absolute Pfade möglich`
    },
    {
      title: "Responsive Bilder",
      description: "Moderne Techniken für responsive Bilder",
      code: `<!-- Verschiedene Bildgrößen -->
<img src="small.jpg"
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 900w"
     sizes="(max-width: 500px) 300px,
            (max-width: 900px) 600px,
            900px"
     alt="Responsives Bild">

<!-- Verschiedene Bildformate -->
<picture>
  <source srcset="bild.webp" type="image/webp">
  <source srcset="bild.jpg" type="image/jpeg">
  <img src="bild.jpg" alt="Bild mit Fallback">
</picture>`,
      explanation: `- srcset für verschiedene Bildgrößen
- sizes definiert Breakpoints
- w-Deskriptor gibt Bildbreite an
- picture für verschiedene Bildformate
- source für alternative Bildquellen
- Automatische Auswahl der besten Variante`
    }
  ]
};