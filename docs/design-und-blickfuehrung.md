# Design- und Blickführungskonzept

Stand: 28. September 2026  
Status: strategische Designgrundlage für den Prototyp

## 1. Ausgangsproblem

Die erste Version zeigte zu viele gleich gewichtete Elemente gleichzeitig:

- große Markenerzählung vor der eigentlichen Aufgabe
- sechs Phasenentscheidungen auf einmal
- Zielgruppen- und Themenfilter parallel zur Ergebnisliste
- bis zu 14 visuell ähnliche Angebotskarten
- mehrere konkurrierende Kontakt- und Informationsaktionen

Damit mussten Nutzer:innen erst das Interface und die Angebotslogik verstehen, bevor sie Unterstützung finden konnten.

## 2. Neue strategische Blickführung

Die Seite besitzt jetzt drei klar gestufte Ebenen:

1. **Primär: geführter Wegweiser.** Eine Frage pro Schritt. Zuerst die Ausgangslage, dann der konkrete Bedarf, danach drei priorisierte Empfehlungen.
2. **Sekundär: direkter Themeneinstieg.** Erfahrene oder zielgerichtete Nutzer:innen können den Wegweiser überspringen und direkt ein vertrautes Thema wählen.
3. **Tertiär: Struktur und vollständiger Bestand.** Weitere Angebote, organisatorisches Zusammenspiel und Hintergrundinformationen erscheinen erst weiter unten oder auf ausdrückliche Anforderung.

Die erste Ansicht ist deshalb kein klassischer Marketing-Hero mehr. Sie ist eine Arbeitsoberfläche: Frage, Auswahl und Fortschritt sind ohne Scrollen sichtbar.

## 3. Evidenzbasierte Gestaltungsentscheidungen

### Progressive Disclosure

Nur die Optionen des aktuellen Schritts werden gezeigt. Sekundäre und selten benötigte Inhalte erscheinen erst bei Bedarf. Dies verbessert laut Nielsen Norman Group Verständlichkeit, Effizienz und Fehlerrate: [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/).

Die neuere NN/g-Empfehlung zur Reduktion kognitiver Last bestätigt, dass progressive Offenlegung nur das zeigt, was im jeweiligen Schritt benötigt wird: [Four Principles to Reduce Cognitive Load](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/).

### Eine Entscheidung pro Schritt

Der Wegweiser trennt Ausgangslage und Bedarf. Das folgt dem GOV.UK-Muster „one thing per page“, das besonders bei unbekannten Prozessen und auf mobilen Geräten Orientierung verbessert: [Structuring forms](https://www.gov.uk/service-manual/design/form-structure).

### Starke Informationsfährte

Jede Auswahl beschreibt nicht nur eine interne Kategorie, sondern das erwartbare Ziel: etwa „Ergebnis vor Veröffentlichung schützen“ statt nur „IP“. Klare Linktexte und Kontext verbessern die Einschätzung, welcher Weg zum Ziel führt: [Information Scent](https://www.nngroup.com/articles/information-scent/).

### Klare Regionen und Hierarchie

Starke Hintergrundwechsel, Weißraum, klare Überschriften und begrenzte Inhaltsgruppen machen Zweck und Zusammenhang jeder Region erkennbar. Dies entspricht dem W3C-Muster für verständliche Seitenstrukturen: [Use a Clear and Understandable Page Structure](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o2p03-page-structure/).

### Große, eindeutige Interaktionsflächen

Die zentralen Auswahlfelder sind deutlich größer als die Mindestanforderung von 24 × 24 CSS-Pixeln und räumlich klar getrennt. Grundlage: [WCAG 2.2 – Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).

## 4. Visuelle These

**„Editoriale Klarheit trifft wissenschaftliche Präzision.“**

- Offizielles HIGHEST-Dunkelblau `#0E0E59` setzt die strategischen Anker.
- Aktionsblau `#3232AF` markiert Navigation, Auswahl und vertiefende Aktionen.
- Signalgrün `#5CEB31` wird ausschließlich für Fokus, Priorität und nächste Schritte eingesetzt.
- Hellfläche `#EAEAF4`, Tiefblau `#07072D` und Textschwarz `#19191A` schaffen klar abgegrenzte Ebenen.
- HIGHEST-Typografie wird mit lokal gebündeltem Cooper Hewitt umgesetzt; Barlow Condensed dient sparsam für Labels und Navigationshilfen.
- Große Typografie stellt die zentrale Nutzerfrage in den Vordergrund.
- Das Foto bleibt als glaubwürdiger Forschungsbezug erhalten, wird aber dem Wegweiser visuell untergeordnet.
- Kacheln sind nicht dekorativ, sondern bilden echte Entscheidungen oder klar abgegrenzte Themen.
- Rechtecke, harte Kanten und präzise Linien führen die bestehende HIGHEST-Formsprache fort.

Die Farbwerte und Schriftfamilien wurden am 28. September 2026 aus dem öffentlich ausgelieferten HIGHEST-Stylesheet verifiziert. So entsteht keine frei interpretierte „Start-up-Optik“, sondern eine geschärfte Fortführung der tatsächlichen Marke.

## 5. Interaktionsmodell

### Geführter Weg

```text
Ausgangslage wählen
        ↓
aktuellen Bedarf wählen
        ↓
3 priorisierte Einstiege
        ↓
Angebotsdetail, lokale Vertiefungsseite und Kontakt
```

### Direkter Weg

```text
Thema wählen
        ↓
kompakte Angebotsgruppe
        ↓
Angebotsdetail, lokale Vertiefungsseite und Kontakt
```

Beide Wege führen zum selben gepflegten Angebotsbestand. Damit entstehen keine konkurrierenden Inhaltswelten.

## 6. Moderne Umsetzung ohne Design-Gimmicks

- dynamischer Zwei-Schritt-Wegweiser ohne Seitenwechsel
- progressive View-Transition, sofern der Browser sie unterstützt
- teilbare Themenzustände über URL-Parameter
- semantische Dialoge für Angebotsdetails
- responsive Arbeitsoberfläche statt nachträglich gestapelter Desktopseite
- reduzierte Bewegung bei entsprechender Betriebssystemeinstellung
- `content-visibility` für nachgelagerte Inhaltsbereiche
- klar sichtbare Tastaturfokusse und große Touch-Ziele
- eigenständige, tief verlinkbare Inhaltsseiten mit einheitlichem Seiten-Wegweiser
- sichtbare Hinweise für zeitabhängige oder vor Veröffentlichung zu prüfende Inhalte
- externe Partnerziele mit eigener Kennzeichnung; interne Inhalte bleiben innerhalb des HIGHEST-Auftritts

## 7. Zu validierende Hypothesen

Der Prototyp sollte mit mindestens fünf Personen je primärer Zielgruppe getestet werden. Entscheidende Fragen:

1. Verstehen Nutzer:innen sofort, dass der Wegweiser der Haupteinstieg ist?
2. Können sie ihre Situation ohne Kenntnis interner TU-Strukturen auswählen?
3. Wirkt die erste Empfehlung nachvollziehbar und vertrauenswürdig?
4. Finden erfahrene Nutzer:innen den direkten Themeneinstieg schneller?
5. Werden InnovationScouting und HIGHEST als zusammenhängende Nutzerreise, aber organisatorisch korrekt verstanden?

Erfolgskriterium: Eine passende Angebotsdetailansicht wird ohne Hilfestellung in höchstens zwei Entscheidungen erreicht.
