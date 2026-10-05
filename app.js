const OFFERS = [
  {
    id: "orientierung",
    title: "Orientierungsberatung",
    owner: "HIGHEST",
    provider: "HIGHEST – Innovations- und Gründungszentrum der TU Darmstadt",
    phaseLabel: "Jeder Einstieg",
    phases: ["orientierung", "idee", "validierung", "gruendung", "wachstum"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["beratung"],
    short: "Kläre deine Ausgangslage, Ziele und den nächstwertvollen Schritt – auch wenn Gründung noch gar nicht feststeht.",
    lead: "In der Orientierungsberatung wird gemeinsam geklärt, welches Potenzial in deiner Idee oder deinem Arbeitsergebnis steckt und welcher nächste Schritt sinnvoll ist.",
    support: [
      "Ausgangslage und Zielbild sortieren",
      "Optionen für Transfer, IP oder Gründung einordnen",
      "Passende Beratung und Angebote auswählen"
    ],
    fit: "du noch nicht weißt, welches Angebot oder welcher Verwertungsweg zu dir passt.",
    source: "beratung.html",
    cta: "kontakt.html"
  },
  {
    id: "innovation-scouting",
    title: "InnovationScouting",
    owner: "InnovationScouting",
    provider: "InnovationScouts im xchange-Office der TU Darmstadt, in enger Zusammenarbeit mit HIGHEST",
    phaseLabel: "Frühphase Forschung",
    phases: ["orientierung", "idee", "validierung"],
    audiences: ["forschende", "mitarbeitende"],
    topics: ["beratung", "wissen", "ip"],
    short: "Erkenne das Anwendungspotenzial deiner Forschung früh und entwickle mögliche Transferwege weiter.",
    lead: "Die InnovationScouts sprechen Forschende aller Karrierestufen an und helfen, Innovationspotenziale früh zu erkennen, einzuordnen und in Richtung Anwendung weiterzuentwickeln.",
    support: [
      "Persönliche Sprechstunden und Lab-Meetups",
      "Technology-Readiness- und Transfer-Einordnung",
      "Fördermöglichkeiten, Schutzrechte und relevante Netzwerke"
    ],
    fit: "du forschst und eine Anwendungsperspektive, Fördermöglichkeit oder ein Transferweg noch unklar ist.",
    source: "innovation-scouting.html",
    cta: "innovation-scouting.html"
  },
  {
    id: "ip-beratung",
    title: "IP- und Erfindungsberatung",
    owner: "HIGHEST + TU Darmstadt",
    provider: "HIGHEST IP-Services und zuständige Einheiten der TU Darmstadt",
    phaseLabel: "Frühzeitig schützen",
    phases: ["idee", "validierung", "gruendung"],
    audiences: ["forschende", "mitarbeitende", "teams"],
    topics: ["ip", "beratung"],
    short: "Identifiziere schutzwürdige Ergebnisse und kläre Erfindungsmeldung, Patentierung und Verwertung, bevor du veröffentlichst.",
    lead: "HIGHEST sensibilisiert und berät zu geistigem Eigentum – von der ersten Idee über die Erfindungsmeldung bis zur Patentanmeldung und Verwertung.",
    support: [
      "Schutzwürdige Ergebnisse und IP identifizieren",
      "Erfindungsmeldung und Patentprozess einordnen",
      "Verwertungsoptionen und nächste Schritte klären"
    ],
    fit: "du ein neues Forschungsergebnis, einen Algorithmus, einen Prototyp oder eine technische Lösung entwickelt hast.",
    source: "ip-transfer.html",
    cta: "kontakt.html"
  },
  {
    id: "gruendungsberatung",
    title: "Gründungsberatung",
    owner: "HIGHEST",
    provider: "HIGHEST Innovation & Start-up Consulting",
    phaseLabel: "Idee bis Gründung",
    phases: ["idee", "validierung", "gruendung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["beratung", "foerderung"],
    short: "Entwickle Idee, Team, Geschäftsmodell, Finanzierung und nächste Schritte mit persönlichem Sparring weiter.",
    lead: "HIGHEST begleitet von der Entwicklung eines Geschäftsmodells bis zu Finanzierung, Förderung und Investorensuche – individuell, kostenfrei und vertraulich.",
    support: [
      "Idee und Gründungsvorhaben strukturieren",
      "Geschäftsmodell, Team und Roadmap entwickeln",
      "Finanzierungs- und Förderoptionen vorbereiten"
    ],
    fit: "du aus einer Idee oder einem Forschungsergebnis ein tragfähiges Gründungsvorhaben machen möchtest.",
    source: "beratung.html",
    cta: "kontakt.html"
  },
  {
    id: "hibs",
    title: "HIBS Geschäftsmodellentwicklung",
    owner: "HIGHEST",
    provider: "HIGHEST Innovation & Start-up Consulting",
    phaseLabel: "Idee strukturieren",
    phases: ["idee", "validierung", "gruendung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["beratung", "wissen"],
    short: "Erkenne, was deinem Geschäftsmodell noch fehlt, und mache den nächsten wertvollen Schritt sichtbar.",
    lead: "Die von HIGHEST entwickelte Beratungssystematik HIBS dient als übersichtlicher Fahrplan für die Geschäftsmodellentwicklung.",
    support: [
      "Big Picture und Geschäftsmodell sichtbar machen",
      "Lücken, Annahmen und Risiken erkennen",
      "Konkrete nächste Schritte priorisieren"
    ],
    fit: "du eine starke Lösung hast, aber Markt, Nutzenversprechen oder Umsetzungsplan noch schärfen musst.",
    source: "beratung.html#hibs",
    cta: "kontakt.html"
  },
  {
    id: "foerdermittel",
    title: "Fördermittelberatung",
    owner: "HIGHEST",
    provider: "HIGHEST Innovation & Start-up Consulting",
    phaseLabel: "Validierung & Gründung",
    phases: ["idee", "validierung", "gruendung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["foerderung", "beratung"],
    short: "Finde ein passendes Förderprogramm und erhalte Unterstützung von der Auswahl bis zur Antragstellung.",
    lead: "HIGHEST hilft bei der Auswahl geeigneter Förderprogramme und begleitet Gründungs- und Transferteams bei der Antragstellung.",
    support: [
      "Förderfähigkeit und Programmpassung einordnen",
      "Passende Programme auswählen",
      "Antrag und Transferkapitel vorbereiten"
    ],
    fit: "du Zeit und Finanzierung für Validierung, Prototyping oder Gründung benötigst.",
    source: "foerderung.html",
    cta: "kontakt.html"
  },
  {
    id: "exist",
    title: "EXIST-Gründerstipendium",
    owner: "HIGHEST",
    provider: "Bundesprogramm EXIST; Beratung und Antragsbegleitung durch HIGHEST",
    phaseLabel: "Vor der Gründung",
    phases: ["idee", "validierung", "gruendung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["foerderung"],
    short: "Prüfe, ob EXIST zu deinem technologie- oder wissensbasierten Gründungsvorhaben passt.",
    lead: "EXIST unterstützt technologieorientierte und wissensbasierte Gründungen aus Hochschulen mit finanziellen Zuschüssen und Know-how. HIGHEST berät zur Passung und Antragstellung.",
    support: [
      "Voraussetzungen und Förderlogik verstehen",
      "Vorhaben förderfähig strukturieren",
      "Antrag mit HIGHEST vorbereiten"
    ],
    fit: "du mit einem innovativen, wissens- oder technologiebasierten Vorhaben aus dem Hochschulumfeld gründen willst.",
    source: "foerderung.html#programme",
    cta: "kontakt.html"
  },
  {
    id: "hessen-ideen",
    title: "Hessen Ideen Stipendium",
    owner: "HIGHEST",
    provider: "Hessen Ideen; Zugang und Begleitung über die Hochschule bzw. HIGHEST",
    phaseLabel: "Idee ausarbeiten",
    phases: ["idee", "validierung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["foerderung", "wissen"],
    short: "Entwickle deine Geschäftsidee mit finanzieller Förderung und einem begleitenden Programm weiter.",
    lead: "Das Hessen Ideen Stipendium verbindet finanzielle Förderung mit einer begleitenden Beschleunigung für Hochschulangehörige und Absolvent:innen.",
    support: [
      "Geschäftsidee fokussiert ausarbeiten",
      "Finanzielle Förderung nutzen",
      "Begleitprogramm und Austausch wahrnehmen"
    ],
    fit: "du aus einer frühen Geschäftsidee innerhalb eines strukturierten Programms ein belastbares Vorhaben entwickeln möchtest.",
    source: "foerderung.html#programme",
    cta: "kontakt.html"
  },
  {
    id: "raeume-labore",
    title: "Räume, Labs & Prototyping",
    owner: "HIGHEST + Partner",
    provider: "HIGHEST, TU Darmstadt und Partner im Darmstädter Ökosystem",
    phaseLabel: "Idee umsetzen",
    phases: ["idee", "validierung", "gruendung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["ressourcen"],
    short: "Nutze KreaRaum, Meta & AI Lab, FabLab und weitere Arbeits- oder Laborangebote im Netzwerk.",
    lead: "HIGHEST vermittelt Zugang zu Räumen und Laboren – vom kreativen Arbeitsraum über immersive Technik bis zur digitalen Werkstatt für Prototypen.",
    support: [
      "KreaRaum für kreative Denk- und Teamprozesse",
      "Meta & AI Lab für virtuelle Welten und Geschäftsmodelle",
      "FabLab für kostengünstige Prototypen und Workshops"
    ],
    fit: "du Platz, Hardware oder eine Werkstatt brauchst, um deine Idee sichtbar und testbar zu machen.",
    source: "ressourcen.html",
    cta: "kontakt.html"
  },
  {
    id: "ringvorlesung",
    title: "Entrepreneurship in der Lehre",
    owner: "HIGHEST + TU Darmstadt",
    provider: "HIGHEST und TU Darmstadt mit Gastreferent:innen und Start-ups",
    phaseLabel: "Wissen aufbauen",
    phases: ["orientierung", "idee"],
    audiences: ["studierende", "forschende", "mitarbeitende"],
    topics: ["wissen"],
    short: "Lerne Gründungsgrundlagen praxisnah in Lehrveranstaltungen, Ringvorlesung und Workshops.",
    lead: "HIGHEST vermittelt Wissen für Gründung und Verwertung durch Lehre, Ringvorlesung und strategische Workshops.",
    support: [
      "Grundlagen zu Geschäftsmodell und Start-up-Management",
      "Praxiswissen von Expert:innen und Gründungsteams",
      "Strategisches Denken und Marktverständnis"
    ],
    fit: "du Entrepreneurship kennenlernen oder fundierte Grundlagen für deine nächsten Entscheidungen aufbauen möchtest.",
    source: "wissen.html",
    cta: "ringvorlesung.html"
  },
  {
    id: "rmu-academy",
    title: "RMU Startup Academy",
    owner: "RMU",
    provider: "Rhein-Main-Universitäten und ihre Gründungszentren, darunter HIGHEST",
    phaseLabel: "Flexibel lernen",
    phases: ["orientierung", "idee", "validierung", "gruendung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["wissen", "beratung"],
    short: "Verbinde digitale, praxisorientierte Kurse mit persönlicher Beratung am Standort Darmstadt.",
    lead: "Die RMU Startup Academy ergänzt die Angebote der Gründungszentren mit digitalen Kursen und persönlicher Beratung im Blended-Learning-Ansatz.",
    support: [
      "Praxisorientierte Online-Kurse flexibel bearbeiten",
      "Von Ideenfindung bis Gründung lernen",
      "Persönliche Beratung am Standort nutzen"
    ],
    fit: "du dir Gründungswissen zeitlich flexibel und zugleich mit persönlicher Begleitung aneignen möchtest.",
    source: "wissen.html#startup-academy",
    cta: "wissen.html#startup-academy"
  },
  {
    id: "experts",
    title: "HIGHEST Experts",
    owner: "HIGHEST",
    provider: "HIGHEST Experts aus Wirtschaft, Industrie, Technologie und Gründung",
    phaseLabel: "Spezialwissen",
    phases: ["validierung", "gruendung", "wachstum"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["netzwerk", "beratung"],
    short: "Erhalte gezieltes Feedback und Erfahrungswissen von Coaches, Mentor:innen und Business Specialists.",
    lead: "HIGHEST verbindet Gründungsteams mit Expert:innen aus Wirtschaft, Industrie und Forschung für passendes fachliches Sparring.",
    support: [
      "Praxisfeedback zu Technologie und Markt",
      "Coaching und Mentoring",
      "Kontakte in Wirtschaft und Industrie"
    ],
    fit: "du eine konkrete fachliche, unternehmerische oder branchenspezifische Frage vertiefen möchtest.",
    source: "highest-experts.html",
    cta: "highest-experts.html"
  },
  {
    id: "business-development",
    title: "Business Development",
    owner: "HIGHEST",
    provider: "HIGHEST Innovation & Start-up Consulting und Netzwerk",
    phaseLabel: "Nach der Gründung",
    phases: ["wachstum"],
    audiences: ["teams"],
    topics: ["beratung", "netzwerk"],
    short: "Entwickle dein Unternehmen nach der Gründung weiter und erhalte Unterstützung bei Wachstum und Partnerschaften.",
    lead: "HIGHEST berät auch nach der Gründung und verbindet Unternehmensentwicklung mit Erfahrung aus Wissenschaft und Wirtschaft.",
    support: [
      "Wachstumsoptionen und Risiken einordnen",
      "Unternehmensentwicklung strukturieren",
      "Netzwerk und Partnerschaften erschließen"
    ],
    fit: "dein Start-up gegründet ist und du die nächsten Wachstums- oder Entwicklungsschritte vorbereitest.",
    source: "beratung.html#spektrum",
    cta: "kontakt.html"
  },
  {
    id: "female-founders",
    title: "females@HIGHEST",
    owner: "HIGHEST",
    provider: "HIGHEST und das jeweils aktuelle Female-Founder-Programm",
    phaseLabel: "Gezielte Förderung",
    phases: ["orientierung", "idee", "validierung", "gruendung"],
    audiences: ["studierende", "forschende", "mitarbeitende", "teams"],
    topics: ["foerderung", "netzwerk", "wissen"],
    short: "Nutze Coaching, Netzwerk und passende Förderangebote für Frauen mit Gründungsinteresse.",
    lead: "females@HIGHEST bündelt Angebote für gründungsinteressierte Frauen. Umfang und Bewerbungsfristen sind programmspezifisch und müssen aktuell geprüft werden.",
    support: [
      "Gründungsinteresse und Idee weiterentwickeln",
      "Coaching und Netzwerk nutzen",
      "Aktuelle Förderprogramme kennenlernen"
    ],
    fit: "du als Frau deine Gründungsidee in einem unterstützenden Netzwerk entwickeln möchtest.",
    source: "female-founders.html",
    cta: "female-founders.html"
  },
  {
    id: "company-builder",
    title: "HIGHEST & FUTURY Company Builder",
    owner: "HIGHEST × FUTURY",
    provider: "HIGHEST und FUTURY – The Future Factory",
    phaseLabel: "PoC bis Investment Readiness",
    phases: ["validierung", "gruendung", "wachstum"],
    audiences: ["forschende", "mitarbeitende", "teams"],
    topics: ["beratung", "foerderung", "netzwerk"],
    short: "Entwickle dein Deep-Tech-Vorhaben in sechs Monaten vom Proof of Concept zur Investment Readiness.",
    lead: "Der Company Builder verbindet strukturiertes Venture Building, 1:1 Mentoring und einen klaren Investment-Pfad für wissenschafts- und technologiebasierte Deep-Tech-Teams.",
    support: [
      "Sechs Monate fokussiertes Venture Building",
      "5.000 Euro Mentoring-Budget pro Team",
      "Mögliches Investment-Ticket bis 50.000 Euro und Zugang zu VC-Partnern"
    ],
    fit: "dein Team auf einer wissenschaftlichen oder technologischen Innovation aufbaut und Markt, Team sowie Finanzierung professionell vorbereiten will.",
    source: "company-builder.html",
    cta: "company-builder.html"
  }
];

const PHASE_LABELS = {
  alle: "Alle Phasen",
  orientierung: "Orientierung",
  idee: "Idee",
  validierung: "Validierung",
  gruendung: "Gründung & Finanzierung",
  wachstum: "Wachstum"
};

const AUDIENCE_LABELS = {
  alle: "Alle Zielgruppen",
  studierende: "Student:in",
  forschende: "Forschende Person",
  mitarbeitende: "Wissenschaftliche:r Mitarbeiter:in",
  teams: "Gründungsteam"
};

const TOPIC_LABELS = {
  beratung: "Beratung",
  ip: "IP & Schutzrechte",
  foerderung: "Förderung & Finanzierung",
  wissen: "Wissen & Qualifizierung",
  ressourcen: "Räume & Prototyping",
  netzwerk: "Netzwerk & Wachstum"
};

const JOURNEYS = {
  orientierung: {
    label: "Orientierung",
    question: "Was würde dir jetzt am meisten helfen?",
    intro: "Du brauchst noch keinen fertigen Plan. Wähle nur den nächsten hilfreichen Schritt.",
    needs: [
      {
        id: "sortieren",
        title: "Meine Möglichkeiten persönlich sortieren",
        copy: "Ausgangslage, Ziele und nächsten Schritt klären.",
        recommendations: ["orientierung", "ringvorlesung", "rmu-academy"]
      },
      {
        id: "lernen",
        title: "Entrepreneurship kennenlernen",
        copy: "Praxisnah lernen, ohne sofort gründen zu müssen.",
        recommendations: ["ringvorlesung", "rmu-academy", "orientierung"]
      },
      {
        id: "austausch",
        title: "Inspiration und Austausch finden",
        copy: "Menschen, Erfahrungen und Perspektiven kennenlernen.",
        recommendations: ["orientierung", "experts", "female-founders"]
      }
    ]
  },
  idee: {
    label: "Idee",
    question: "Was ist für deine Idee jetzt entscheidend?",
    intro: "Wähle das Hindernis, das du als Nächstes aus dem Weg räumen möchtest.",
    needs: [
      {
        id: "schaerfen",
        title: "Idee und Geschäftsmodell schärfen",
        copy: "Nutzen, Zielgruppe und nächste Annahmen prüfen.",
        recommendations: ["hibs", "gruendungsberatung", "orientierung"]
      },
      {
        id: "schutz",
        title: "Idee oder Technologie schützen",
        copy: "IP, Erfindungsmeldung und Veröffentlichung klären.",
        recommendations: ["ip-beratung", "orientierung", "innovation-scouting"]
      },
      {
        id: "finanzieren",
        title: "Förderung oder Finanzierung finden",
        copy: "Passende Programme und Antragsweg einordnen.",
        recommendations: ["foerdermittel", "hessen-ideen", "exist"]
      },
      {
        id: "bauen",
        title: "Prototyp bauen und testen",
        copy: "Räume, Hardware und Expertise nutzen.",
        recommendations: ["raeume-labore", "hibs", "company-builder"]
      }
    ]
  },
  forschung: {
    label: "Forschungsergebnis",
    question: "Welcher Transfer-Schritt steht gerade an?",
    intro: "Forschung, IP und Gründung werden gemeinsam gedacht – du wählst den aktuellen Fokus.",
    needs: [
      {
        id: "potenzial",
        title: "Anwendungspotenzial erkennen",
        copy: "Forschung früh einordnen und Transferwege entdecken.",
        recommendations: ["innovation-scouting", "orientierung", "hibs"]
      },
      {
        id: "schutz",
        title: "Ergebnis vor Veröffentlichung schützen",
        copy: "Erfindungsmeldung, Patent und Verwertung klären.",
        recommendations: ["ip-beratung", "innovation-scouting", "orientierung"]
      },
      {
        id: "validieren",
        title: "Validierung finanzieren",
        copy: "Förderung für Proof of Concept und Transfer finden.",
        recommendations: ["foerdermittel", "company-builder", "exist"]
      },
      {
        id: "spin-off",
        title: "Spin-off vorbereiten",
        copy: "Geschäftsmodell, Team, IP und Förderung verbinden.",
        recommendations: ["company-builder", "gruendungsberatung", "ip-beratung"]
      }
    ]
  },
  gegruendet: {
    label: "Gegründetes Team",
    question: "Was soll als Nächstes wachsen?",
    intro: "Wähle den Bereich, in dem dein Unternehmen jetzt gezielte Unterstützung braucht.",
    needs: [
      {
        id: "entwicklung",
        title: "Unternehmensentwicklung strukturieren",
        copy: "Wachstumsoptionen, Risiken und Prioritäten klären.",
        recommendations: ["business-development", "company-builder", "experts"]
      },
      {
        id: "expertise",
        title: "Expertise und Feedback erhalten",
        copy: "Mit Coaches, Mentor:innen und Specialists arbeiten.",
        recommendations: ["experts", "business-development", "orientierung"]
      },
      {
        id: "netzwerk",
        title: "Partner und Netzwerk erschließen",
        copy: "Zugang zu Wirtschaft, Industrie und Ökosystem finden.",
        recommendations: ["experts", "business-development", "female-founders"]
      },
      {
        id: "finanzierung",
        title: "Weitere Finanzierung einordnen",
        copy: "Förderung und passende nächste Gespräche vorbereiten.",
        recommendations: ["company-builder", "foerdermittel", "business-development"]
      }
    ]
  }
};

const CATEGORIES = {
  beratung: {
    title: "Orientierung & Beratung",
    explainer: "Für alle, die Ausgangslage, Potenzial und nächsten Schritt klären möchten.",
    topics: ["beratung"]
  },
  ip: {
    title: "IP & Transfer",
    explainer: "Für Forschungsergebnisse, Erfindungen und die Wahl eines passenden Verwertungswegs.",
    topics: ["ip"]
  },
  foerderung: {
    title: "Förderung & Finanzierung",
    explainer: "Programme finden, Passung prüfen und Anträge gezielt vorbereiten.",
    topics: ["foerderung"]
  },
  wissen: {
    title: "Wissen & Räume",
    explainer: "Entrepreneurship lernen, gemeinsam arbeiten und Ideen als Prototyp testen.",
    topics: ["wissen", "ressourcen"]
  },
  netzwerk: {
    title: "Netzwerk & Wachstum",
    explainer: "Expertise, Partnerschaften und Unterstützung für die Unternehmensentwicklung.",
    topics: ["netzwerk"]
  },
  alle: {
    title: "Alle Angebote",
    explainer: "Der vollständige Angebotsbestand dieses Prototyps – themenübergreifend gebündelt.",
    topics: []
  }
};

const guideState = {
  stage: "situation",
  situation: null,
  need: null
};

let selectedCategory = "beratung";

const grid = document.querySelector("#offer-grid");
const offersTitle = document.querySelector("#offers-title");
const offersExplainer = document.querySelector("#offers-explainer");
const activeTopicLabel = document.querySelector("#active-topic-label");
const offerCount = document.querySelector("#offer-count");
const showAllButton = document.querySelector("#show-all-offers");
const guideLive = document.querySelector("#guide-live");
const guideBack = document.querySelector("#guide-back");
const stepLabel = document.querySelector("#step-label");
const stepContext = document.querySelector("#step-context");
const progressFill = document.querySelector("#progress-fill");
const dialog = document.querySelector("#offer-dialog");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-nav");

function replaceGuide(markup) {
  const update = () => { guideLive.innerHTML = markup; };
  if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.startViewTransition(update);
  } else {
    update();
  }
}

function setGuideProgress(stage) {
  guideState.stage = stage;
  if (stage === "situation") {
    stepLabel.textContent = "Schritt 1 von 2";
    stepContext.textContent = "Deine Ausgangslage";
    progressFill.style.width = "50%";
    guideBack.hidden = true;
  } else if (stage === "need") {
    stepLabel.textContent = "Schritt 2 von 2";
    stepContext.textContent = JOURNEYS[guideState.situation].label;
    progressFill.style.width = "78%";
    guideBack.hidden = false;
  } else {
    stepLabel.textContent = "Dein Ergebnis";
    stepContext.textContent = "3 passende Einstiege";
    progressFill.style.width = "100%";
    guideBack.hidden = false;
  }
}

function renderSituationStep() {
  guideState.situation = null;
  guideState.need = null;
  setGuideProgress("situation");
  replaceGuide(`
    <div class="guide-question">
      <p class="question-index">01</p>
      <h2>Worum geht es bei dir?</h2>
      <p>Wähle die Aussage, die deiner Situation am nächsten kommt.</p>
    </div>
    <div class="answer-list" role="group" aria-label="Ausgangslage auswählen">
      <button class="answer" type="button" data-situation="orientierung">
        <span class="answer-title">Ich orientiere mich erst</span>
        <span class="answer-copy">Noch keine konkrete Idee oder einfach neugierig.</span>
        <span class="answer-arrow" aria-hidden="true">→</span>
      </button>
      <button class="answer" type="button" data-situation="idee">
        <span class="answer-title">Ich habe eine Idee</span>
        <span class="answer-copy">Ich möchte sie prüfen und weiterentwickeln.</span>
        <span class="answer-arrow" aria-hidden="true">→</span>
      </button>
      <button class="answer" type="button" data-situation="forschung">
        <span class="answer-title">Ich habe ein Forschungsergebnis</span>
        <span class="answer-copy">Ich sehe Potenzial für Anwendung oder Transfer.</span>
        <span class="answer-arrow" aria-hidden="true">→</span>
      </button>
      <button class="answer" type="button" data-situation="gegruendet">
        <span class="answer-title">Ich habe bereits gegründet</span>
        <span class="answer-copy">Mein Team soll sich weiterentwickeln oder wachsen.</span>
        <span class="answer-arrow" aria-hidden="true">→</span>
      </button>
    </div>`);
}

function renderNeedStep(situationId) {
  guideState.situation = situationId;
  guideState.need = null;
  setGuideProgress("need");
  const journey = JOURNEYS[situationId];
  const needs = journey.needs.map((need) => `
    <button class="need-answer" type="button" data-need="${need.id}">
      <strong>${need.title}</strong>
      <span>${need.copy}</span>
      <b aria-hidden="true">→</b>
    </button>`).join("");

  replaceGuide(`
    <div class="guide-question">
      <p class="question-index">02</p>
      <h2>${journey.question}</h2>
      <p>${journey.intro}</p>
    </div>
    <div class="need-list" role="group" aria-label="Aktuellen Bedarf auswählen">${needs}</div>`);
}

function renderRecommendations(needId) {
  guideState.need = needId;
  setGuideProgress("result");
  const journey = JOURNEYS[guideState.situation];
  const need = journey.needs.find((item) => item.id === needId);
  const recommendations = need.recommendations.map((id) => OFFERS.find((offer) => offer.id === id)).filter(Boolean);
  const cards = recommendations.map((offer, index) => `
    <button class="recommendation" type="button" data-open-offer="${offer.id}">
      <span class="recommendation-rank">0${index + 1}</span>
      <strong>${offer.title}</strong>
      <small>${index === 0 ? "Bester Einstieg" : offer.phaseLabel}</small>
      <span class="recommendation-arrow" aria-hidden="true">→</span>
    </button>`).join("");

  replaceGuide(`
    <div class="recommendation-head">
      <div class="guide-question">
        <p class="question-index">✓</p>
        <h2>Deine besten Einstiege</h2>
        <p>Priorisiert für „${need.title}“.</p>
      </div>
      <button class="restart-button" type="button" data-restart>Neu starten</button>
    </div>
    <div class="recommendation-list">${cards}</div>`);
}

function renderCard(offer) {
  const providerClass = offer.owner === "InnovationScouting" ? " scouting" : "";
  return `
    <article class="offer-card">
      <div class="offer-card-top">
        <span class="offer-provider${providerClass}">${offer.owner}</span>
        <span class="offer-phase-label">${offer.phaseLabel}</span>
      </div>
      <h3>${offer.title}</h3>
      <p>${offer.short}</p>
      <button class="offer-open" type="button" data-open-offer="${offer.id}">
        Angebot ansehen <span aria-hidden="true">→</span>
      </button>
    </article>`;
}

function renderCategory(categoryId) {
  selectedCategory = categoryId;
  const category = CATEGORIES[categoryId];
  const matches = categoryId === "alle"
    ? OFFERS
    : OFFERS.filter((offer) => category.topics.some((topic) => offer.topics.includes(topic)));

  offersTitle.textContent = category.title;
  offersExplainer.textContent = category.explainer;
  activeTopicLabel.textContent = category.title;
  offerCount.textContent = `${matches.length} ${matches.length === 1 ? "passendes Angebot" : "passende Angebote"}`;
  grid.innerHTML = matches.map(renderCard).join("");
  showAllButton.hidden = categoryId === "alle";

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    grid.animate(
      [
        { opacity: 0.35, transform: "translateY(0.45rem)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 220, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
    );
  }

  document.querySelectorAll("[data-category]").forEach((button) => {
    const active = button.dataset.category === categoryId;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const url = new URL(window.location.href);
  if (categoryId === "beratung") url.searchParams.delete("thema");
  else url.searchParams.set("thema", categoryId);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);

}

function openOffer(id) {
  const offer = OFFERS.find((item) => item.id === id);
  if (!offer) return;

  document.querySelector("#dialog-owner").textContent = offer.owner;
  document.querySelector("#dialog-phase").textContent = offer.phaseLabel;
  document.querySelector("#dialog-topic").textContent = offer.topics.map((topic) => TOPIC_LABELS[topic]).join(" · ");
  document.querySelector("#dialog-title").textContent = offer.title;
  document.querySelector("#dialog-lead").textContent = offer.lead;
  document.querySelector("#dialog-support").innerHTML = offer.support.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#dialog-fit").textContent = offer.fit;
  document.querySelector("#dialog-provider").textContent = offer.provider;
  document.querySelector("#dialog-cta").href = offer.cta;
  document.querySelector("#dialog-source").href = offer.source;

  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-offer]");
  if (openButton) openOffer(openButton.dataset.openOffer);

  const situationButton = event.target.closest("[data-situation]");
  if (situationButton) renderNeedStep(situationButton.dataset.situation);

  const needButton = event.target.closest("[data-need]");
  if (needButton) renderRecommendations(needButton.dataset.need);

  const restartButton = event.target.closest("[data-restart]");
  if (restartButton) renderSituationStep();

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) renderCategory(categoryButton.dataset.category);
});

guideBack.addEventListener("click", () => {
  if (guideState.stage === "result") renderNeedStep(guideState.situation);
  else renderSituationStep();
});

showAllButton.addEventListener("click", () => renderCategory("alle"));

document.querySelector(".dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closeDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menu.classList.toggle("open", !open);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const initialCategory = new URLSearchParams(window.location.search).get("thema");
renderCategory(CATEGORIES[initialCategory] ? initialCategory : "beratung");
