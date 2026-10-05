const ARTICLES = [
  {
    id: "innoday-2026",
    type: "event",
    label: "Veranstaltungsformat",
    date: "29. September 2026",
    datetime: "2026-09-29",
    title: "INNODAY26: Science. Startups. Future!",
    teaser: "Das zentrale Start-up- und Innovationsevent der TU Darmstadt bringt Forschung, Gründung und Wirtschaft zusammen.",
    lead: "Am 29. Oktober wird das darmstadtium zur Bühne für wissenschaftsbasierte Innovationen, neue Technologien und unternehmerische Ideen.",
    image: "assets/news/innoday.jpg",
    alt: "Blick auf das Messegeschehen beim HIGHEST INNODAY",
    body: [
      "Über 100 Ausstellende, inspirierende Keynotes, Start-up-Pitches und Workshops machen sichtbar, wie aus Forschung konkrete Wirkung entsteht. Studierende, Forschende, Gründer:innen, Unternehmen und Investor:innen können neue Ideen entdecken und direkt miteinander ins Gespräch kommen.",
      "Zum Programm gehören unter anderem der Pitch Corner, ein Science Slam, Workshops zu Finanzierung und Schutzrechten sowie das Finale des TU-Ideenwettbewerbs. Die Teilnahme ist kostenfrei, eine Anmeldung ist erforderlich."
    ],
    facts: [
      ["Termin", "29. Oktober 2026 · 13:00–20:00 Uhr"],
      ["Ort", "darmstadtium, Darmstadt"],
      ["Teilnahme", "Kostenfrei · mit Anmeldung"]
    ],
    actions: [
      ["Programm & Anmeldung ↗", "https://highest-darmstadt.de/de/event/innoday26/"]
    ]
  },
  {
    id: "entrepreneurial-perspectives",
    type: "learning",
    label: "Lehre & Workshops",
    date: "Wintersemester 2026/27",
    datetime: "2026-09-22",
    title: "Entrepreneurial Perspectives",
    teaser: "Die HIGHEST Ringvorlesung zeigt praxisnah, wie aus einer Idee ein tragfähiges Unternehmen werden kann.",
    lead: "Entrepreneurship lässt sich lernen: von der Ideengenerierung über Geschäftsmodelle bis zu Finanzierung, Recht und Teamaufbau.",
    image: "assets/news/ringvorlesung.png",
    alt: "Keyvisual der HIGHEST Ringvorlesung",
    body: [
      "Die Ringvorlesung richtet sich an Bachelor- und Masterstudierende aller Fachbereiche. Prof. Dr. Carolin Bock, Gastreferent:innen und Start-ups verbinden Grundlagenwissen mit konkreten Erfahrungen aus der Gründungspraxis.",
      "Das unbenotete Lehrangebot findet im Wintersemester statt und kann mit zwei Credit Points abgeschlossen werden. Studierende melden sich über TUCaN an; für Mitarbeitende und externe Interessierte gibt es einen Zugang über das SkillsPortal."
    ],
    facts: [
      ["Umfang", "2 Credit Points · unbenotet"],
      ["Zeit", "Montags · 15:00–16:30 Uhr"],
      ["Format", "Online via Zoom"]
    ],
    actions: [
      ["Informationen zur Ringvorlesung ↗", "https://highest-darmstadt.de/de/event/ringvorlesung26/"]
    ]
  },
  {
    id: "sanctuary-systems",
    type: "news",
    newsType: "success",
    label: "Success Story",
    date: "4. Dezember 2025",
    datetime: "2025-12-04",
    title: "Zuflucht für kleine Computer",
    teaser: "SANCTUARY Systems entwickelt eine sichere Umgebung für kritische Computersysteme – entstanden aus Darmstädter Forschung.",
    lead: "Drei Forscher aus Darmstadt wollen kleine, sicherheitskritische Computer verlässlich gegen digitale Angriffe schützen.",
    image: "assets/news/sanctuary-systems.jpg",
    alt: "Illustration eines geschützten digitalen Systems",
    body: [
      "Vernetzte Geräte übernehmen immer sensiblere Aufgaben. Gleichzeitig wächst das Risiko, dass Schwachstellen in Software oder Hardware ausgenutzt werden. SANCTUARY Systems setzt deshalb auf eine besonders abgesicherte Ausführungsumgebung für eingebettete Systeme.",
      "Die Ausgründung zeigt beispielhaft, wie langjährige Forschung in eine konkrete Anwendung überführt werden kann. HIGHEST begleitet solche Teams dabei, Technologie, Geschäftsmodell und Marktzugang zusammenzudenken."
    ],
    facts: [
      ["Bereich", "Cybersicherheit"],
      ["Herkunft", "TU Darmstadt"],
      ["Format", "Success Story"]
    ],
    actions: []
  },
  {
    id: "gruenderpreis-2025",
    type: "news",
    newsType: "press",
    label: "Pressemitteilung",
    date: "10. November 2025",
    datetime: "2025-11-10",
    title: "Drei TU-Ausgründungen beim Hessischen Gründerpreis ausgezeichnet",
    teaser: "MimoSense, PanocularAI und Zenaris überzeugen in der Kategorie „Gründung aus der Hochschule“.",
    lead: "Drei Teams aus dem Umfeld der TU Darmstadt zählen zu den Preisträgern des Hessischen Gründerpreises 2025.",
    image: "assets/news/hessischer-gruenderpreis.png",
    alt: "Die ausgezeichneten Teams beim Hessischen Gründerpreis",
    body: [
      "Mit MimoSense, PanocularAI und Zenaris wurden drei wissenschaftsnahe Gründungen aus Darmstadt ausgezeichnet. Ihre Lösungen reichen von innovativer Sensorik bis zu Anwendungen künstlicher Intelligenz.",
      "Der Erfolg macht sichtbar, welche Vielfalt im Gründungsökosystem der TU Darmstadt entsteht. HIGHEST unterstützt Teams von der ersten Einordnung einer Idee bis zu Wachstum, Finanzierung und Vernetzung."
    ],
    facts: [
      ["Auszeichnung", "Hessischer Gründerpreis 2025"],
      ["Kategorie", "Gründung aus der Hochschule"],
      ["Teams", "MimoSense · PanocularAI · Zenaris"]
    ],
    actions: []
  }
];

const newsroom = document.querySelector("[data-newsroom]");

if (newsroom) {
  const grid = newsroom.querySelector("[data-article-grid]");
  const resultCount = newsroom.querySelector("[data-result-count]");
  const newsFilters = newsroom.querySelector("[data-news-filters]");
  const dialog = document.querySelector("[data-article-dialog]");
  let activeMainFilter = "all";
  let activeNewsFilter = "all";
  let activeArticleId = null;

  function cardMarkup(article) {
    return `
      <article class="newsroom-card" data-card-type="${article.type}">
        <button class="newsroom-card-button" type="button" data-open-article="${article.id}" aria-label="${article.title} vollständig lesen">
          <span class="newsroom-card-image">
            <img src="${article.image}" alt="${article.alt}" width="1024" height="683" loading="lazy" />
            <span class="newsroom-card-label">${article.label}</span>
          </span>
          <span class="newsroom-card-content">
            <time datetime="${article.datetime}">${article.date}</time>
            <strong>${article.title}</strong>
            <span>${article.teaser}</span>
            <span class="newsroom-card-link">Weiterlesen <b aria-hidden="true">→</b></span>
          </span>
        </button>
      </article>`;
  }

  function getVisibleArticles() {
    if (activeMainFilter === "all") return ARTICLES;
    if (activeMainFilter !== "news") {
      return ARTICLES.filter((article) => article.type === activeMainFilter);
    }
    return ARTICLES.filter((article) => {
      if (article.type !== "news") return false;
      return activeNewsFilter === "all" || article.newsType === activeNewsFilter;
    });
  }

  function renderArticles() {
    const visibleArticles = getVisibleArticles();
    grid.innerHTML = visibleArticles.map(cardMarkup).join("");
    resultCount.textContent = `${visibleArticles.length} ${visibleArticles.length === 1 ? "Beitrag" : "Beiträge"}`;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      grid.animate(
        [
          { opacity: 0.35, transform: "translateY(0.65rem)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 260, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
      );
    }
  }

  function setMainFilter(filter, updateUrl = true) {
    activeMainFilter = ["news", "event", "learning"].includes(filter) ? filter : "all";
    newsFilters.hidden = activeMainFilter !== "news";

    newsroom.querySelectorAll("[data-main-filter]").forEach((button) => {
      const isActive = button.dataset.mainFilter === activeMainFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (activeMainFilter === "all") url.searchParams.delete("bereich");
      else url.searchParams.set("bereich", activeMainFilter);
      window.history.replaceState({}, "", url);
    }

    renderArticles();
  }

  function setNewsFilter(filter) {
    activeNewsFilter = ["success", "press"].includes(filter) ? filter : "all";
    newsroom.querySelectorAll("[data-news-filter]").forEach((button) => {
      const isActive = button.dataset.newsFilter === activeNewsFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    renderArticles();
  }

  function fillDialog(article) {
    dialog.querySelector("[data-dialog-image]").src = article.image;
    dialog.querySelector("[data-dialog-image]").alt = article.alt;
    dialog.querySelector("[data-dialog-label]").textContent = article.label;
    dialog.querySelector("[data-dialog-date]").textContent = article.date;
    dialog.querySelector("[data-dialog-date]").dateTime = article.datetime;
    dialog.querySelector("[data-dialog-title]").textContent = article.title;
    dialog.querySelector("[data-dialog-lead]").textContent = article.lead;
    dialog.querySelector("[data-dialog-body]").innerHTML = article.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
    dialog.querySelector("[data-dialog-facts]").innerHTML = article.facts
      .map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`)
      .join("");

    const actions = dialog.querySelector("[data-dialog-actions]");
    actions.innerHTML = article.actions
      .map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`)
      .join("");
    actions.hidden = article.actions.length === 0;
  }

  function openArticle(id, updateUrl = true) {
    const article = ARTICLES.find((item) => item.id === id);
    if (!article) return;

    activeArticleId = id;
    fillDialog(article);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("beitrag", id);
      window.history.replaceState({}, "", url);
    }
  }

  function closeArticle(updateUrl = true) {
    activeArticleId = null;
    if (dialog.open) dialog.close();
    document.body.classList.remove("dialog-open");

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.delete("beitrag");
      window.history.replaceState({}, "", url);
    }
  }

  newsroom.addEventListener("click", (event) => {
    const mainFilter = event.target.closest("[data-main-filter]");
    if (mainFilter) setMainFilter(mainFilter.dataset.mainFilter);

    const newsFilter = event.target.closest("[data-news-filter]");
    if (newsFilter) setNewsFilter(newsFilter.dataset.newsFilter);

    const articleButton = event.target.closest("[data-open-article]");
    if (articleButton) openArticle(articleButton.dataset.openArticle);
  });

  document.querySelectorAll("[data-open-article]").forEach((button) => {
    if (!button.closest("[data-newsroom]")) {
      button.addEventListener("click", () => openArticle(button.dataset.openArticle));
    }
  });

  dialog.querySelector("[data-close-dialog]").addEventListener("click", () => closeArticle());
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeArticle();
  });
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (clickedOutside) closeArticle();
  });
  dialog.addEventListener("close", () => {
    if (activeArticleId) closeArticle();
  });

  const params = new URLSearchParams(window.location.search);
  setMainFilter(params.get("bereich"), false);
  const initialArticle = params.get("beitrag");
  if (initialArticle) openArticle(initialArticle, false);
}
