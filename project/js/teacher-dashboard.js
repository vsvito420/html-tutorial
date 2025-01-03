import { loadAllProgress } from './ai-tasks.js';

export class TeacherDashboard {
    constructor(container) {
        this.container = container;
        this.progress = {};
        this.loadProgress();
    }

    loadProgress() {
        this.progress = loadAllProgress();
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="dashboard">
                <div class="filters">
                    <button onclick="this.filterByType('all')" class="filter-btn active">Alle</button>
                    <button onclick="this.filterByType('html')" class="filter-btn">HTML</button>
                    <button onclick="this.filterByType('css')" class="filter-btn">CSS</button>
                </div>
                <div class="progress-grid">
                    ${this.renderProgressGrid()}
                </div>
            </div>
        `;
    }

    renderProgressGrid() {
        let html = '';
        for (const userId in this.progress) {
            const userProgress = this.progress[userId];
            const stats = this.calculateStats(userProgress);
            
            html += `
                <div class="student-card">
                    <h3>Schüler: ${userId}</h3>
                    <div class="stats">
                        <div class="stat">
                            <span class="label">HTML:</span>
                            <div class="progress-bar">
                                <div class="progress" style="width: ${stats.html.percentage}%"></div>
                            </div>
                            <span class="value">${stats.html.completed}/${stats.html.total}</span>
                        </div>
                        <div class="stat">
                            <span class="label">CSS:</span>
                            <div class="progress-bar">
                                <div class="progress" style="width: ${stats.css.percentage}%"></div>
                            </div>
                            <span class="value">${stats.css.completed}/${stats.css.total}</span>
                        </div>
                    </div>
                    <button onclick="this.showStudentDetails('${userId}')" class="details-btn">
                        Details anzeigen
                    </button>
                </div>
            `;
        }
        return html || '<p>Noch keine Schülerdaten vorhanden.</p>';
    }

    calculateStats(userProgress) {
        const stats = {
            html: { completed: 0, total: 0, percentage: 0 },
            css: { completed: 0, total: 0, percentage: 0 }
        };

        for (const taskId in userProgress) {
            const type = taskId.startsWith('html-') ? 'html' : 'css';
            stats[type].total++;
            if (userProgress[taskId].completed) {
                stats[type].completed++;
            }
        }

        stats.html.percentage = (stats.html.completed / stats.html.total) * 100 || 0;
        stats.css.percentage = (stats.css.completed / stats.css.total) * 100 || 0;

        return stats;
    }

    showStudentDetails(userId) {
        const userProgress = this.progress[userId];
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Fortschritt für ${userId}</h2>
                    <button onclick="this.closest('.modal').remove()" class="close-btn">&times;</button>
                </div>
                <div class="task-list">
                    ${this.renderTaskList(userProgress)}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    renderTaskList(userProgress) {
        let html = '';
        const sortedTasks = Object.entries(userProgress).sort((a, b) => {
            const dateA = new Date(a[1].timestamp);
            const dateB = new Date(b[1].timestamp);
            return dateB - dateA;
        });

        for (const [taskId, task] of sortedTasks) {
            const date = new Date(task.timestamp).toLocaleString('de-DE');
            html += `
                <div class="task-item ${task.completed ? 'completed' : ''}">
                    <div class="task-header">
                        <h4>${taskId}</h4>
                        <span class="task-date">${date}</span>
                    </div>
                    <div class="task-content">
                        <div class="code-section">
                            <h5>Code:</h5>
                            <pre><code class="language-${taskId.startsWith('html-') ? 'html' : 'css'}">${task.code}</code></pre>
                        </div>
                        <div class="feedback-section">
                            <h5>Feedback:</h5>
                            <p>${task.feedback}</p>
                        </div>
                    </div>
                    <div class="task-status">
                        Status: ${task.completed ? 
                            '<span class="status completed">Abgeschlossen</span>' : 
                            '<span class="status pending">In Bearbeitung</span>'}
                    </div>
                </div>
            `;
        }
        return html || '<p>Keine Aufgaben bearbeitet.</p>';
    }

    filterByType(type) {
        const buttons = this.container.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        const cards = this.container.querySelectorAll('.student-card');
        cards.forEach(card => {
            if (type === 'all') {
                card.style.display = 'block';
            } else {
                const stats = card.querySelector(`.stat:has(.label:contains("${type.toUpperCase()}"))`);
                const hasProgress = stats && parseInt(stats.querySelector('.value').textContent.split('/')[0]) > 0;
                card.style.display = hasProgress ? 'block' : 'none';
            }
        });
    }
}
