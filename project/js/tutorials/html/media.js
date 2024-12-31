export const media = {
  title: "Multimedia",
  examples: [
    {
      title: "Audio einbinden",
      description: "Audio-Dateien in HTML einbetten",
      code: `<!-- Einfacher Audio-Player -->
<audio controls>
  <source src="musik.mp3" type="audio/mpeg">
  <source src="musik.ogg" type="audio/ogg">
  Ihr Browser unterstützt das Audio-Element nicht.
</audio>

<!-- Erweiterter Audio-Player -->
<audio controls loop autoplay muted>
  <source src="hintergrund.mp3" type="audio/mpeg">
  <source src="hintergrund.ogg" type="audio/ogg">
  <a href="hintergrund.mp3">Audio herunterladen</a>
</audio>`,
      explanation: `- controls zeigt Bedienelemente
- source für verschiedene Formate
- loop für Endlosschleife
- autoplay startet automatisch
- muted startet stumm
- Fallback-Link für alte Browser`
    },
    {
      title: "Video einbinden",
      description: "Video-Dateien in HTML einbetten",
      code: `<!-- Einfacher Video-Player -->
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Ihr Browser unterstützt das Video-Element nicht.
</video>

<!-- Video mit Poster und Optionen -->
<video width="640" height="360" 
       controls poster="vorschau.jpg"
       preload="auto">
  <source src="video.mp4" type="video/mp4">
  <track kind="subtitles" 
         src="untertitel.vtt" 
         srclang="de" 
         label="Deutsch">
</video>`,
      explanation: `- width/height für Größe
- poster für Vorschaubild
- preload für Ladeverhalten
- track für Untertitel
- Mehrere Quellformate möglich
- WebM als modernes Format`
    }
  ]
};