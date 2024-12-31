export const semantic = {
  title: "Semantische Elemente",
  examples: [
    {
      title: "Seitenstruktur",
      description: "Semantische Strukturierung einer Webseite",
      code: `<header>
  <h1>Webseitentitel</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Über uns</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>Hauptartikel</h2>
    <section>
      <h3>Erster Abschnitt</h3>
      <p>Inhalt...</p>
    </section>
    <section>
      <h3>Zweiter Abschnitt</h3>
      <p>Weiterer Inhalt...</p>
    </section>
  </article>

  <aside>
    <h3>Zusatzinformationen</h3>
    <p>Seitenleiste...</p>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Meine Webseite</p>
</footer>`,
      explanation: `- <header> für Kopfbereich
- <nav> für Navigation
- <main> für Hauptinhalt
- <article> für eigenständigen Inhalt
- <section> für thematische Gruppierung
- <aside> für Nebeninhalte
- <footer> für Fußbereich
- Wichtig für SEO und Barrierefreiheit`
    },
    {
      title: "Artikel und Blogposts",
      description: "Semantische Struktur für Artikel",
      code: `<article>
  <header>
    <h1>Artikeltitel</h1>
    <p>
      <time datetime="2024-01-15">15. Januar 2024</time>
      von <address>Max Mustermann</address>
    </p>
  </header>

  <section>
    <h2>Einleitung</h2>
    <p>Artikel-Einleitung...</p>
  </section>

  <section>
    <h2>Hauptteil</h2>
    <p>Artikel-Inhalt...</p>
    
    <figure>
      <img src="bild.jpg" alt="Beschreibung">
      <figcaption>Bildbeschreibung</figcaption>
    </figure>
  </section>

  <footer>
    <section class="tags">
      <h3>Tags:</h3>
      <ul>
        <li>HTML</li>
        <li>Semantic Web</li>
      </ul>
    </section>
  </footer>
</article>`,
      explanation: `- <article> für Blogpost/Artikel
- <time> für Zeitangaben
- <address> für Kontaktinfos
- datetime für maschinenlesbare Zeit
- Verschachtelte <section>
- <figure> für Medieninhalte
- Semantische Struktur wichtig für SEO`
    }
  ]
};