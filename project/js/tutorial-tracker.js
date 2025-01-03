// Tutorial Tracker für die Verwaltung des Tutorial-Fortschritts
import { ProgressTracker } from './roadmap.js';

export class TutorialTracker {
  constructor(type) {
    this.type = type; // 'html' oder 'css'
    this.progressTracker = new ProgressTracker();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Wenn der "Nächstes" Button geklickt wird, prüfen ob das Tutorial abgeschlossen wurde
    const nextButton = document.getElementById('nextExample');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        const currentExample = this.getCurrentExample();
        if (currentExample) {
          this.checkTutorialProgress(currentExample);
        }
      });
    }
  }

  getCurrentExample() {
    // ID aus dem Titel extrahieren
    const title = document.getElementById('exampleTitle');
    if (!title) return null;

    // Beispiel: "Grundstruktur einer Webseite" -> "structure"
    const titleText = title.textContent.toLowerCase();
    
    // Mapping von Titeln zu IDs
    const titleToId = {
      // HTML Tutorial IDs
      'grundstruktur einer webseite': 'structure',
      'text und überschriften': 'text',
      'listen': 'lists',
      'links': 'links',
      'bilder': 'images',
      'tabellen': 'tables',
      'formulare': 'forms',
      'semantische elemente': 'semantic',
      'multimedia': 'media',

      // CSS Tutorial IDs
      'selektoren': 'selectors',
      'farben und text': 'colors',
      'box-modell': 'box-model',
      'layout grundlagen': 'layout',
      'flexbox': 'flexbox',
      'grid': 'grid',
      'responsive design': 'responsive',
      'animationen': 'animations'
    };

    // ID aus dem Mapping zurückgeben
    for (const [key, id] of Object.entries(titleToId)) {
      if (titleText.includes(key)) {
        return id;
      }
    }

    return null;
  }

  checkTutorialProgress(tutorialId) {
    // Prüfen ob das Tutorial bereits als abgeschlossen markiert wurde
    if (!this.progressTracker.isCompleted(this.type, tutorialId)) {
      // Tutorial als abgeschlossen markieren
      this.progressTracker.markTutorialComplete(this.type, tutorialId);

      // Event auslösen für die Roadmap-Aktualisierung
      const event = new CustomEvent('tutorial-completed', {
        detail: {
          type: this.type,
          id: tutorialId
        }
      });
      window.dispatchEvent(event);
    }
  }
}
