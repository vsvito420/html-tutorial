// Styles für die Roadmap-Komponente
const styles = `
.roadmap {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 5px var(--shadow-color);
}

.roadmap-title {
  color: var(--text-primary);
  margin: 0 0 20px 0;
  font-size: 1.5em;
}

.roadmap-sections {
  display: grid;
  gap: 20px;
}

.roadmap-section h3 {
  color: var(--text-primary);
  margin: 0 0 15px 0;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.roadmap-section h3::before {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background: var(--accent-color);
  border-radius: 50%;
}

.roadmap-items {
  display: grid;
  gap: 10px;
  padding-left: 20px;
  border-left: 2px solid var(--border-color);
}

.roadmap-item {
  position: relative;
  padding: 10px 15px;
  background: var(--bg-primary);
  border-radius: 8px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.roadmap-item::before {
  content: "";
  position: absolute;
  left: -26px;
  top: 50%;
  width: 12px;
  height: 12px;
  background: var(--bg-secondary);
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}

.roadmap-item.completed {
  background: var(--accent-color);
  color: var(--bg-secondary);
}

.roadmap-item.completed::before {
  background: var(--accent-color);
}

.quiz-progress {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.quiz-progress h3 {
  color: var(--text-primary);
  margin: 0 0 15px 0;
}

.quiz-scores {
  display: grid;
  gap: 10px;
}

.quiz-score {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 500;
}

.quiz-score.easy {
  background: #e6ffe6;
  color: #006600;
}

.quiz-score.medium {
  background: #fff3e6;
  color: #cc6600;
}

.quiz-score.hard {
  background: #ffe6e6;
  color: #cc0000;
}

.difficulty-label {
  font-size: 0.9em;
}

.score {
  font-weight: 600;
}

@media (max-width: 768px) {
  .roadmap {
    margin: 15px;
  }
}
`;

// Styles in den DOM einfügen
function injectStyles() {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export { injectStyles };
