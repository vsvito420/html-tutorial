// Quiz Manager für die Verwaltung des Quiz-Zustands und Fortschritts
import { ProgressTracker, QuizProgressUI } from './roadmap.js';

export class QuizManager {
  constructor() {
    this.progressTracker = new ProgressTracker();
    this.currentCategory = '';
    this.currentDifficulty = '';
    this.currentQuestions = [];
    this.currentQuestion = 0;
    this.score = 0;

    // Event Listener für Quiz-Fortschritt-Updates
    window.addEventListener('quiz-progress-updated', (event) => {
      const progressContainer = document.querySelector('.quiz-progress-container');
      if (progressContainer) {
        new QuizProgressUI(progressContainer, event.detail.type);
      }
    });
  }

  startQuiz(category, difficulty) {
    this.currentCategory = category;
    this.currentDifficulty = difficulty;
    this.currentQuestions = window.quizData[category][difficulty];
    this.currentQuestion = 0;
    this.score = 0;

    document.getElementById('categorySelection').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'block';
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.result-container').style.display = 'none';

    this.showQuestion();
  }

  showQuestion() {
    const question = this.currentQuestions[this.currentQuestion];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option-button';
      
      const statusIcon = document.createElement('span');
      statusIcon.className = 'status-icon';
      button.appendChild(statusIcon);
      
      const content = document.createElement('div');
      content.className = 'option-content';
      
      const optionContent = this.createOptionContent(option);
      if (optionContent instanceof Element) {
        content.appendChild(optionContent);
      } else {
        content.textContent = optionContent;
      }
      
      button.appendChild(content);
      button.onclick = () => this.checkAnswer(index);
      optionsContainer.appendChild(button);
    });

    this.updateProgressBar();
  }

  createOptionContent(option) {
    if (typeof option === 'string') {
      return option;
    }
    
    if (option.type === 'code') {
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.className = this.currentCategory === 'html' ? 'language-html' : 'language-css';
      code.textContent = option.content;
      pre.appendChild(code);
      Prism.highlightElement(code);
      return pre;
    }
  }

  updateProgressBar() {
    const progress = (this.currentQuestion / this.currentQuestions.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
  }

  checkAnswer(selectedIndex) {
    const question = this.currentQuestions[this.currentQuestion];
    const buttons = document.querySelectorAll('.option-button');
    
    buttons.forEach(button => {
      button.disabled = true;
      const statusIcon = button.querySelector('.status-icon');
      statusIcon.textContent = '✗';
    });
    
    if (selectedIndex === question.correct) {
      buttons[selectedIndex].classList.add('correct');
      buttons[selectedIndex].querySelector('.status-icon').textContent = '✓';
      this.score++;
    } else {
      buttons[selectedIndex].classList.add('incorrect');
      buttons[question.correct].classList.add('correct');
      buttons[question.correct].querySelector('.status-icon').textContent = '✓';
    }

    setTimeout(() => {
      this.currentQuestion++;
      if (this.currentQuestion < this.currentQuestions.length) {
        this.showQuestion();
      } else {
        this.showResult();
      }
    }, 1500);
  }

  showResult() {
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    const resultContainer = document.getElementById('result');
    resultContainer.style.display = 'block';
    document.getElementById('score').textContent = this.score;
    document.getElementById('total').textContent = this.currentQuestions.length;

    // Fortschritt speichern und UI sofort aktualisieren
    const scorePercentage = Math.round((this.score / this.currentQuestions.length) * 100);
    
    // Progress Container aktualisieren
    const progressContainer = document.querySelector('.quiz-progress-container');
    if (progressContainer) {
      this.progressTracker.markQuizComplete(this.currentCategory, this.currentDifficulty, scorePercentage);
      new QuizProgressUI(progressContainer, this.currentCategory);
    }
  }


  showCategories() {
    document.getElementById('categorySelection').style.display = 'grid';
    document.querySelector('.progress-container').style.display = 'none';
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
  }

  restartQuiz() {
    this.startQuiz(this.currentCategory, this.currentDifficulty);
  }
}
