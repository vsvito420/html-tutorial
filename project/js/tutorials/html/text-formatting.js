export const textFormatting = {
  title: "Textformatierung",
  examples: [
    {
      title: "Grundlegende Textformatierung",
      description: "HTML-Elemente zur Texthervorhebung",
      code: `<p>Dies ist <strong>wichtiger</strong> Text.</p>
<p>Dies ist <em>betonter</em> Text.</p>
<p>Dies ist <mark>hervorgehobener</mark> Text.</p>
<p>Dies ist <small>kleinerer</small> Text.</p>
<p>Dies ist <del>gelöschter</del> Text.</p>
<p>Dies ist <ins>eingefügter</ins> Text.</p>
<p>Dies ist <sub>tiefgestellt</sub> und 
dies ist <sup>hochgestellt</sup>.</p>`,
      explanation: `- <strong> für wichtigen Text (wird fett dargestellt)
- <em> für Betonung (wird kursiv dargestellt)
- <mark> für Hervorhebung (meist gelb hinterlegt)
- <small> für Kleingedrucktes
- <del> für gelöschten Text (durchgestrichen)
- <ins> für neu eingefügten Text (unterstrichen)
- <sub> und <sup> für tief- bzw. hochgestellten Text`
    },
    {
      title: "Zitate und Quellenangaben",
      description: "Verschiedene Arten von Zitaten in HTML",
      code: `<blockquote cite="https://example.com/quelle">
  Dies ist ein längeres Zitat, das als Block
  dargestellt wird.
  <footer>
    — <cite>Autor Name</cite>
  </footer>
</blockquote>

<p>Wie Einstein sagte: 
<q>Alles ist relativ</q>.</p>`,
      explanation: `- <blockquote> für längere Zitate
- cite-Attribut gibt die Quelle an
- <footer> im Zitat für Quellenangabe
- <cite> für den Namen des Werks/Autors
- <q> für kurze Zitate im Fließtext`
    }
  ]
};