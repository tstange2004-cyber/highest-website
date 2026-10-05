import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const serviceCards = [
  { title: "Orientierung & Beratung", text: "Vorhaben sortieren, Geschäftsmodell entwickeln und die richtigen nächsten Schritte wählen.", href: "beratung.html" },
  { title: "IP & Transfer", text: "Erfindungen früh schützen und passende Wege in Anwendung, Lizenzierung oder Gründung klären.", href: "ip-transfer.html" },
  { title: "Förderung", text: "Förderfähigkeit prüfen, Programme auswählen und Anträge strukturiert vorbereiten.", href: "foerderung.html" },
  { title: "Räume & Prototyping", text: "KreaRaum, Meta & AI Lab, FabLab und Ressourcen im Partnernetzwerk nutzen.", href: "ressourcen.html" },
  { title: "Wissen", text: "Entrepreneurship in Lehre, Ringvorlesung, Workshops und RMU Startup Academy.", href: "wissen.html" },
  { title: "Sichtbarkeit", text: "Innovationen über Events, Wettbewerbe, Geschichten und HIGHEST-Kanäle sichtbar machen.", href: "sichtbarkeit.html" },
  { title: "Female Founders", text: "Coaching, Netzwerk und Programminformationen für gründungsinteressierte Frauen.", href: "female-founders.html" },
  { title: "HIGHEST Experts", text: "Passendes Sparring durch Mentor:innen, Coaches und Business Specialists.", href: "highest-experts.html" }
];

const pages = [
  {
    file: "angebote.html",
    group: "Angebote",
    eyebrow: "Services",
    title: "Alles, was Innovation in Wirkung bringt.",
    lead: "HIGHEST begleitet Studierende, Forschende, wissenschaftliche Mitarbeitende und Gründungsteams – vom ersten Gedanken über IP und Finanzierung bis zum wachsenden Unternehmen.",
    facts: [["1 Einstieg", "für Innovation, Transfer und Gründung"], ["kostenfrei", "in der Erst- und Gründungsberatung"], ["vertraulich", "bevor Ideen öffentlich werden"]],
    sections: [
      { id: "ueberblick", kicker: "Schnellzugriff", title: "Wähle dein Thema.", text: ["Du musst die Zuständigkeiten im Ökosystem nicht kennen. Starte bei deinem Anliegen – HIGHEST verbindet dich mit der passenden Expertise."], cards: serviceCards },
      { id: "programme", kicker: "Intensivprogramme", title: "Wenn aus Potenzial ein belastbares Unternehmen werden soll.", text: ["Für ausgewählte wissenschafts- und technologiebasierte Vorhaben gibt es strukturierte Programme mit engem Sparring, Marktvalidierung und Zugang zu Finanzierung."], cards: [
        { title: "HIGHEST & FUTURY Company Builder", text: "Sechs Monate Venture Building vom Proof of Concept bis zur Investment Readiness.", href: "company-builder.html" },
        { title: "RMU Startup Academy", text: "Digitale Gründungskurse kombiniert mit persönlicher Beratung in Darmstadt.", href: "wissen.html#startup-academy" },
        { title: "EXIST Women", text: "Finanzielle Unterstützung, Coaching und Community für gründungsinteressierte Frauen.", href: "female-founders.html" }
      ]},
      { id: "zusammenspiel", kicker: "Klar getrennt, gut verbunden", title: "Scouting öffnet den Weg. HIGHEST begleitet ihn weiter.", text: ["Die InnovationScouts sind Teil des xchange-Office der TU Darmstadt. Sie erkennen früh Anwendungspotenziale in der Forschung und arbeiten eng mit HIGHEST zusammen.", "HIGHEST ist die zentrale Anlaufstelle für die anschließende Beratung zu IP, Geschäftsmodell, Förderung, Gründung und Wachstum."], links: [{ label: "InnovationScouting verstehen", href: "innovation-scouting.html" }, { label: "Persönlichen Einstieg finden", href: "kontakt.html" }] }
    ],
    cta: ["Noch nicht sicher, was passt?", "In einem vertraulichen Erstgespräch sortieren wir Ausgangslage und Optionen.", "Beratung anfragen", "kontakt.html"]
  },
  {
    file: "beratung.html",
    group: "Angebote",
    eyebrow: "Persönlich · kostenfrei · vertraulich",
    title: "Gute Beratung beginnt mit echtem Interesse.",
    lead: "HIGHEST begleitet Ideen, Forschungsergebnisse und Gründungsvorhaben ganzheitlich. Du erhältst keine Standardschablone, sondern Klarheit über Optionen, Risiken und den nächsten sinnvollen Schritt.",
    facts: [["jede Phase", "von Orientierung bis Business Development"], ["HIBS", "eigene Systematik für Geschäftsmodelle"], ["TU + Region", "Zugang zu spezialisiertem Know-how"]],
    sections: [
      { id: "start", kicker: "Dein Einstieg", title: "Du musst noch keinen fertigen Plan haben.", text: ["In der Orientierungsberatung klären wir, was du voranbringen möchtest, welche Entscheidungen anstehen und welche HIGHEST-Angebote oder Partner sinnvoll sind.", "Die Beratung richtet sich an Studierende, Forschende, wissenschaftliche Mitarbeitende und Gründungsteams."], bullets: ["Potenzial und Zielbild sortieren", "Transfer, IP oder Gründung als Optionen einordnen", "konkreten nächsten Schritt vereinbaren"] },
      { id: "hibs", kicker: "Geschäftsmodell", title: "Mit HIBS wird sichtbar, was noch fehlt.", text: ["Die HIGHEST Beratungssystematik HIBS baut auf dem Business Model Canvas auf. Sie schafft ein gemeinsames Bild des Vorhabens, macht Annahmen und Lücken sichtbar und dient als individueller Fahrplan für die weitere Entwicklung."], cards: [
        { title: "Idee & Nutzen", text: "Welches Problem wird für wen besser gelöst?" },
        { title: "Markt & Validierung", text: "Welche Annahmen müssen als Nächstes getestet werden?" },
        { title: "Team & Umsetzung", text: "Welche Kompetenzen, Partner und Ressourcen fehlen?" }
      ]},
      { id: "spektrum", kicker: "Beratungsspektrum", title: "Eine Begleitung, mehrere Fachrichtungen.", text: ["Je nach Situation verbindet HIGHEST Gründungs- und Innovationsberatung mit IP-Services, Fördermittelberatung, Forschungs- und Technologietransfer sowie Business Development."], links: [{ label: "IP & Transfer", href: "ip-transfer.html" }, { label: "Förderung", href: "foerderung.html" }, { label: "Company Builder", href: "company-builder.html" }] }
    ],
    cta: ["Lass uns dein Vorhaben sortieren.", "Beschreibe kurz, wo du stehst. Wir melden uns mit dem passenden Einstieg.", "Beratung anfragen", "kontakt.html"]
  },
  {
    file: "foerderung.html",
    group: "Angebote",
    eyebrow: "Förderung & Finanzierung",
    title: "Freiraum für den nächsten Beweis.",
    lead: "HIGHEST prüft mit dir, welches Programm zu Phase, Team und Vorhaben passt – und begleitet die Strukturierung des Antrags.",
    facts: [["Passung", "vor Aufwand und Antrag"], ["EXIST", "für wissens- und technologiebasierte Vorhaben"], ["Hessen Ideen", "für frühe Geschäftsideen"]],
    sections: [
      { id: "prozess", kicker: "So starten wir", title: "Nicht jedes gute Programm ist das richtige Programm.", text: ["Zuerst werden Innovationsgrad, Hochschulbezug, Team, Entwicklungsstand und Finanzierungsbedarf geklärt. Erst dann folgt die Auswahl geeigneter Programme."], bullets: ["Förderfähigkeit und Fristen prüfen", "Arbeitspakete, Meilensteine und Transferlogik schärfen", "Antragserstellung und Abstimmung begleiten"] },
      { id: "programme", kicker: "Auswahl", title: "Häufig relevante Programme.", cards: [
        { title: "EXIST-Gründerstipendium", text: "Für innovative technologieorientierte oder wissensbasierte Vorhaben aus Hochschulen." },
        { title: "EXIST-Forschungstransfer", text: "Für forschungsintensive Vorhaben mit anspruchsvollen Entwicklungsarbeiten." },
        { title: "Hessen Ideen Stipendium", text: "Finanzielle Förderung und begleitende Akzeleration für Hochschulteams." },
        { title: "Weitere Programme", text: "Je nach Thema, Reifegrad und Ziel kommen Landes-, Bundes- oder EU-Angebote infrage." }
      ]},
      { id: "investment", kicker: "Privates Kapital", title: "Förderung und Investment werden unterschiedlich vorbereitet.", text: ["Investor:innen erwarten ein belastbares Geschäftsmodell, ein starkes Team und nachvollziehbare Meilensteine. HIGHEST hilft, die Voraussetzungen einzuordnen und passende Gespräche vorzubereiten."], links: [{ label: "Company Builder ansehen", href: "company-builder.html" }, { label: "HIGHEST Experts", href: "highest-experts.html" }] }
    ],
    cta: ["Welcher Förderweg passt?", "Je früher wir die Passung prüfen, desto gezielter lässt sich der Antrag vorbereiten.", "Förderberatung anfragen", "kontakt.html"]
  },
  {
    file: "ip-transfer.html",
    group: "Angebote",
    eyebrow: "Intellectual Property",
    title: "Erst schützen. Dann zeigen, nutzen oder gründen.",
    lead: "Forschungsergebnisse haben Wert. HIGHEST sensibilisiert und begleitet von der ersten Einordnung über die Erfindungsmeldung bis zu Patentierung und Verwertung.",
    facts: [["frühzeitig", "vor Publikation oder öffentlichem Pitch"], ["Erfindungsmeldung", "sichert den professionellen TU-Prozess"], ["Verwertung", "Lizenzierung, Kooperation oder Spin-off"]],
    sections: [
      { id: "wichtig", kicker: "Wichtig", title: "Vor der Veröffentlichung beraten lassen.", text: ["Eine öffentliche Präsentation, Publikation oder ein frei zugängliches Poster kann die Patentfähigkeit beeinflussen. Sprich deshalb frühzeitig mit den IP-Services – auch wenn der Verwertungsweg noch offen ist."], bullets: ["technische Erfindung, Algorithmus oder Software", "Prototyp, Datenbank, Design oder unveröffentlichte Studie", "neuartiges Verfahren, Material oder Anwendung"] },
      { id: "prozess", kicker: "Vom Ergebnis zur Verwertung", title: "Ein klarer Prozess schützt Rechte und Optionen.", steps: [["01", "Vertraulich einordnen", "Neuheit, Schutzfähigkeit, Markt- und Anwendungspotenzial besprechen."], ["02", "Erfindung melden", "Erfindungsmeldung beim zuständigen IP- und Innovationsmanagement der TU einreichen."], ["03", "Schutzstrategie wählen", "Patent, Urheberrecht, Marke, Geheimhaltung oder Kombination passend auswählen."], ["04", "Verwertungsweg entwickeln", "Lizenz, Kooperation, IP-for-Shares oder Ausgründung vorbereiten."]] },
      { id: "verwertung", kicker: "Transfer", title: "Schutz ist kein Selbstzweck.", text: ["Ziel ist, Forschung in gesellschaftliche oder wirtschaftliche Anwendung zu bringen. HIGHEST verbindet die IP-Perspektive deshalb mit Geschäftsmodell, Förderung, Partnern und Gründungsberatung."], links: [{ label: "Patentangebote ansehen", href: "patente.html" }, { label: "InnovationScouting", href: "innovation-scouting.html" }] }
    ],
    cta: ["Noch nicht veröffentlicht? Gut.", "Dann ist jetzt der richtige Zeitpunkt für eine vertrauliche IP-Erstberatung.", "IP-Beratung anfragen", "kontakt.html"]
  },
  {
    file: "ressourcen.html",
    group: "Angebote",
    eyebrow: "Räume, Labs & Prototyping",
    title: "Ideen brauchen Raum, Werkzeug und Menschen.",
    lead: "HIGHEST vermittelt Arbeits- und Experimentiermöglichkeiten auf dem Campus und im Darmstädter Partnernetzwerk.",
    facts: [["KreaRaum", "für kreative Teamprozesse"], ["Meta & AI Lab", "für immersive Technologien"], ["FabLab", "für kostengünstige Prototypen"]],
    sections: [
      { id: "raeume", kicker: "Arbeiten", title: "Vom geschützten Gespräch bis zum Co-Working.", text: ["Je nach Vorhaben werden Räume auf dem Campus oder bei Partnern wie HUB31, TIZ und TechQuartier relevant. HIGHEST hilft, Bedarf und Zugang zu klären."], cards: [
        { title: "KreaRaum", text: "Buchbarer Raum im Alten Hauptgebäude für kreative Denkprozesse und Geschäftsmodellentwicklung." },
        { title: "Partnerflächen", text: "Co-Working, Büros, Werkstätten und Veranstaltungsräume im regionalen Ökosystem." }
      ]},
      { id: "labs", kicker: "Testen", title: "Technologie erfahrbar machen.", cards: [
        { title: "Meta & AI Lab", text: "VR-, AR- und Mixed-Reality-Technik für Experimente und neue Geschäftsmodelle." },
        { title: "FabLab", text: "3D-Scanner, 3D-Drucker, Lasercutter, Fräsen und Plotter sowie Workshops zu Fertigung, CAD und CAM." }
      ]},
      { id: "zugang", kicker: "Zugang", title: "Erst Bedarf klären, dann Ressource wählen.", text: ["Beschreibe kurz, was du entwickeln oder testen möchtest, welche Technik du brauchst und in welcher Phase du bist. So kann HIGHEST den passenden Zugang vermitteln."], links: [{ label: "Ressource anfragen", href: "kontakt.html" }] }
    ],
    cta: ["Was möchtest du bauen oder testen?", "Wir klären mit dir, welche Fläche, Technik oder Partnerressource sinnvoll ist.", "Ressource anfragen", "kontakt.html"]
  },
  {
    file: "wissen.html",
    group: "Angebote",
    eyebrow: "Wissensvermittlung",
    title: "Entrepreneurship kann man lernen.",
    lead: "HIGHEST gibt Studierenden und Forschenden Werkzeuge an die Hand, um Märkte zu verstehen, Optionen zu erkennen und fundiert zu entscheiden.",
    facts: [["praxisnah", "mit Gründenden und Expert:innen"], ["offen", "für verschiedene Fachrichtungen"], ["flexibel", "Lehre, Events, Workshops und digital"]],
    sections: [
      { id: "lehre", kicker: "Entrepreneurship in der Lehre", title: "Grundlagen mit echtem Anwendungsbezug.", text: ["Lehrangebote vermitteln Geschäftsmodellentwicklung, Unternehmensstrategie, Start-up-Management und Evaluation. Gastreferent:innen und Start-ups ergänzen die wissenschaftliche Perspektive."], links: [{ label: "Ringvorlesung ansehen", href: "ringvorlesung.html" }] },
      { id: "workshops", kicker: "Strategische Workshops", title: "Vom Wissen ins Handeln.", text: ["Workshops helfen, Problem, Zielgruppe, Positionierung und nächste Experimente zu strukturieren. Sie können eine individuelle Beratung vorbereiten oder vertiefen."], links: [{ label: "Beratung kombinieren", href: "beratung.html" }] },
      { id: "startup-academy", kicker: "RMU Startup Academy", title: "Gemeinsam gründen, online wachsen.", text: ["Die Rhein-Main-Universitäten verbinden praxisorientierte digitale Kurse mit persönlicher Beratung ihrer Gründungszentren – HIGHEST, Goethe-Unibator, JGU Startup Center und Gründungsbüro der Universitätsmedizin Mainz."], links: [{ label: "Zur RMU Startup Academy ↗", href: "https://rmu-startup-academy.de", external: true }] }
    ],
    cta: ["Welches Wissen fehlt dir gerade?", "Wir verbinden Lernformat und persönliche Beratung passend zu deinem nächsten Schritt.", "Einstieg besprechen", "kontakt.html"]
  },
  {
    file: "sichtbarkeit.html",
    group: "Angebote",
    eyebrow: "Sichtbarkeit",
    title: "Gute Innovationen brauchen das richtige Publikum.",
    lead: "HIGHEST schafft Bühnen, Geschichten und Kontakte für Innovator:innen der TU Darmstadt – gezielt und passend zum Reifegrad.",
    facts: [["INNODAY", "Wissenschaft, Start-ups, Wirtschaft und Politik"], ["Ideenwettbewerb", "Feedback und Bühne für frühe Ideen"], ["Newsroom", "Erfolgsgeschichten aus dem Ökosystem"]],
    sections: [
      { id: "formate", kicker: "Plattformen", title: "Sichtbarkeit ist mehr als Reichweite.", text: ["Entscheidend ist, wer eine Innovation wann sieht: potenzielle Kund:innen, Industriepartner, Investor:innen, Talente oder die wissenschaftliche Community."], cards: [
        { title: "INNODAY", text: "Messe, Programm und Netzwerk für Deep Tech und Transfer.", href: "innoday.html" },
        { title: "TU-Ideenwettbewerb", text: "Qualifiziertes Feedback und öffentliche Bühne für Ideen aus der TU.", href: "ideenwettbewerb.html" },
        { title: "News & Success Stories", text: "Redaktionelle Geschichten über Lösungen, Teams und Wirkung.", href: "news.html" }
      ]},
      { id: "vorbereitung", kicker: "Vor dem Auftritt", title: "Botschaft, Reifegrad und Zielgruppe müssen zusammenpassen.", bullets: ["Nutzenversprechen verständlich formulieren", "vertrauliche oder schutzfähige Inhalte vorab prüfen", "passendes Format und Publikum auswählen"] },
      { id: "schutz", kicker: "Nicht zu früh öffentlich", title: "Sichtbarkeit und IP gemeinsam denken.", text: ["Bei potenziell schutzfähigen Ergebnissen wird vor einer Veröffentlichung geklärt, welche Informationen bereits gezeigt werden können."], links: [{ label: "IP-Beratung", href: "ip-transfer.html" }] }
    ],
    cta: ["Dein Projekt soll sichtbar werden?", "Wir prüfen gemeinsam, welches Format und welcher Zeitpunkt passen.", "Sichtbarkeit besprechen", "kontakt.html"]
  },
  {
    file: "female-founders.html",
    group: "Programme",
    eyebrow: "females@HIGHEST",
    title: "Deine Idee. Dein Impact. Dein Netzwerk.",
    lead: "HIGHEST unterstützt gründungsinteressierte Frauen dabei, Potenziale und Zukunftsideen zu erkunden – auch wenn noch nicht alles konkret ist.",
    facts: [["EXIST Women", "finanzielle Unterstützung und Qualifizierung"], ["Mentorinnen", "Erfahrung und persönliches Sparring"], ["Rhein-Main", "Community über Hochschulgrenzen hinweg"]],
    sections: [
      { id: "programm", kicker: "EXIST Women", title: "Raum für Entwicklung statt Druck zur sofortigen Gründung.", text: ["Das Programm verbindet finanzielle Unterstützung, Workshops, persönliche Begleitung und ein starkes Netzwerk. Eine fertige Geschäftsidee ist nicht zwingend Voraussetzung."], bullets: ["unternehmerische Kompetenzen aufbauen", "Ideen und persönliche Ziele weiterentwickeln", "Mentorinnen und andere Teilnehmerinnen kennenlernen"] },
      { id: "status", kicker: "Stand September 2026", title: "Der Bewerbungszeitraum 2026 ist abgeschlossen.", text: ["Über females@HIGHEST kannst du dich weiterhin über Community-Events, Netzwerkmöglichkeiten und kommende Ausschreibungen informieren."], links: [{ label: "E-Mail an females@HIGHEST", href: "mailto:females@highest.tu-darmstadt.de", external: true }] },
      { id: "community", kicker: "Community", title: "Gemeinsam weiterdenken.", text: ["Die Female-Founder-Community verbindet Teilnehmerinnen aus TU Darmstadt, h_da, Goethe-Universität Frankfurt und JGU Mainz sowie erfahrene Mentorinnen aus Technologie und Wirtschaft."] }
    ],
    cta: ["Bleib mit females@HIGHEST verbunden.", "Frage nach kommenden Events und der nächsten Bewerbungsrunde.", "Kontakt aufnehmen", "mailto:females@highest.tu-darmstadt.de"]
  },
  {
    file: "company-builder.html",
    group: "Programme",
    eyebrow: "HIGHEST × FUTURY",
    title: "From science to scalable startups.",
    lead: "Der HIGHEST & FUTURY Company Builder begleitet wissenschafts- und technologiebasierte Deep-Tech-Teams sechs Monate lang vom Proof of Concept zur Investment Readiness.",
    facts: [["6 Monate", "strukturiertes Venture Building"], ["bis 50.000 €", "mögliches Investment-Ticket nach drei Monaten"], ["5.000 €", "Mentoring-Budget pro Team"]],
    alert: "Batch 2: Bewerbung laut Programmseite bis 18. Oktober 2026. Frist und Bedingungen bitte vor Bewerbung extern prüfen.",
    sections: [
      { id: "fuer-wen", kicker: "Zielgruppe", title: "Für Deep-Tech-Teams mit wissenschaftlicher Substanz.", text: ["Das Programm ist in der Rhein-Main-Region verwurzelt und offen für Teams aus Hessen und ganz Deutschland. Ein fertiges Produkt ist nicht erforderlich; entscheidend sind Technologiepotenzial, Team und Entwicklungsambition."], bullets: ["technologie- oder wissenschaftsbasiertes Vorhaben", "Proof of Concept oder belastbare technische Grundlage", "Ziel: Markt, Team und Finanzierung professionell vorbereiten"] },
      { id: "programm", kicker: "Programm", title: "Drei Hebel für Investment Readiness.", steps: [["01", "Venture Building", "Geschäftsmodell, Markt, Go-to-Market und operative Meilensteine fokussieren."], ["02", "1:1 Mentoring", "Passende Top-Level-Mentor:innen für konkrete technische und unternehmerische Fragen."], ["03", "Kapitalzugang", "Investment-Ticket bis 50.000 Euro möglich; anschließend qualifizierte Warm Intros zu VC-Partnern."]] },
      { id: "bewerbung", kicker: "Bewerbung", title: "Die Programmbewerbung bleibt extern.", text: ["Die aktuelle Ausschreibung, Teilnahmebedingungen, De-minimis-Angaben und das Bewerbungsformular werden auf der eigenständigen Programmseite gepflegt."], links: [{ label: "Zur Company-Builder-Programmseite ↗", href: "https://highestbuilder.com/", external: true }, { label: "Vorab mit HIGHEST sprechen", href: "kontakt.html" }] }
    ],
    cta: ["Ist der Company Builder dein nächster Schritt?", "Prüfe die aktuelle Ausschreibung oder besprich die Passung zuerst mit HIGHEST.", "Programmseite öffnen ↗", "https://highestbuilder.com/"]
  },
  {
    file: "innovation-scouting.html",
    group: "Programme",
    eyebrow: "InnovationScouting × HIGHEST",
    title: "Anwendungspotenzial beginnt oft vor der Gründungsidee.",
    lead: "Die InnovationScouts sprechen Forschende früh an, identifizieren Potenziale und öffnen Transferwege. HIGHEST übernimmt die vertiefte Begleitung zu IP, Geschäftsmodell, Förderung und Gründung.",
    facts: [["xchange-Office", "organisatorische Heimat der InnovationScouts"], ["frühe Forschung", "Potenziale erkennen, bevor Wege feststehen"], ["enge Übergabe", "in die HIGHEST-Beratung"]],
    sections: [
      { id: "auftrag", kicker: "Rolle", title: "Scouting und Beratung sind zwei Schritte derselben Nutzerreise.", text: ["InnovationScouting ist Teil des xchange-Office der TU Darmstadt und arbeitet eng mit HIGHEST zusammen. Die gemeinsame Darstellung ändert keine organisatorische Zuordnung; sie reduziert Zuständigkeitsfragen für Forschende."], bullets: ["persönliche Sprechstunden und Lab-Meetups", "Technology-Readiness- und Transfer-Einordnung", "Hinweise zu Förderung, Schutzrechten und Netzwerken"] },
      { id: "uebergang", kicker: "Nahtlos weiter", title: "Von der Entdeckung zur Umsetzung.", text: ["Wenn ein Potenzial vertieft werden soll, verbindet das Scouting mit HIGHEST. Dort werden IP, Verwertungsstrategie, Geschäftsmodell und mögliche Gründung systematisch weiterbearbeitet."], links: [{ label: "IP & Transfer", href: "ip-transfer.html" }, { label: "Beratung", href: "beratung.html" }] },
      { id: "extern", kicker: "TU-Struktur", title: "Vertiefende TU-Informationen bleiben extern erreichbar.", links: [{ label: "InnovationScouts bei TU xchange ↗", href: "https://www.tu-darmstadt.de/xchange/gruendungen/innovationscouts.de.jsp", external: true }] }
    ],
    cta: ["Forschung mit möglicher Anwendung?", "Starte beim Scouting oder direkt bei HIGHEST – wir sorgen für den passenden Übergang.", "Kontakt aufnehmen", "kontakt.html"]
  },
  {
    file: "highest-experts.html",
    group: "Programme",
    eyebrow: "Mentoring & Spezialwissen",
    title: "Die richtige Erfahrung zur richtigen Frage.",
    lead: "HIGHEST bringt Forschende und Gründungsteams mit erfahrenen Persönlichkeiten aus Wirtschaft, Industrie, Technologie und Gründung zusammen.",
    facts: [["Mentor:in", "längerfristig und ganzheitlich"], ["Business Specialist", "punktuell für konkrete Fragen"], ["Coach", "klarer Zeitraum und Ziel"]],
    sections: [
      { id: "matching", kicker: "Passgenau", title: "Nicht möglichst viele Kontakte – der richtige Kontakt.", text: ["Aus Ausgangslage, Thema und Ziel entsteht ein gezieltes Match. Der Austausch ist persönlich, diskret und auf die konkrete Entwicklungsfrage ausgerichtet."] },
      { id: "rollen", kicker: "Drei Rollen", title: "So unterstützen HIGHEST Experts.", cards: [
        { title: "Mentor:in", text: "Längerfristige Begleitung, pro bono, mit Erfahrung und persönlichem Netzwerk." },
        { title: "Business Specialist", text: "Punktuelle Expertise, etwa für Anwendungspotenziale oder Branchenfragen." },
        { title: "Coach", text: "Fokussierte Begleitung über einen definierten Zeitraum mit klarer Zielsetzung." }
      ]},
      { id: "mitmachen", kicker: "Beide Seiten", title: "Expertise suchen oder Expertise einbringen.", links: [{ label: "Expert:in finden", href: "kontakt.html" }, { label: "Mentor:in werden", href: "mailto:sabine.remmert@tu-darmstadt.de", external: true }] }
    ],
    cta: ["Welche Expertise bringt dich weiter?", "Beschreibe deine konkrete Frage – HIGHEST prüft ein passendes Match.", "Matching anfragen", "kontakt.html"]
  },
  {
    file: "futury.html",
    group: "Programme",
    eyebrow: "Startup Factory Rhein-Main",
    title: "HIGHEST ist Teil von FUTURY – The Future Factory.",
    lead: "Gemeinsam mit starken Hochschul-, Industrie- und Kapitalpartnern entwickelt FUTURY die Rhein-Main-Region zu einem international sichtbaren Hotspot für technologie- und wissensbasiertes Unternehmertum.",
    facts: [["INNOVATE", "Talente, Forschung und IP an Hochschulen"], ["CREATE", "Pilotprojekte und Company Building"], ["SCALE", "Zugang zu privatem Kapital"]],
    sections: [
      { id: "rolle", kicker: "Rolle von HIGHEST", title: "Gründungskultur und Transfer an der TU stärken.", text: ["HIGHEST bringt die Forschungsstärke der TU Darmstadt, Talente, IP-Kompetenz und lokale Beratung in den Universitätsverbund ein. Dazu gehören neue Bildungsformate, bessere Transferwege und gezielte Deep-Tech-Unterstützung."] },
      { id: "company-builder", kicker: "Gemeinsames Programm", title: "Deep Tech gezielt bis zur Investment Readiness begleiten.", text: ["Im gemeinsamen Company Builder verbinden HIGHEST und FUTURY technisches Venture Building mit Mentoring, Kapital und Zugang zu Investor:innen."], links: [{ label: "Company Builder", href: "company-builder.html" }] },
      { id: "extern", kicker: "Partnerplattform", title: "Die Factory-Angebote werden extern gepflegt.", links: [{ label: "FUTURY – The Future Factory ↗", href: "https://www.futury.eu/", external: true }] }
    ],
    cta: ["Von Darmstadt in die Rhein-Main-Region.", "Entdecke die Factory oder starte mit deiner Frage direkt bei HIGHEST.", "FUTURY öffnen ↗", "https://www.futury.eu/"]
  },
  {
    file: "patente.html",
    group: "Angebote",
    eyebrow: "Technologieangebote",
    title: "Geschützte Forschung sucht Anwendung.",
    lead: "Das Patentportfolio macht ausgewählte Technologien der TU Darmstadt für Lizenzierung, Kooperation und unternehmerische Verwertung zugänglich.",
    facts: [["Lizenz", "Nutzungsrechte passend zum Vorhaben"], ["Kooperation", "Entwicklung gemeinsam weiterführen"], ["Spin-off", "Technologie unternehmerisch transferieren"]],
    sections: [
      { id: "zugang", kicker: "Für Unternehmen & Gründende", title: "Von der Technologie zum passenden Verwertungsmodell.", text: ["Die Patentübersicht ist der Einstieg. In einem vertraulichen Gespräch werden Anwendungsfeld, Entwicklungsstand, Schutzumfang und mögliche Kooperations- oder Lizenzmodelle geklärt."] },
      { id: "felder", kicker: "Aktuelle Themenfelder", title: "Beispiele aus dem Portfolio.", cards: [
        { title: "Energie & Produktion", text: "Metallische Energiespeicher, Rotorkühlung und energieflexible Prozesse." },
        { title: "Materialien & Fertigung", text: "Geopolymere, keramische Komponenten und additive Fertigung." },
        { title: "Sensorik & Computing", text: "Werkzeuginspektion, Ultraschall, SRAM-In-Memory-Computing und Tracerpartikel." }
      ]},
      { id: "prozess", kicker: "Vor einer Anfrage", title: "IP und Geschäftsmodell zusammen betrachten.", text: ["Für TU-Angehörige beginnt der Weg meist mit einer vertraulichen IP-Beratung und Erfindungsmeldung. Externe Interessierte wenden sich mit Anwendungsfall und Technologiebezug an HIGHEST."], links: [{ label: "IP-Prozess verstehen", href: "ip-transfer.html" }, { label: "Anfrage stellen", href: "kontakt.html" }] }
    ],
    cta: ["Interesse an einer Technologie?", "Nenne Anwendungsfeld und relevanten Technologiebereich – wir verbinden dich mit der richtigen Stelle.", "Technologieanfrage", "kontakt.html"]
  },
  {
    file: "fuer-unternehmen.html",
    group: "Unternehmen",
    eyebrow: "Wirtschaft × Wissenschaft",
    title: "Früher Zugang zu Ideen, Technologien und Talenten.",
    lead: "HIGHEST verbindet etablierte Unternehmen mit Innovator:innen, Start-ups und wissenschaftlicher Expertise der TU Darmstadt.",
    facts: [["Technologien", "frühzeitig kennenlernen"], ["Talente", "direkt in Austausch kommen"], ["Ökosystem", "Rhein-Main gemeinsam stärken"]],
    sections: [
      { id: "optionen", kicker: "Formate", title: "Wähle die Art der Zusammenarbeit.", cards: [
        { title: "HIGHEST Club", text: "Kontinuierlicher Zugang, exklusive Formate und Dialog mit Innovator:innen.", href: "highest-club.html" },
        { title: "Start-up Partner", text: "Gezielter Zugang zu Innovationsprojekten, Teams und Talenten.", href: "start-up-partner.html" },
        { title: "Ökosystem-Partnerschaft", text: "Programme, Infrastruktur oder Events gemeinsam gestalten.", href: "partner.html" },
        { title: "Patent & Technologie", text: "Lizenz- und Kooperationsmöglichkeiten im Portfolio entdecken.", href: "patente.html" }
      ]},
      { id: "nutzen", kicker: "Mehrwert", title: "Nicht nur beobachten – sinnvoll andocken.", bullets: ["Zugang zu neuen Technologien und innovativen Geschäftsideen", "Kontakt zu Gründer:innen, Forschenden und Nachwuchstalenten", "Sichtbarkeit und Reputation im Innovationsökosystem Rhein-Main", "gemeinsame Beiträge zu Transfer und Corporate Social Responsibility"] },
      { id: "start", kicker: "Individuell", title: "Der Bedarf Ihres Unternehmens steht am Anfang.", text: ["HIGHEST lotst durch das Ökosystem und schlägt geeignete Formate vor – vom einzelnen Kontakt bis zur langfristigen Partnerschaft."] }
    ],
    cta: ["Welche Innovation sucht Ihr Unternehmen?", "Beschreiben Sie Thema, Ziel und gewünschte Form der Zusammenarbeit.", "Unternehmenskontakt", "kontakt.html"]
  },
  {
    file: "highest-club.html",
    group: "Unternehmen",
    eyebrow: "HIGHEST Club",
    title: "Mitten im Geschehen der Ideen.",
    lead: "Club-Partner und Mitglieder erhalten frühen Zugang zu Innovator:innen, Gründungsteams, Veranstaltungen und ausgewählten Ressourcen des HIGHEST-Ökosystems.",
    facts: [["Dialog", "mit Forschung und Gründung"], ["Events", "exklusive Netzwerkformate"], ["Labs", "Zugang zu ausgewählten Ressourcen"]],
    sections: [
      { id: "vorteile", kicker: "Mitgliedschaft", title: "Erster informiert. Direkt verbunden.", bullets: ["früher Austausch zu Technologien und Entwicklungen", "Zugang zu Start-ups, Innovator:innen und Gründungshochschulgruppen", "exklusive Workshops, Clubabende und Netzwerkformate", "Möglichkeit, das eigene Unternehmen bei Talenten sichtbar zu machen"] },
      { id: "dialog", kicker: "Symbiose", title: "Wissenschaft gewinnt Praxis. Unternehmen gewinnen Zugang.", text: ["Der Club ist als kontinuierliche Beziehung gedacht: Mitglieder teilen Erfahrung und Netzwerk; Innovator:innen gewinnen Markt- und Branchenperspektiven."] },
      { id: "abgrenzung", kicker: "Alternativen", title: "Club, Start-up Partner oder Projektkooperation?", text: ["HIGHEST klärt im Erstgespräch, welches Modell zu Ziel, Zeithorizont und gewünschter Intensität passt."], links: [{ label: "Start-up Partner", href: "start-up-partner.html" }, { label: "Kooperationen", href: "partner.html" }] }
    ],
    cta: ["Teil des HIGHEST Club werden?", "Wir senden Ihnen Informationen zu Mitgliedschaft und aktuellen Formaten.", "Mitgliedschaft anfragen", "kontakt.html"]
  },
  {
    file: "start-up-partner.html",
    group: "Unternehmen",
    eyebrow: "HIGHEST Start-up Partner",
    title: "Direkter Zugang zu Innovation und Gründung.",
    lead: "Start-up Partner profitieren vom gezielten Kontakt zu Innovationsprojekten, Ausgründungen, IP, Talenten und Wissenschaftler:innen aus der TU Darmstadt.",
    facts: [["Scouting", "passende Teams und Technologien"], ["Workshops", "exklusiv mit Start-ups und Projekten"], ["Talente", "Sichtbarkeit auf dem Campus"]],
    sections: [
      { id: "leistungen", kicker: "Partnerschaft", title: "Was Start-up Partner erhalten.", bullets: ["direkter Kontakt zu Gründer:innen und Innovator:innen", "frühe Einblicke in neue Technologien und Projekte", "Netzwerk-Workshops und individuelle Kontaktpunkte", "Zugang zu Talenten und Hochschulgruppen", "Präsenz bei Studierenden und Forschenden"] },
      { id: "passung", kicker: "Für wen", title: "Für Unternehmen mit echtem Innovationsinteresse.", text: ["Besonders sinnvoll ist die Partnerschaft, wenn ein Unternehmen konkrete Technologiefelder verfolgt, Pilotpartner werden möchte oder systematisch Kontakt zu wissenschaftsbasierten Start-ups sucht."] },
      { id: "naechster-schritt", kicker: "Start", title: "Themen und Ziele zuerst klären.", text: ["HIGHEST stellt auf Basis Ihres Bedarfs geeignete Kontakte und Formate zusammen."] }
    ],
    cta: ["Start-up Partner werden?", "Nennen Sie uns Innovationsfelder und gewünschte Kontaktpunkte.", "Partnerschaft anfragen", "kontakt.html"]
  },
  {
    file: "partner.html",
    group: "Unternehmen",
    eyebrow: "Kooperationen",
    title: "Ein starkes Ökosystem ist eine gemeinsame Leistung.",
    lead: "HIGHEST arbeitet mit Hochschulen, Unternehmen, Investor:innen, Transfer- und Infrastrukturpartnern zusammen, um Gründungen und Innovationen voranzubringen.",
    facts: [["Ökosystem", "programme und Zugänge verbinden"], ["Events", "Reichweite und Dialog gemeinsam schaffen"], ["Infrastruktur", "Räume, Labs und Know-how teilen"]],
    sections: [
      { id: "formen", kicker: "Kooperationsformen", title: "Von einem Format bis zur strategischen Partnerschaft.", cards: [
        { title: "Ökosystem-Partnerschaft", text: "Teams mit Programmen, Förderung, Räumen und Netzwerken verbinden." },
        { title: "Event-Sponsoring", text: "INNODAY, Ideenwettbewerb oder foundersXchange gemeinsam stärken." },
        { title: "Innovation & Pilotierung", text: "Technologien testen, Anwendungsfelder öffnen und Pilotprojekte ermöglichen." }
      ]},
      { id: "netzwerk", kicker: "Beispiele", title: "Regional verwurzelt, überregional verbunden.", text: ["Zum Netzwerk gehören unter anderem FUTURY, TechQuartier, ATHENE Digital Hub Cybersecurity, HUB31, cesah, hessian.AI, Green Tech Accelerator, Ryon, Hessen Ideen und Business Angels FrankfurtRheinMain."], links: [{ label: "Netzwerk im Überblick", href: "netzwerk.html" }, { label: "FUTURY", href: "futury.html" }] },
      { id: "bedarf", kicker: "Gemeinsame Wirkung", title: "Kooperation beginnt mit einem konkreten Ziel.", text: ["Beschreiben Sie, welches Thema, welche Zielgruppe oder welche Ressource Sie in das Ökosystem einbringen möchten."] }
    ],
    cta: ["Gemeinsam mehr erreichen.", "Wir prüfen, welches Kooperationsformat zu Ihrem Ziel passt.", "Kooperation besprechen", "kontakt.html"]
  },
  {
    file: "spin-off-label.html",
    group: "Unternehmen",
    eyebrow: "Auszeichnung der TU Darmstadt",
    title: "Das Spin-off Label macht erfolgreiche Ausgründungen sichtbar.",
    lead: "Das Label wird vom Vizepräsidenten für Innovation vergeben und zeichnet wissenschaftsbasierte Start-ups mit Bezug zur TU Darmstadt aus.",
    facts: [["TU-Bezug", "Technologie, Know-how oder Gründer:innen"], ["Innovation", "gesellschaftlich oder wirtschaftlich relevant"], ["Begleitung", "durch HIGHEST und gegebenenfalls Förderung"]],
    sections: [
      { id: "kriterien", kicker: "Kriterien", title: "Wann eine Bewerbung passt.", bullets: ["Technologie, Software oder Know-how stammen aus der TU Darmstadt", "mindestens eine gründende Person hat einen TU-Bezug", "der Businessplan ist fundiert und verfolgt relevante Wirkung", "das Start-up wurde durch HIGHEST begleitet und gegebenenfalls öffentlich gefördert"] },
      { id: "nutzen", kicker: "Sichtbarkeit", title: "Zugehörigkeit zeigen und Vertrauen stärken.", text: ["Das Label kennzeichnet qualifizierte Ausgründungen aus dem Umfeld der TU Darmstadt und erhöht ihre Sichtbarkeit gegenüber Partnern, Talenten und Öffentlichkeit."], links: [{ label: "Ausgezeichnete Start-ups", href: "startups.html" }] },
      { id: "bewerbung", kicker: "Bewerbung", title: "Kriterien gemeinsam vorprüfen.", text: ["HIGHEST klärt, ob die Voraussetzungen erfüllt sind und welche Unterlagen für die nächste Vergaberunde benötigt werden."] }
    ],
    cta: ["Passt das Label zu eurem Start-up?", "Wir prüfen TU-Bezug, Reifegrad und nächste Vergabemöglichkeit.", "Label anfragen", "kontakt.html"]
  },
  {
    file: "startups.html",
    group: "Unternehmen",
    eyebrow: "Start-ups aus dem Ökosystem",
    title: "Aus Forschung wird unternehmerische Wirkung.",
    lead: "HIGHEST begleitet wissenschafts- und technologiebasierte Teams aus der TU Darmstadt und der Region – von der frühen Validierung bis zur Unternehmensentwicklung.",
    facts: [["> 200", "Start-ups seit Beginn der 1990er aus der TU"], ["15–20", "Ausgründungen pro Jahr laut HIGHEST"], ["Deep Tech", "starker Schwerpunkt in Darmstadt"]],
    sections: [
      { id: "beispiele", kicker: "Erfolgsgeschichten", title: "Teams, die Technologie in Anwendung bringen.", cards: [
        { title: "SYNAC.IO", text: "Zutritt, Zugänge und KI-Kontrolle für kritische Infrastruktur." },
        { title: "Workcraft", text: "Einfach bedienbare KI für Handwerksbetriebe." },
        { title: "Circular Metal Energy", text: "Grüne Energie auf Eisenbasis liefern und speichern." },
        { title: "P2P Bio", text: "Biologische Datenflut in nutzbares Wissen übersetzen." },
        { title: "Aperio Space", text: "Optische Satellitenkommunikation für schnellere Datenverfügbarkeit." },
        { title: "Folivora Solutions", text: "Energie-, Material- und Warenströme effizient steuern." }
      ]},
      { id: "label", kicker: "Qualitätssignal", title: "Spin-off Label der TU Darmstadt.", text: ["Ausgewählte wissenschaftsbasierte Start-ups mit TU-Bezug können sich für das Label bewerben."], links: [{ label: "Kriterien ansehen", href: "spin-off-label.html" }] },
      { id: "begleitung", kicker: "Für Teams", title: "Auch nach der Gründung bleibt HIGHEST ansprechbar.", links: [{ label: "Business Development", href: "beratung.html#spektrum" }, { label: "Company Builder", href: "company-builder.html" }, { label: "Experts", href: "highest-experts.html" }] }
    ],
    cta: ["Euer Start-up kommt aus Forschung oder Hochschule?", "Lasst uns klären, welche Unterstützung jetzt den größten Hebel hat.", "Teamgespräch anfragen", "kontakt.html"]
  },
  {
    file: "ueber-uns.html",
    group: "Über uns",
    eyebrow: "Innovationshub der TU Darmstadt",
    title: "Berater. Connector. Möglichmacher.",
    lead: "HIGHEST ist die zentrale Anlaufstelle der TU Darmstadt für Innovation, IP, Transfer und Gründung – vom ersten Potenzial bis zum wachsenden Unternehmen.",
    facts: [["seit 2007", "Gründungs- und Innovationszentrum"], ["14", "HIGHEST-Mitarbeitende laut Datenstand"], ["29", "Experts laut Datenstand"]],
    sections: [
      { id: "auftrag", kicker: "Auftrag", title: "Menschen befähigen, informierte Entscheidungen zu treffen.", text: ["HIGHEST beginnt in der Frühphase, bündelt gründungsrelevante Aktivitäten und verbindet Wissenschaft mit Wirtschaft. Die Begleitung ist persönlich, tiefgehend und auf selbstbestimmte Entscheidungen ausgerichtet."], links: [{ label: "Positionierung", href: "positionierung.html" }] },
      { id: "organisation", kicker: "Zentrale Anlaufstelle", title: "Kompetenzen in einem Zugang bündeln.", cards: [
        { title: "Innovation & Start-up Consulting", text: "Geschäftsmodelle, Förderung, Gründung und Unternehmensentwicklung." },
        { title: "IP Services", text: "Erfindungen, Schutzstrategien und Verwertung." },
        { title: "Community Services", text: "Programme, Netzwerk, Ressourcen und Sichtbarkeit." }
      ]},
      { id: "mehr", kicker: "Vertiefen", title: "Team, Zahlen und Netzwerk.", links: [{ label: "Team", href: "team.html" }, { label: "Daten & Fakten", href: "daten-fakten.html" }, { label: "Netzwerk", href: "netzwerk.html" }] }
    ],
    cta: ["Du hast eine Idee oder ein Ergebnis?", "HIGHEST beginnt dort, wo du gerade stehst.", "Kontakt aufnehmen", "kontakt.html"]
  },
  {
    file: "positionierung.html",
    group: "Über uns",
    eyebrow: "Leitbild",
    title: "Wir fangen an, bevor es losgeht.",
    lead: "Andere beraten Geschäftsmodelle. HIGHEST berät Menschen – ganzheitlich, zielorientiert und mit dem Anspruch, gute Entscheidungen möglich zu machen.",
    facts: [["früh", "Optionen schaffen, bevor Wege feststehen"], ["persönlich", "auf Augenhöhe und direkt am Campus"], ["verbunden", "zwischen Wissenschaft und Wirtschaft"]],
    sections: [
      { id: "vision", kicker: "High-Tech Hotspot", title: "Tech-Innovation aus Darmstadt sichtbar und wirksam machen.", text: ["Darmstadt soll seine Stärke bei Deep Tech und High Tech konsequent in gesellschaftliche und wirtschaftliche Anwendung übersetzen. HIGHEST erleichtert Studierenden und Forschenden den Weg zum Durchbruch."] },
      { id: "bindeglied", kicker: "Rolle", title: "Von Frühphase über Schutz bis Start-up – und darüber hinaus.", text: ["HIGHEST ist Berater, Connector, Möglichmacher und Wegbegleiter. Es verbindet Forschung, IP, Gründung, Unternehmen, Kapital und Partner im Ökosystem."] },
      { id: "xchange", kicker: "TU-Strategie", title: "Beitrag zu xchange4Transformation.", text: ["Wissenstransfer gelingt im Zusammenspiel von Wissenschaft, Zivilgesellschaft, Wirtschaft, Politik und Kultur. HIGHEST trägt den Innovations- und Gründungsteil dieses Transformationsauftrags."], links: [{ label: "TU xchange ↗", href: "https://www.tu-darmstadt.de/xchange/index.de.jsp", external: true }] }
    ],
    cta: ["Innovation beginnt mit einer offenen Frage.", "Wir helfen, daraus belastbare Optionen zu machen.", "Einstieg finden", "index.html#wegweiser"]
  },
  {
    file: "daten-fakten.html",
    group: "Über uns",
    eyebrow: "Daten & Fakten",
    title: "Darmstadts Gründungsstärke in Zahlen.",
    lead: "Der Datenstand der bisherigen HIGHEST-Seite zeigt Reichweite, Entwicklung und Ambition des Innovations- und Gründungszentrums.",
    facts: [["> 200", "Start-ups seit Beginn der 1990er"], ["85", "Ausgründungen in sechs Jahren"], ["15–20", "Ausgründungen pro Jahr"]],
    alert: "Zahlenstand der öffentlichen HIGHEST-Seite, abgerufen im September 2026. Vor einer offiziellen Veröffentlichung redaktionell bestätigen.",
    sections: [
      { id: "heute", kicker: "Aktueller Stand", title: "Ressourcen für mehr Transfer.", bullets: ["25.000 Studierende, Forschende und Wissenschaftler:innen (Daten-und-Fakten-Seite)", "14 HIGHEST-Mitarbeitende", "29 HIGHEST Experts", "Zielgröße: bis zu 40 Ausgründungen pro Jahr begleiten"] },
      { id: "meilensteine", kicker: "Entwicklung", title: "Vom Gründungszentrum zum Innovationshub.", steps: [["2007", "Gründung", "Gründungs- und Innovationszentrum der TU Darmstadt gegründet."], ["2010", "Ideenwettbewerb", "TU-Ideenwettbewerb initiiert."], ["2016", "INNODAY", "Start-up & Innovation Day erstmals durchgeführt."], ["2018", "HIGHEST", "Das Gründungszentrum erhält den Namen HIGHEST."], ["2022", "IP & CI", "IP-for-Shares sowie eigenständiger Webauftritt und neue CI."], ["2025/26", "Company Builder", "Intensive Deep-Tech-Begleitung gemeinsam mit FUTURY."]] },
      { id: "kontext", kicker: "Einordnung", title: "Zahlen brauchen einen gemeinsamen Redaktionsstand.", text: ["Einige öffentliche HIGHEST-Seiten nennen unterschiedliche Größen für die TU-Zielgruppe. Für den Livegang sollte ein verbindliches Factsheet mit Stichtag und verantwortlicher Stelle festgelegt werden."] }
    ],
    cta: ["Mehr als Zahlen: Menschen hinter dem Transfer.", "Lerne das Team und die Kompetenzen kennen.", "Team ansehen", "team.html"]
  },
  {
    file: "team.html",
    group: "Über uns",
    eyebrow: "Team",
    title: "Die Menschen hinter HIGHEST.",
    lead: "Ein interdisziplinäres Team verbindet Gründungsberatung, IP-Management, Community, Kommunikation und Stakeholder-Management.",
    facts: [["Leitung", "Harald Holzer"], ["Consulting", "Innovation & Start-up"], ["IP + Community", "Schutz, Programme und Netzwerk"]],
    alert: "Teamstand: öffentliche HIGHEST-Seite, September 2026. Personen und Funktionen vor dem Livegang bestätigen.",
    sections: [
      { id: "leitung", kicker: "Leitung", title: "Strategische Verantwortung.", cards: [{ title: "Harald Holzer", text: "Geschäftsführer HIGHEST" }] },
      { id: "consulting", kicker: "Innovation & Start-up Consulting", title: "Von der Idee bis zur Unternehmensentwicklung.", cards: [
        { title: "Gudrun Lantelme", text: "Leitung Innovation & Start-up Consulting" },
        { title: "Sacha Buytaert", text: "Innovation & Start-up Consultant" },
        { title: "Cherilyn Hehl", text: "Innovation & Start-up Consultant" },
        { title: "Simone Lühl", text: "Innovation & Start-up Consultant" },
        { title: "Dominique Tandl", text: "Innovation & Start-up Consultant" },
        { title: "Phillip Travers", text: "Innovation & Start-up Consultant" }
      ]},
      { id: "community-ip", kicker: "Community, Kommunikation & IP", title: "Netzwerk, Programme und Schutzrechte.", cards: [
        { title: "Dr. Claudia Becker", text: "Leitung Marketing und Kommunikation" },
        { title: "Sabine Remmert", text: "Leitung Community Services & Resources" },
        { title: "Katja Borowski", text: "Innovations & Start-up Consultant" },
        { title: "Carola Heyn-Benedikt", text: "Innovationsmanagerin" },
        { title: "Maren Hofmann", text: "Projekt- und Stakeholder-Management" },
        { title: "Jessica Retzlaff", text: "Innovationsmanagerin" },
        { title: "Diana Ripp", text: "Administration" },
        { title: "Susanne Gürich", text: "Leitung IP Services" },
        { title: "Vanessa Armbruster", text: "IP-Management" },
        { title: "Christine Hitzel", text: "Administration IP Services" }
      ]}
    ],
    cta: ["Wer passt zu deinem Anliegen?", "Du musst die Person nicht selbst auswählen – schildere kurz dein Thema.", "Kontakt aufnehmen", "kontakt.html"]
  },
  {
    file: "netzwerk.html",
    group: "Über uns",
    eyebrow: "Ökosystem",
    title: "Bedeutsame Verbindungen statt bloßer Kontakte.",
    lead: "HIGHEST verbindet Wissenschaft, Wirtschaft, Kapital, Infrastruktur und Gründungsförderung im Herzen Darmstadts und in der Rhein-Main-Region.",
    facts: [["Campus", "Forschung, Talente und IP"], ["Region", "Programme, Labs und Kapital"], ["Wirtschaft", "Märkte, Pilotierung und Erfahrung"]],
    sections: [
      { id: "logik", kicker: "Netzwerklogik", title: "Der Bedarf bestimmt die Verbindung.", text: ["Nicht jeder Kontakt ist für jede Phase hilfreich. HIGHEST kuratiert Zugänge nach Thema, Reifegrad und Ziel – vertraulich und mit klarem Anlass."] },
      { id: "partner", kicker: "Partnerlandschaft", title: "Komplementäre Stärken zusammenbringen.", cards: [
        { title: "FUTURY", text: "Startup Factory, Venture Building, Industrie und Kapital.", href: "futury.html" },
        { title: "HUB31", text: "Co-Working, Büros und Werkstattinfrastruktur in Darmstadt." },
        { title: "TechQuartier", text: "Programme und Netzwerk an der Schnittstelle von Start-ups und Unternehmen." },
        { title: "cesah", text: "Kompetenz- und Gründungszentrum für Raumfahrtanwendungen." },
        { title: "hessian.AI", text: "KI-Forschung, Transfer und Start-up-Unterstützung in Hessen." },
        { title: "Business Angels FrankfurtRheinMain", text: "Erfahrung, Kontakte und privates Frühphasenkapital." }
      ]},
      { id: "andocken", kicker: "Andocken", title: "Als Team, Expert:in oder Unternehmen.", links: [{ label: "HIGHEST Experts", href: "highest-experts.html" }, { label: "Für Unternehmen", href: "fuer-unternehmen.html" }, { label: "Kooperationspartner werden", href: "partner.html" }] }
    ],
    cta: ["Welche Verbindung fehlt?", "Beschreibe Ziel und Entwicklungsstand – HIGHEST sucht den passenden Zugang.", "Netzwerk anfragen", "kontakt.html"]
  },
  {
    file: "news.html",
    group: "News",
    eyebrow: "Newsroom",
    title: "Was Innovation aus Darmstadt bewegt.",
    lead: "Neuigkeiten, Erfolgsgeschichten und Einblicke aus Forschungstransfer, Gründung und HIGHEST-Ökosystem.",
    facts: [["News", "Programme, Preise und Partnerschaften"], ["Stories", "Teams und Technologien im Porträt"], ["Termine", "kommende Begegnungen im Ökosystem"]],
    alert: "Statischer Inhaltsstand September 2026. Für den späteren Betrieb sollte der Newsbereich an ein CMS oder einen gepflegten Datenfeed angebunden werden.",
    sections: [
      { id: "aktuell", kicker: "Aktuell", title: "Neu im Ökosystem.", cards: [
        { title: "Doppelerfolg für Workcraft bei Hessen Ideen 2026", text: "Das TU-Team erreicht Platz zwei und gewinnt zusätzlich den Publikumspreis. · 25.09.2026" },
        { title: "UNIPRENEURS zeichnet Professor Peter Buxmann aus", text: "Auszeichnung für besonderes Engagement für Entrepreneurship. · 23.09.2026" },
        { title: "Company Builder startet in die zweite Phase", text: "Kapital, Mentoring und VC-Zugang für wissenschaftsbasierte Deep-Tech-Teams. · 03.08.2026", href: "company-builder.html" }
      ]},
      { id: "stories", kicker: "Success Stories", title: "Von Forschung zu Wirkung.", cards: [
        { title: "Erst kam das Publikum, dann das Produkt", text: "Modolino verbindet Spieleentwicklung mit konsequenter Nutzerorientierung. · 23.07.2026" },
        { title: "Die Lücke zwischen Tür und Server", text: "SYNAC.IO bündelt Zutritt, Zugänge und KI-Kontrolle. · 18.06.2026" },
        { title: "Ökokraftwerk auf Eisenbasis", text: "Circular Metal Energy liefert und speichert grüne Energie. · 30.04.2026" }
      ]},
      { id: "termine", kicker: "Als Nächstes", title: "Menschen und Ideen live erleben.", links: [{ label: "Alle Events", href: "events.html" }, { label: "INNODAY26", href: "innoday.html" }] }
    ],
    cta: ["Eine Geschichte aus dem Ökosystem?", "Sichtbarkeit wird redaktionell nach Reifegrad, Schutz und Zielgruppe geplant.", "Thema vorschlagen", "kontakt.html"]
  },
  {
    file: "events.html",
    group: "Events",
    eyebrow: "Kalender & Formate",
    title: "Hier trifft Idee auf Erfahrung.",
    lead: "HIGHEST-Events schaffen Wissen, Feedback, Sichtbarkeit und Verbindungen – vom offenen Austausch bis zur großen Innovationsmesse.",
    facts: [["07.10.", "foundersXchange"], ["27.10.", "TU Idea Talks"], ["29.10.", "INNODAY26"]],
    alert: "Termine nach öffentlichem Kalender, Stand 28. September 2026. Vor Teilnahme bitte die jeweilige Veranstaltungsseite prüfen.",
    sections: [
      { id: "naechste", kicker: "Nächste Termine", title: "Im Oktober 2026.", cards: [
        { title: "foundersXchange", text: "7. Oktober 2026 · 17:00–20:00 Uhr", href: "foundersxchange.html" },
        { title: "HIGHEST Ringvorlesung", text: "26. Oktober 2026 · 15:00–16:30 Uhr", href: "ringvorlesung.html" },
        { title: "TU Idea Talks", text: "27. Oktober 2026 · 15:00–16:00 Uhr" },
        { title: "INNODAY26", text: "29. Oktober 2026 · 13:00–20:00 Uhr · darmstadtium", href: "innoday.html" }
      ]},
      { id: "formate", kicker: "Wiederkehrende Formate", title: "Für jede Phase ein anderer Austausch.", cards: [
        { title: "TU-Ideenwettbewerb", text: "Frühe Ideen schärfen, Feedback gewinnen und sichtbar werden.", href: "ideenwettbewerb.html" },
        { title: "foundersXchange", text: "Offener Gründungsstammtisch des Darmstädter Ökosystems.", href: "foundersxchange.html" },
        { title: "Ringvorlesung", text: "Praxiswissen von der Idee bis zu Recht, Finanzierung und Wachstum.", href: "ringvorlesung.html" }
      ]},
      { id: "partner", kicker: "Gemeinsam veranstalten", title: "Events als Plattform für Ökosystem-Partner.", links: [{ label: "Kooperationen & Sponsoring", href: "partner.html" }] }
    ],
    cta: ["Welches Format passt zu dir?", "Wenn du unsicher bist, ordnen wir Event, Workshop oder Beratung gemeinsam ein.", "Kontakt aufnehmen", "kontakt.html"]
  },
  {
    file: "ideenwettbewerb.html",
    group: "Events",
    eyebrow: "TU-Ideenwettbewerb",
    title: "Deine Idee verdient mehr als die Schublade.",
    lead: "Der Wettbewerb macht Innovationen aus der TU Darmstadt sichtbar – mit qualifiziertem Feedback und der Chance auf die Bühne beim INNODAY.",
    facts: [["frühe Phase", "Idee darf noch in Entwicklung sein"], ["Feedback", "Jury aus relevanten Perspektiven"], ["Finale", "Preisverleihung beim INNODAY26"]],
    sections: [
      { id: "ablauf", kicker: "2026", title: "Einreichung abgeschlossen – Juryphase läuft.", text: ["Die eingereichten Konzepte werden bis zum Finale bewertet. Die überzeugendsten Teams präsentieren ihre Innovationen im Rahmen des INNODAY26 am 29. Oktober 2026."] },
      { id: "nutzen", kicker: "Mehr als ein Preis", title: "Idee schärfen und sichtbar machen.", bullets: ["Feedback zu Problem, Nutzen und Potenzial", "Übung in verständlicher Kommunikation", "Kontakt zu HIGHEST, Jury und Ökosystem", "Bühne für ausgewählte Finalist:innen"] },
      { id: "weiter", kicker: "Danach", title: "Aus Feedback wird der nächste Schritt.", links: [{ label: "Beratung", href: "beratung.html" }, { label: "Förderung", href: "foerderung.html" }, { label: "INNODAY26", href: "innoday.html" }] }
    ],
    cta: ["Nächste Runde nicht verpassen.", "Lass dich über neue Ausschreibung und Vorbereitungstermine informieren.", "Interesse melden", "kontakt.html"]
  },
  {
    file: "innoday.html",
    group: "Events",
    eyebrow: "29. Oktober 2026 · darmstadtium",
    title: "INNODAY26: Science. Start-ups. Future.",
    lead: "Beim Start-up & Innovation Day treffen Founderspirit und Innovationsgeist auf Wirtschaft, Wissenschaft, Kapital und Politik.",
    facts: [["> 100", "Aussteller laut Veranstaltungsseite"], ["13–20 Uhr", "Programm und Begegnung"], ["Deep Tech", "Fokus auf wissenschaftsnahe Gründungen"]],
    sections: [
      { id: "erleben", kicker: "Vor Ort", title: "Technologien sehen, Teams treffen, Perspektiven verbinden.", bullets: ["Ausstellung mit Start-ups und Innovationsprojekten", "Keynotes, Live-Podcast und Science Slam", "HIGHEST Company Builder Pitches", "Finale und Preisverleihung des TU-Ideenwettbewerbs", "Netzwerkformate für Wirtschaft, Investor:innen und Wissenschaft"] },
      { id: "relevant", kicker: "Für wen", title: "Ein Tag für das ganze Ökosystem.", cards: [
        { title: "Forschende & Studierende", text: "Transferwege, Vorbilder und Unterstützungsangebote entdecken." },
        { title: "Start-ups", text: "Sichtbarkeit, Kontakte, Kapitalperspektive und Feedback gewinnen." },
        { title: "Unternehmen & Investor:innen", text: "Deep-Tech-Teams und Technologien früh kennenlernen." }
      ]},
      { id: "anschluss", kicker: "Danach", title: "Kontakte in konkrete nächste Schritte übersetzen.", links: [{ label: "Für Unternehmen", href: "fuer-unternehmen.html" }, { label: "Company Builder", href: "company-builder.html" }, { label: "Kontakt", href: "kontakt.html" }] }
    ],
    cta: ["INNODAY26 vormerken.", "29. Oktober 2026, 13:00–20:00 Uhr im darmstadtium Darmstadt.", "Frage zum Event", "kontakt.html"]
  },
  {
    file: "foundersxchange.html",
    group: "Events",
    eyebrow: "Darmstädter Gründungsstammtisch",
    title: "Austausch auf Augenhöhe.",
    lead: "foundersXchange bringt Gründungsinteressierte, Start-ups, Expert:innen und Partner regelmäßig in einem offenen, persönlichen Format zusammen.",
    facts: [["offen", "für Ideen, Teams und Neugierige"], ["regelmäßig", "im Darmstädter Ökosystem"], ["persönlich", "Kontakte und Erfahrungen teilen"]],
    sections: [
      { id: "format", kicker: "Format", title: "Kein Hochglanz-Pitch nötig.", text: ["Im Vordergrund stehen ehrlicher Erfahrungsaustausch, neue Kontakte und konkrete Fragen aus dem Gründungsalltag. Je nach Termin ergänzen Impulse, Pitches oder Open-Mic-Sessions den Abend."] },
      { id: "naechster", kicker: "Nächster Termin", title: "7. Oktober 2026, 17:00–20:00 Uhr.", text: ["Veranstaltungsort und Anmeldung werden im aktuellen Kalender kommuniziert. Bitte vor Teilnahme noch einmal prüfen."], links: [{ label: "Eventübersicht", href: "events.html" }] },
      { id: "mitbringen", kicker: "Gut vorbereitet", title: "Eine Frage reicht als Einstieg.", bullets: ["Woran arbeitest du gerade?", "Welche Erfahrung oder Verbindung suchst du?", "Was kannst du anderen im Austausch anbieten?"] }
    ],
    cta: ["Beim nächsten foundersXchange dabei?", "Frage nach Anmeldung und aktuellem Veranstaltungsort.", "Eventkontakt", "kontakt.html"]
  },
  {
    file: "ringvorlesung.html",
    group: "Events",
    eyebrow: "HIGHEST Ringvorlesung",
    title: "Vom Konzept zum eigenen Unternehmen.",
    lead: "Die Ringvorlesung zeigt den Gründungsprozess praxisnah – mit wissenschaftlicher Grundlage, Gastreferent:innen und Erfahrungen aus Start-ups.",
    facts: [["Wintersemester", "wiederkehrendes Lehrformat"], ["2 CP", "unbenotet laut bisheriger Angebotsseite"], ["Deutsch", "für Bachelor, Master und Gasthörer:innen"]],
    sections: [
      { id: "inhalte", kicker: "Werkzeugkasten", title: "Mehr als Businessplan.", bullets: ["Ideengenerierung und Problemverständnis", "Business Model Canvas und Golden Circle", "Markt, Finanzierung und Marketing", "rechtliche Grundlagen", "Networking und Team"] },
      { id: "zielgruppe", kicker: "Zielgruppe", title: "Offen über Fachgrenzen hinweg.", text: ["Die Vorlesung richtet sich an Bachelor- und Masterstudierende aller Fachbereiche und Studiengänge sowie Gasthörer:innen. Auch ohne konkrete Gründungsabsicht helfen die Werkzeuge, Märkte und Arbeitsergebnisse besser zu verstehen."] },
      { id: "termine", kicker: "Wintersemester 2026/27", title: "Auftakt am 26. Oktober 2026.", text: ["Der aktuelle Kalender führt weitere Termine bis Februar 2027. Zeiten und Anmeldung bitte vor Teilnahme prüfen."], links: [{ label: "Eventübersicht", href: "events.html" }] }
    ],
    cta: ["Entrepreneurship praxisnah lernen.", "Frage nach Anmeldung und Anrechenbarkeit in deinem Studiengang.", "Information anfragen", "kontakt.html"]
  },
  {
    file: "kontakt.html",
    group: "Kontakt",
    eyebrow: "Ein Anliegen. Ein Einstieg.",
    title: "Wobei können wir dich unterstützen?",
    lead: "Schilder kurz, worum es geht. HIGHEST ordnet deine Anfrage intern zu – du musst vorher keine Zuständigkeit kennen.",
    facts: [["06151 16-57257", "Telefon"], ["kontakt@highest.tu-darmstadt.de", "allgemeine Anfragen"], ["Karolinenplatz 5", "6. Stock, 64283 Darmstadt"]],
    sections: [
      { id: "wege", kicker: "Direkter Kontakt", title: "Wähle den einfachsten Weg.", cards: [
        { title: "Beratung anfragen", text: "Für Idee, Forschung, IP, Förderung oder Gründung.", href: "mailto:beratung@highest.tu-darmstadt.de?subject=Beratungsanfrage%20über%20den%20Website-Prototyp" },
        { title: "Allgemeine Anfrage", text: "Für Organisation, Partnerschaften, Veranstaltungen und sonstige Themen.", href: "mailto:kontakt@highest.tu-darmstadt.de" },
        { title: "Anrufen", text: "06151 16-57257", href: "tel:+4961511657257" }
      ]},
      { id: "vorbereiten", kicker: "Hilft bei der Zuordnung", title: "Drei Sätze genügen.", bullets: ["Wer bist du und in welchem Kontext arbeitest du?", "Was möchtest du voranbringen oder klären?", "Was wäre ein hilfreicher nächster Schritt?"] },
      { id: "adresse", kicker: "Vor Ort", title: "HIGHEST an der TU Darmstadt.", text: ["Besucheradresse: Karolinenplatz 5, 6. Stock, 64283 Darmstadt.", "Postadresse: Karolinenplatz 5, 64289 Darmstadt."] }
    ],
    cta: ["Noch unsicher? Genau dafür sind wir da.", "Eine kurze Mail reicht – HIGHEST übernimmt die interne Zuordnung.", "E-Mail schreiben", "mailto:kontakt@highest.tu-darmstadt.de"]
  },
  {
    file: "faq.html",
    group: "Kontakt",
    eyebrow: "Häufige Fragen",
    title: "Kurz erklärt. Direkt weiter.",
    lead: "Antworten auf die wichtigsten Fragen zu Beratung, Gründung, IP, Finanzierung und Zusammenarbeit.",
    facts: [["kostenfrei", "HIGHEST-Beratung"], ["vertraulich", "vor öffentlicher Kommunikation"], ["offen", "auch ohne fertige Gründungsidee"]],
    sections: [
      { id: "beratung", kicker: "Beratung", title: "Wie unterstützt HIGHEST – und was kostet das?", text: ["Die Beratung ist kostenfrei und vertraulich. HIGHEST unterstützt bei Geschäftsmodell, IP, Förderung, Transfer, Team und Unternehmensentwicklung. Der erste Schritt dient dazu, Ausgangslage und sinnvollsten nächsten Hebel zu klären."] },
      { id: "idee", kicker: "Gründung", title: "Muss ich schon eine Geschäftsidee haben?", text: ["Nein. HIGHEST unterstützt auch bei Orientierung und Ideenentwicklung. Entscheidend ist, ein relevantes Problem und mögliche Nutzer:innen zu verstehen – nicht sofort einen perfekten Pitch zu liefern."] },
      { id: "ip", kicker: "Erfindung", title: "Wann sollte ich über IP sprechen?", text: ["So früh wie möglich und vor einer Veröffentlichung. Das gilt besonders für neue technische Lösungen, Algorithmen, Prototypen, Materialien, Verfahren oder unveröffentlichte Studien."], links: [{ label: "IP & Transfer", href: "ip-transfer.html" }] },
      { id: "investoren", kicker: "Finanzierung", title: "Hilft HIGHEST bei Investor:innen?", text: ["HIGHEST hilft, Voraussetzungen und Investment Readiness einzuordnen, Unterlagen zu schärfen und passende Kontakte vorzubereiten. Gespräche sind besonders sinnvoll, wenn Geschäftsmodell, Team und erste Validierung belastbar sind."], links: [{ label: "Company Builder", href: "company-builder.html" }] },
      { id: "team", kicker: "Mitgründer:innen", title: "Kann HIGHEST beim Teamaufbau helfen?", text: ["Über Beratung, Netzwerk, foundersXchange, Experts und Kommunikationskanäle kann HIGHEST passende Kontaktpunkte eröffnen. Ein Matching kann jedoch nicht garantiert werden."] }
    ],
    cta: ["Deine Frage war nicht dabei?", "Schreib uns – wir antworten oder verbinden dich mit der passenden Stelle.", "Frage stellen", "kontakt.html"]
  },
  {
    file: "impressum.html",
    group: "Rechtliches",
    eyebrow: "Anbieterkennzeichnung",
    title: "Impressum",
    lead: "Angaben auf Basis des bisherigen HIGHEST-Impressums. Vor einem produktiven Betreiberwechsel rechtlich prüfen und aktualisieren.",
    sections: [
      { id: "anbieter", kicker: "Anbieter", title: "Technische Universität Darmstadt · HIGHEST", text: ["HIGHEST – Innovations- und Gründungszentrum", "Harald Holzer, Geschäftsführer", "Dezernat Forschung und Transfer · Referat Forschungstransfer", "Karolinenplatz 5 · 64283 Darmstadt", "Telefon: 06151 16-57257 · E-Mail: pr@highest.tu-darmstadt.de"] },
      { id: "vertretung", kicker: "Vertretung & Aufsicht", title: "Rechtliche Vertretung.", text: ["Gesetzliche Vertreterin: Präsidentin der Technischen Universität Darmstadt, Prof. Dr. Tanja Brühl.", "Rechtsaufsicht: Hessisches Ministerium für Wissenschaft und Kunst, Rheinstr. 23–25, 65185 Wiesbaden.", "Verantwortlich für den Inhalt: Harald Holzer, Geschäftsführer HIGHEST."] },
      { id: "hinweis", kicker: "Vor Livegang", title: "Rechtstext redaktionell und juristisch freigeben.", text: ["Dieser Prototyp übernimmt die Kerndaten, nicht den vollständigen bisherigen Haftungs- und Urheberrechtstext. Für den produktiven Einsatz müssen Anbieterkennzeichnung, technische Umsetzung, Bildnachweise und Rechtsgrundlage zum tatsächlichen Betreiber- und Hostingmodell passen."] }
    ],
    cta: ["Inhaltliche Rückfrage?", "Wende dich an die HIGHEST-Kommunikation.", "Kontakt", "mailto:pr@highest.tu-darmstadt.de"]
  },
  {
    file: "datenschutz.html",
    group: "Rechtliches",
    eyebrow: "Datenschutz",
    title: "Datenschutzhinweis für den statischen Prototyp.",
    lead: "Diese lokale Version setzt keine Analyse-, Marketing- oder Tracking-Cookies und verarbeitet selbst keine Formulardaten.",
    sections: [
      { id: "lokal", kicker: "Aktueller Prototyp", title: "Keine eingebetteten Tracker oder Formulare.", text: ["Die Seiten bestehen aus statischem HTML, CSS und JavaScript. Kontaktlinks öffnen das lokale E-Mail-Programm; eine Übertragung an HIGHEST erfolgt erst, wenn Nutzer:innen dort eine Nachricht versenden.", "Beim Aufruf externer Links gelten die Datenschutzbestimmungen des jeweiligen Zielanbieters."] },
      { id: "hosting", kicker: "Beim Veröffentlichen", title: "Hosting erzeugt eigene Datenflüsse.", text: ["Ein Webhoster verarbeitet technisch notwendige Zugriffsdaten wie IP-Adresse, Zeitpunkt, angeforderte Datei und Browserinformationen. Welche Angaben erforderlich sind, hängt vom später gewählten Hosting, Log-Konzept und möglichen Zusatzdiensten ab."] },
      { id: "livegang", kicker: "Vor Livegang", title: "Datenschutzerklärung neu erstellen und freigeben.", bullets: ["tatsächlichen Verantwortlichen und Datenschutzkontakt benennen", "Hosting und Server-Logs dokumentieren", "Formulare, Newsletter, Karten, Videos und externe Einbettungen prüfen", "Consent-Management nur einsetzen, wenn tatsächlich erforderlich", "Aufbewahrung, Rechtsgrundlagen und Betroffenenrechte vollständig abbilden"] }
    ],
    cta: ["Wichtig: kein finaler Rechtstext.", "Die produktive Erklärung muss zum tatsächlichen technischen Betrieb passen.", "Zum Impressum", "impressum.html"]
  }
];

const nav = [
  ["Angebote", "angebote.html"],
  ["Programme", "company-builder.html"],
  ["Für Unternehmen", "fuer-unternehmen.html"],
  ["News", "news.html"],
  ["Über uns", "ueber-uns.html"],
  ["Events", "events.html"]
];

const footerGroups = [
  ["Angebote", [["Beratung", "beratung.html"], ["IP & Transfer", "ip-transfer.html"], ["Förderung", "foerderung.html"], ["Ressourcen", "ressourcen.html"], ["Wissen", "wissen.html"], ["Sichtbarkeit", "sichtbarkeit.html"]]],
  ["Programme", [["Company Builder", "company-builder.html"], ["Female Founders", "female-founders.html"], ["InnovationScouting", "innovation-scouting.html"], ["HIGHEST Experts", "highest-experts.html"], ["FUTURY", "futury.html"]]],
  ["Organisation", [["Für Unternehmen", "fuer-unternehmen.html"], ["Start-ups", "startups.html"], ["Über uns", "ueber-uns.html"], ["Team", "team.html"], ["Netzwerk", "netzwerk.html"], ["Kontakt", "kontakt.html"]]],
  ["Service", [["Events", "events.html"], ["News", "news.html"], ["FAQ", "faq.html"], ["Impressum", "impressum.html"], ["Datenschutz", "datenschutz.html"]]]
];

const attr = (external) => external ? ' target="_blank" rel="noreferrer"' : "";
const linkLabel = (label, external = false) => `${label.replace(/\s*[→↗]\s*$/, "")} ${external ? "↗" : "→"}`;

function renderCards(cards = []) {
  if (!cards.length) return "";
  return `<div class="content-card-grid">${cards.map((card) => {
    const arrow = card.external ? "↗" : "→";
    const body = `<span class="content-card-mark" aria-hidden="true">${card.href ? arrow : "•"}</span><h3>${card.title}</h3><p>${card.text}</p>${card.href ? `<span class="text-link">Mehr erfahren ${arrow}</span>` : ""}`;
    return card.href ? `<a class="content-card" href="${card.href}"${attr(card.external)}>${body}</a>` : `<article class="content-card">${body}</article>`;
  }).join("")}</div>`;
}

function renderSteps(steps = []) {
  if (!steps.length) return "";
  return `<ol class="process-list">${steps.map(([number, title, text]) => `<li><span>${number}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join("")}</ol>`;
}

function renderLinks(links = []) {
  if (!links.length) return "";
  return `<div class="inline-links">${links.map((link) => `<a href="${link.href}"${attr(link.external)}>${linkLabel(link.label, link.external)}</a>`).join("")}</div>`;
}

function renderSection(section, index) {
  return `<section class="content-section" id="${section.id}">
    <div class="section-rail"><span>${String(index + 1).padStart(2, "0")}</span><p>${section.kicker}</p></div>
    <div class="section-content">
      <h2>${section.title}</h2>
      ${(section.text || []).map((p) => `<p>${p}</p>`).join("")}
      ${section.bullets ? `<ul class="check-list">${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      ${renderCards(section.cards)}
      ${renderSteps(section.steps)}
      ${renderLinks(section.links)}
    </div>
  </section>`;
}

function renderHeader(page) {
  return `<div class="alliance-bar">
    <span>Innovations- und Gründungszentrum der TU Darmstadt</span>
    <a href="futury.html" aria-label="HIGHEST ist Teil von Futury"><img src="assets/part-of-futury.svg" alt="Part of Futury – The Future Factory"></a>
  </div>
  <header class="site-header detail-header">
    <a class="brand" href="index.html" aria-label="HIGHEST Startseite"><img src="assets/logo-highest.svg" alt="HIGHEST"></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span><span class="sr-only">Menü öffnen</span></button>
    <nav class="main-nav" id="main-nav" aria-label="Hauptnavigation">${nav.map(([label, href]) => `<a${page.group === label || (label === "Programme" && page.group === "Programme") ? ' class="nav-primary"' : ""} href="${href}">${label}</a>`).join("")}</nav>
    <div class="header-actions"><span class="prototype-badge">Prototyp</span><a class="contact-link" href="kontakt.html">Kontakt <span aria-hidden="true">→</span></a></div>
  </header>`;
}

function renderFooter() {
  return `<footer class="site-footer complete-footer">
    <div class="footer-main"><img src="assets/logo-highest.svg" alt="HIGHEST"><p>Innovations- und Gründungszentrum der Technischen Universität Darmstadt</p><p>Karolinenplatz 5 · 64283 Darmstadt<br>06151 16-57257</p></div>
    ${footerGroups.map(([title, links]) => `<div><h2>${title}</h2>${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>`).join("")}
    <div class="footer-tu"><img src="assets/logo-tu-darmstadt.svg" alt="Technische Universität Darmstadt"><span>Inhaltlicher Prototyp · Stand September 2026</span></div>
  </footer>`;
}

function renderPage(page) {
  const description = page.lead.replace(/<[^>]+>/g, "");
  const sectionNav = page.sections.map((section, index) => `<a href="#${section.id}"><span>${String(index + 1).padStart(2, "0")}</span>${section.kicker}</a>`).join("");
  const facts = page.facts?.length ? `<div class="page-facts">${page.facts.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>` : "";
  const alert = page.alert ? `<aside class="editorial-alert"><strong>Hinweis</strong><p>${page.alert}</p></aside>` : "";
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description.replaceAll('"', "&quot;")}">
  <meta name="theme-color" content="#0e0e59">
  <title>${page.title} – HIGHEST</title>
  <link rel="icon" type="image/svg+xml" href="assets/logo-highest.svg">
  <link rel="stylesheet" href="styles.css">
  <script src="site.js" defer></script>
</head>
<body class="detail-page">
  <a class="skip-link" href="#inhalt">Direkt zum Inhalt</a>
  ${renderHeader(page)}
  <main id="inhalt">
    <section class="page-hero">
      <div class="page-hero-copy">
        <nav class="breadcrumb" aria-label="Brotkrumen"><a href="index.html">HIGHEST</a><span>→</span><span>${page.group}</span></nav>
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p class="page-lead">${page.lead}</p>
        <div class="hero-actions"><a class="primary-action signal" href="kontakt.html">Kontakt aufnehmen →</a><a class="hero-text-link" href="index.html#wegweiser">Wegweiser starten</a></div>
      </div>
      <aside class="page-wayfinder"><p>Auf dieser Seite</p>${sectionNav}</aside>
    </section>
    ${facts}
    ${alert}
    <div class="content-stack">${page.sections.map(renderSection).join("")}</div>
    <section class="closing-action detail-closing"><div><p class="eyebrow">Nächster Schritt</p><h2>${page.cta[0]}</h2></div><p>${page.cta[1]}</p><a class="primary-action light" href="${page.cta[3]}"${attr(page.cta[3].startsWith("http"))}>${linkLabel(page.cta[2], page.cta[3].startsWith("http"))}</a></section>
  </main>
  ${renderFooter()}
</body>
</html>`;
}

await Promise.all(pages.map((page) => writeFile(resolve(root, page.file), renderPage(page), "utf8")));
console.log(`Generated ${pages.length} pages.`);
