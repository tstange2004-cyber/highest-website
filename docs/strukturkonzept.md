# Strukturkonzept: HIGHEST als zentraler Einstieg

Stand: 28. September 2026

## 1. Leitentscheidung

Die Navigation folgt nicht den internen Organisationseinheiten, sondern den Aufgaben der Nutzer:innen. „Beratung“, „IP“, „Wissensvermittlung“ und „Ressourcen“ bleiben als Themen auffindbar, bilden aber nicht mehr allein die Hauptstruktur.

## 2. Im Prototyp umgesetzte Hauptnavigation

1. Wegweiser (nur Startseite, primärer Einstieg)
2. Angebote
3. Programme
4. Für Unternehmen
5. News
6. Über uns
7. Events
8. Kontakt als hervorgehobene Aktion

Der Wegweiser ist visuell und funktional der wichtigste Einstieg. Auf Inhaltsseiten übernimmt eine kurze Hauptnavigation die Orientierung; die vollständige Seitenlandschaft ist zusätzlich im Footer erreichbar.

## 3. Empfohlene Sitemap

```text
Startseite / Wegweiser
├── Angebotsnavigator
│   ├── Schritt 1: Ausgangslage
│   ├── Schritt 2: aktueller Bedarf
│   ├── drei priorisierte Empfehlungen
│   ├── direkter Themeneinstieg
│   └── Angebotsdetail
├── Angebote
│   ├── Beratung
│   ├── Förderung
│   ├── IP & Transfer
│   ├── Patente
│   ├── Ressourcen
│   ├── Wissen
│   ├── Sichtbarkeit
│   └── Female Founders
├── Programme
│   ├── HIGHEST & FUTURY Company Builder
│   ├── InnovationScouting
│   ├── HIGHEST Experts
│   └── FUTURY – The Future Factory
├── Für Unternehmen
│   ├── HIGHEST Club
│   ├── Start-up Partner
│   ├── Kooperationen
│   ├── Spin-off Label
│   └── Start-ups
├── News
├── Events
│   ├── TU-Ideenwettbewerb
│   ├── INNODAY26
│   ├── foundersXchange
│   └── Ringvorlesung
├── Über HIGHEST
│   ├── Auftrag und Positionierung
│   ├── Zusammenspiel mit TU Darmstadt und xchange
│   ├── Team
│   ├── Daten und Fakten
│   └── Netzwerk
└── Kontakt & Service
    ├── Kontakt
    ├── FAQ
    ├── Impressum
    └── Datenschutz
```

## 4. Aufbau der Startseite

### A. Markendach und Hauptnavigation

HIGHEST steht als Hauptmarke im Vordergrund. Die Zugehörigkeit zur TU Darmstadt und zu Futury bleibt sichtbar, konkurriert aber nicht mit dem zentralen Einstieg.

### B. Geführter Wegweiser als erste Ansicht

Die erste Ansicht verbindet das kurze Nutzenversprechen direkt mit der eigentlichen Aufgabe. Nutzer:innen können ohne vorheriges Scrollen mit dem Wegweiser beginnen.

### C. Zwei Entscheidungen statt paralleler Filter

Schritt 1 fragt nach der Ausgangslage:

- Orientierung
- Idee
- Forschungsergebnis
- bereits gegründetes Team

Schritt 2 zeigt nur die für diese Ausgangslage relevanten Bedarfe. Danach erscheinen genau drei priorisierte Angebote.

### D. Direkter Themeneinstieg

Erfahrene Nutzer:innen können den Wegweiser überspringen und direkt eines von fünf Themen wählen:

- Orientierung & Beratung
- IP & Transfer
- Förderung & Finanzierung
- Wissen & Räume
- Netzwerk & Wachstum

Die kompakte Ergebnisliste zeigt pro Angebot:

- Anbieter
- passende Phase
- konkreten Nutzen
- Themen
- Detailaktion

### E. Gemeinsame Nutzerreise

Ein kurzer Abschnitt erklärt das Zusammenspiel zwischen InnovationScouting, HIGHEST und Partnern. Die organisatorische Zuordnung bleibt korrekt, aber Nutzende werden nicht zum Verständnis der Struktur gezwungen.

### F. Wissen, Räume und Netzwerk

Quereinstieg für Menschen, die kein Beratungsangebot suchen, sondern lernen, ausprobieren oder Kontakte aufbauen möchten.

### G. Kontakt

Ein wiederkehrender, eindeutig benannter Einstieg zur Orientierungsberatung ersetzt mehrere ähnlich wirkende Kontaktwege.

## 5. Angebotsdetail: Inhaltsmodell

Jede Angebotsseite verwendet dieselbe Grundstruktur:

1. Angebotstitel
2. Ein-Satz-Nutzen
3. Anbieter und organisatorische Einordnung
4. Passend für Zielgruppen und Phasen
5. Unterstützung und Leistungsumfang
6. Voraussetzungen oder wichtige Hinweise
7. Ablauf
8. primäre Aktion
9. verwandte Angebote
10. verantwortliche Quelle und Aktualisierungsdatum

Der Startseiten-Dialog dient weiterhin als schnelle Vorschau. Vertiefende Inhalte liegen jetzt auf eigenen, verlinkbaren HTML-Seiten. Alle bisherigen Rückverweise auf `highest-darmstadt.de` wurden innerhalb des Prototyps durch lokale Seiten ersetzt; externe Programm- und Partnerangebote bleiben klar als externe Ziele gekennzeichnet.

## 6. Nutzerflüsse

### Forschende Person mit möglicher Erfindung

Start → „Ich habe ein Forschungsergebnis“ → „Ergebnis vor Veröffentlichung schützen“ → IP- und Erfindungsberatung → offizieller Kontakt bzw. Erfindungsmeldung.

### Student:in ohne konkrete Idee

Start → „Ich orientiere mich erst“ → „Entrepreneurship kennenlernen“ → Ringvorlesung / RMU Startup Academy / Orientierungsberatung.

### Wissenschaftliche:r Mitarbeiter:in mit Proof of Concept

Start → „Ich habe ein Forschungsergebnis“ → „Validierung finanzieren“ → Fördermittelberatung / Company Builder / EXIST → Beratung oder Programmpassung klären.

### Bereits gegründetes Team

Start → „Ich habe bereits gegründet“ → „Unternehmensentwicklung strukturieren“ → Business Development / HIGHEST Experts → Gespräch oder Expert:innenkontakt.

## 7. Technische Empfehlung für die nächste Ausbaustufe

- Die 34 statischen Inhaltsseiten in ein CMS mit wiederverwendbaren Seitentypen überführen.
- Angebote als strukturierte Datensätze im CMS pflegen, nicht als wiederholte Freitexte.
- Filterwerte als kontrollierte Taxonomie führen: Phase, Zielgruppe, Thema, Anbieter.
- Jede Ergebnisansicht über eine stabile URL teilbar machen.
- Events und Fristen aus zentral gepflegten Quellen ausspielen.
- Formulare erst nach Datenschutz-, Zuständigkeits- und Routingkonzept integrieren.
- Deutsch als redaktionelle Primärsprache etablieren; Englisch erst nach Freigabe der deutschen Inhalte ableiten.
- Barrierefreiheit nach BITV/WCAG in Konzeption, Umsetzung und Redaktion prüfen.

## 8. Erfolgskriterien

- Nutzer:innen erreichen innerhalb von zwei Entscheidungen drei priorisierte Angebote.
- „Unsicher“-Nutzer:innen erreichen ohne Sackgasse die Orientierungsberatung.
- Angebote sind unabhängig von Organisationswissen auffindbar.
- Jede Seite besitzt eine klare primäre Aktion.
- Verantwortlichkeit und fachliche Quelle sind intern nachvollziehbar.
- Doppelte oder widersprüchliche Angebotsbeschreibungen zwischen HIGHEST und TU-Seiten werden reduziert.
