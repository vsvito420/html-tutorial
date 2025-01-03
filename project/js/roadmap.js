// Roadmap Datenstruktur
const roadmapData = {
  html: {
    title: 'HTML Tutorial',
    sections: [
      {
        id: 'basic',
        title: 'Grundlagen',
        items: [
          { id: 'structure', title: 'Dokumentstruktur' },
          { id: 'text', title: 'Text & Überschriften' },
          { id: 'lists', title: 'Listen' },
          { id: 'links', title: 'Links' },
          { id: 'images', title: 'Bilder' }
        ]
      },
      {
        id: 'intermediate',
        title: 'Fortgeschritten',
        items: [
          { id: 'tables', title: 'Tabellen' },
          { id: 'forms', title: 'Formulare' },
          { id: 'semantic', title: 'Semantische Elemente' },
          { id: 'media', title: 'Multimedia' }
        ]
      }
    ]
  },
  css: {
    title: 'CSS Tutorial',
    sections: [
      {
        id: 'basic',
        title: 'Grundlagen',
        items: [
          { id: 'selectors', title: 'Selektoren' },
          { id: 'colors', title: 'Farben & Text' },
          { id: 'box-model', title: 'Box-Modell' },
          { id: 'layout', title: 'Layout' }
        ]
      },
      {
        id: 'intermediate',
        title: 'Fortgeschritten',
        items: [
          { id: 'flexbox', title: 'Flexbox' },
          { id: 'grid', title: 'Grid' },
          { id: 'responsive', title: 'Responsive Design' },
          { id: 'animations', title: 'Animationen' }
        ]
      }
    ]
  }
};

// Fortschritt im LocalStorage speichern
class ProgressTracker {
  constructor() {
    this.storage = window.localStorage;
    this.initializeProgress();
  }

  initializeProgress() {
    if (!this.storage.getItem('tutorialProgress')) {
      const initialProgress = {
        html: { completed: [] },
        css: { completed: [] },
        quiz: {
          html: { completed: [], scores: {} },
          css: { completed: [], scores: {} }
        }
      };
      this.storage.setItem('tutorialProgress', JSON.stringify(initialProgress));
    }
  }

  getProgress() {
    return JSON.parse(this.storage.getItem('tutorialProgress'));
  }

  markTutorialComplete(type, itemId) {
    const progress = this.getProgress();
    if (!progress[type].completed.includes(itemId)) {
      progress[type].completed.push(itemId);
      this.storage.setItem('tutorialProgress', JSON.stringify(progress));
    }
  }

  markQuizComplete(type, difficulty, score) {
    const progress = this.getProgress();
    const quizId = `${type}-${difficulty}`;
    if (!progress.quiz[type].completed.includes(quizId)) {
      progress.quiz[type].completed.push(quizId);
    }
    progress.quiz[type].scores[quizId] = score;
    this.storage.setItem('tutorialProgress', JSON.stringify(progress));
    
    // Event für sofortige UI-Aktualisierung auslösen
    const event = new CustomEvent('quiz-progress-updated', {
      detail: { type, difficulty, score }
    });
    window.dispatchEvent(event);
  }

  canStartTutorial(type, itemId) {
    const data = roadmapData[type];
    let targetItem = null;
    let section = null;

    // Finde das Item und seine Sektion
    for (const sec of data.sections) {
      const item = sec.items.find(i => i.id === itemId);
      if (item) {
        targetItem = item;
        section = sec;
        break;
      }
    }

    if (!targetItem) return false;

    const progress = this.getProgress();
    
    // Prüfe ob vorherige Sektionen abgeschlossen sind
    const sectionIndex = data.sections.indexOf(section);
    if (sectionIndex > 0) {
      for (let i = 0; i < sectionIndex; i++) {
        const prevSection = data.sections[i];
        const allCompleted = prevSection.items.every(item => 
          progress[type].completed.includes(item.id)
        );
        if (!allCompleted) return false;
      }
    }

    // Prüfe ob vorherige Items in der gleichen Sektion abgeschlossen sind
    const itemIndex = section.items.indexOf(targetItem);
    if (itemIndex > 0) {
      for (let i = 0; i < itemIndex; i++) {
        if (!progress[type].completed.includes(section.items[i].id)) {
          return false;
        }
      }
    }

    return true;
  }

  isCompleted(type, itemId) {
    const progress = this.getProgress();
    return progress[type].completed.includes(itemId);
  }

  getQuizScore(type, difficulty) {
    const progress = this.getProgress();
    const quizId = `${type}-${difficulty}`;
    return progress.quiz[type].scores[quizId] || 0;
  }
}

// Roadmap UI Komponente
class RoadmapUI {
  constructor(container, type) {
    this.container = container;
    this.type = type;
    this.progressTracker = new ProgressTracker();
    this.render();
  }

  render() {
    const data = roadmapData[this.type];
    const progress = this.progressTracker.getProgress();

    this.container.innerHTML = `
      <div class="roadmap">
        <h2 class="roadmap-title">${data.title} Fortschritt</h2>
        <div class="roadmap-sections">
          ${data.sections.map(section => this.renderSection(section, progress)).join('')}
        </div>
      </div>
    `;
  }

  renderSection(section, progress) {
    return `
      <div class="roadmap-section">
        <h3>${section.title}</h3>
        <div class="roadmap-items">
          ${section.items.map(item => this.renderItem(item, progress)).join('')}
        </div>
      </div>
    `;
  }

  renderItem(item, progress) {
    const isCompleted = this.progressTracker.isCompleted(this.type, item.id);
    const canStart = this.progressTracker.canStartTutorial(this.type, item.id);
    const classes = [
      'roadmap-item',
      isCompleted ? 'completed' : '',
      !isCompleted && !canStart ? 'locked' : ''
    ].filter(Boolean).join(' ');

    return `
      <div class="${classes}" 
           data-id="${item.id}"
           title="${!canStart ? 'Vorherige Tutorials müssen zuerst abgeschlossen werden' : ''}"
           style="${!canStart ? 'cursor: not-allowed; opacity: 0.6;' : ''}">
        ${item.title}
      </div>
    `;
  }

  updateProgress(itemId) {
    this.progressTracker.markTutorialComplete(this.type, itemId);
    this.render();
  }
}

// Quiz Fortschritt UI
class QuizProgressUI {
  constructor(container, type) {
    this.container = container;
    this.type = type;
    this.progressTracker = new ProgressTracker();
    this.render();
  }

  render() {
    const difficulties = ['easy', 'medium', 'hard'];
    const progress = this.progressTracker.getProgress();

    this.container.innerHTML = `
      <div class="quiz-progress">
        <h3>Quiz Fortschritt</h3>
        <div class="quiz-scores">
          ${difficulties.map(diff => this.renderDifficultyScore(diff)).join('')}
        </div>
      </div>
    `;
  }

  renderDifficultyScore(difficulty) {
    const score = this.progressTracker.getQuizScore(this.type, difficulty);
    const difficultyText = {
      easy: 'Leicht',
      medium: 'Mittel',
      hard: 'Schwer'
    };

    return `
      <div class="quiz-score ${difficulty}" style="--score-width: ${score}%">
        <span class="difficulty-label">${difficultyText[difficulty]}</span>
        <span class="score">${score}%</span>
      </div>
    `;
  }

  updateQuizProgress(difficulty, score) {
    this.progressTracker.markQuizComplete(this.type, difficulty, score);
    this.render();
  }
}

export { RoadmapUI, QuizProgressUI, ProgressTracker };
