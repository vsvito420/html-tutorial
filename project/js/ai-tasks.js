// Aufgaben aus den Tutorials
export const tasks = {
    html: {
        basic: [
            {
                id: "html-1",
                title: "Grundlegende HTML-Struktur",
                description: "Erstelle eine HTML-Seite mit:\n- Doctype-Deklaration\n- HTML, Head und Body Tags\n- Titel und Meta-Tags",
                category: "Grundlagen"
            },
            {
                id: "html-2",
                title: "Überschriften und Absätze",
                description: "Erstelle eine Seite mit:\n- Einer H1-Überschrift\n- Zwei H2-Überschriften\n- Mehreren Absätzen mit verschiedenen Textformatierungen",
                category: "Text"
            }
        ],
        intermediate: [
            {
                id: "html-3",
                title: "Formulare erstellen",
                description: "Erstelle ein Kontaktformular mit:\n- Name, Email und Nachricht\n- Verschiedenen Input-Typen\n- Submit-Button",
                category: "Formulare"
            },
            {
                id: "html-4",
                title: "Listen und Navigation",
                description: "Erstelle eine Navigation mit:\n- Ungeordneter Liste\n- Links zu verschiedenen Seiten\n- Aktuellem Seiten-Indikator",
                category: "Navigation"
            }
        ],
        advanced: [
            {
                id: "html-5",
                title: "Semantische Struktur",
                description: "Erstelle ein semantisches Layout mit:\n- Header, Nav, Main, Aside und Footer\n- Artikel-Sektion\n- Sinnvoller Verschachtelung",
                category: "Semantik"
            }
        ]
    },
    css: {
        basic: [
            {
                id: "css-1",
                title: "Grundlegende Textformatierung",
                description: "Gestalte den Text mit:\n- Verschiedenen Schriftarten\n- Farben und Größen\n- Zeilenabständen",
                category: "Styling",
                template: `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Text Styling</title>
</head>
<body>
    <h1>Überschrift</h1>
    <p>Ein Beispieltext zum Formatieren.</p>
    <p class="highlight">Dieser Text soll hervorgehoben werden.</p>
</body>
</html>`
            },
            {
                id: "css-2",
                title: "Box Model Übung",
                description: "Gestalte Boxen mit:\n- Verschiedenen Paddings\n- Margins und Borders\n- Border-Radius",
                category: "Layout",
                template: `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Box Model</title>
</head>
<body>
    <div class="box">Box 1</div>
    <div class="box highlight">Box 2</div>
</body>
</html>`
            }
        ],
        intermediate: [
            {
                id: "css-3",
                title: "Flexbox Layout",
                description: "Erstelle ein flexibles Layout mit:\n- Flex-Container\n- Verschiedenen Flex-Items\n- Responsive Anordnung",
                category: "Layout",
                template: `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Flexbox</title>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>
</html>`
            }
        ],
        advanced: [
            {
                id: "css-4",
                title: "Grid Layout",
                description: "Erstelle ein Grid-Layout mit:\n- Verschiedenen Spalten und Zeilen\n- Grid-Areas\n- Responsive Design",
                category: "Layout",
                template: `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Grid Layout</title>
</head>
<body>
    <div class="grid-container">
        <header>Header</header>
        <nav>Navigation</nav>
        <main>Hauptinhalt</main>
        <aside>Seitenleiste</aside>
        <footer>Footer</footer>
    </div>
</body>
</html>`
            }
        ]
    }
};

// Funktion zum Speichern des Fortschritts
export function saveProgress(userId, taskId, code, feedback, completed) {
    const progress = JSON.parse(localStorage.getItem('aiTestProgress') || '{}');
    if (!progress[userId]) {
        progress[userId] = {};
    }
    
    progress[userId][taskId] = {
        code,
        feedback,
        completed,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('aiTestProgress', JSON.stringify(progress));
}

// Funktion zum Laden des Fortschritts
export function loadProgress(userId, taskId) {
    const progress = JSON.parse(localStorage.getItem('aiTestProgress') || '{}');
    return progress[userId]?.[taskId] || null;
}

// Funktion zum Laden aller Fortschritte für einen Lehrer
export function loadAllProgress() {
    return JSON.parse(localStorage.getItem('aiTestProgress') || '{}');
}
