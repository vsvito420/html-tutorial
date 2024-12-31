# HTML & CSS Tutorial Platform

An interactive learning platform for HTML and CSS basics, designed for KiberOne students. The platform features interactive tutorials, live code examples, and practical exercises.

## Features

- 📚 Interactive HTML & CSS tutorials
- 💻 Live code examples with instant preview
- 🎯 Practical exercises with varying difficulty levels
- 📱 Fully responsive design
- 🎨 Syntax highlighting for code examples
- 🔄 Hot-reload during development

## Project Structure

```
project/
├── index.html              # Landing page
├── html.html              # HTML tutorial page
├── css.html               # CSS tutorial page
├── aufgaben.html          # Exercises/tasks page
├── styles.css             # Global styles
├── script.js              # Main JavaScript file
├── js/                    # JavaScript modules
│   ├── tutorial-page.js   # Tutorial page functionality
│   ├── tutorial-content.js
│   └── tutorials/         # Tutorial content modules
│       ├── html/          # HTML tutorial examples
│       └── css/          # CSS tutorial examples
└── aufgaben/             # Exercise examples and solutions
    └── beispiele/        # Example solutions
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080` with hot-reload enabled.

## Development

- `npm run dev` - Start development server with hot-reload
- `npm start` - Alias for `npm run dev`
- `npm run preview` - Start preview server without hot-reload
- `npm run build` - Build project (static files, no build step required)

## Deployment

The project is configured for deployment to Cloudflare Pages:

```bash
npm run deploy
```

This will publish the site to Cloudflare Pages using the configured domain in `wrangler.toml`.

## Contributing

To contribute to this tutorial platform:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Project Structure Details

### Tutorial Pages

- `html.html` and `css.html` serve as the main tutorial pages
- Each tutorial is broken down into interactive examples
- Examples include code snippets and live previews
- Navigation between examples is handled by `tutorial-page.js`

### Exercises

- `aufgaben.html` contains practical exercises
- Exercises are categorized by difficulty (Easy, Medium, Hard)
- Each exercise includes:
  - Clear objectives
  - Step-by-step instructions
  - Helpful tips
  - Example solutions (where available)

### Styling

- Responsive design with mobile-first approach
- Clean and modern UI with consistent styling
- Syntax highlighting for code examples using Prism.js
- Flexible layout using CSS Grid and Flexbox

### JavaScript Architecture

- Modular structure with ES modules
- Separate concerns for tutorial content and navigation
- Interactive preview functionality
- Dynamic content loading

## License

This project is intended for educational purposes. Please check with the project maintainers for usage permissions.
