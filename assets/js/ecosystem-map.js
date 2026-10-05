/**
 * HIGHEST Ökosystem – eigenständige Web-Komponente ohne Abhängigkeiten.
 *
 * Einbindung:
 * <highest-oekosystem></highest-oekosystem>
 * <script src="assets/js/ecosystem-map.js"></script>
 *
 * Partnerstand: 28.09.2026
 * Quellen: highest-darmstadt.de/de/unternehmen/kooperationen/
 *          tu-darmstadt.de/xchange/kooperation/kooperationspartner/
 *          tu-darmstadt.de/universitaet/international/unite/
 */
(() => {
  const elementName = "highest-oekosystem";
  if (customElements.get(elementName)) return;

  const partners = [
    { id: "highest", name: "HIGHEST · TU Darmstadt", url: "index.html", x: 50, y: 50, mx: 50, my: 15, core: true, local: true, signalDelay: 1450 },
    { id: "futury", name: "FUTURY – The Future Factory", url: "https://www.futury.eu/", x: 14, y: 17, mx: 24, my: 27 },
    { id: "techquartier", name: "TechQuartier", url: "https://techquartier.com/", x: 36, y: 14, mx: 76, my: 27 },
    { id: "athene", name: "Digital Hub ATHENE Cybersecurity", url: "https://www.athene-center.de/digitalhub", x: 65, y: 14, mx: 24, my: 39 },
    { id: "hub31", name: "HUB31", url: "https://hub31.de/", x: 86, y: 24, mx: 76, my: 39 },
    { id: "cesah", name: "cesah", url: "https://www.cesah.de/", x: 89, y: 51, mx: 24, my: 51 },
    { id: "hessian-ai", name: "hessian.AI", url: "https://hessian.ai/", x: 82, y: 77, mx: 76, my: 51, signalDelay: 2650 },
    { id: "ryon", name: "ryon GreenTech Accelerator", url: "https://www.ryon.de/", x: 62, y: 84, mx: 24, my: 63, signalDelay: 2050 },
    { id: "yubizz", name: "YUBIZZ.DE", url: "https://www.yubizz.de/", x: 40, y: 83, mx: 76, my: 63, signalDelay: 1750 },
    { id: "hessen-ideen", name: "Hessen Ideen", url: "https://hessen-ideen.de/", x: 20, y: 78, mx: 24, my: 75 },
    { id: "sozialinnovator", name: "Sozialinnovator Hessen", url: "https://sozialinnovator-hessen.de/", x: 10, y: 55, mx: 76, my: 75 },
    { id: "business-angels", name: "Business Angels FrankfurtRheinMain", url: "https://www.ba-frm.de/", x: 10, y: 34, mx: 24, my: 87 },
    { id: "lab3", name: "LAB³", url: "https://www.lab3.org/", x: 35, y: 34, mx: 76, my: 87, signalDelay: 2350 },
    { id: "unite", name: "Unite!", url: "https://www.unite-university.eu/", x: 69, y: 38, mx: 50, my: 97 },
    { id: "join-network", name: "Teil des Netzwerks werden", url: "#wege", x: 50, y: 6, mx: 50, my: 4, join: true }
  ];

  // Die Kanten dienen bewusst nur als Netzwerkmetapher und bilden keine
  // formalen Zuständigkeiten oder vertraglichen Beziehungen ab.
  const connections = [
    ["highest", "futury"],
    ["highest", "techquartier"],
    ["highest", "athene"],
    ["highest", "hub31"],
    ["highest", "cesah"],
    ["highest", "hessian-ai"],
    ["highest", "ryon"],
    ["highest", "yubizz"],
    ["highest", "hessen-ideen"],
    ["highest", "sozialinnovator"],
    ["highest", "business-angels"],
    ["highest", "lab3"],
    ["highest", "unite"],
    ["futury", "techquartier"],
    ["futury", "business-angels"],
    ["athene", "hessian-ai"],
    ["hub31", "lab3"],
    ["cesah", "unite"],
    ["ryon", "hessen-ideen"],
    ["yubizz", "sozialinnovator"],
    ["join-network", "highest", 850],
    ["join-network", "yubizz", 1150],
    ["join-network", "ryon", 1450],
    ["join-network", "lab3", 1750],
    ["join-network", "hessian-ai", 2050]
  ];

  class HighestEcosystem extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;

      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
        <style>
          :host {
            --highest-navy: #0e0e59;
            --highest-navy-deep: #07072d;
            --highest-blue: #3232af;
            --highest-green: #5ceb31;
            --highest-soft: #eaeaf4;
            --highest-line: #d5d5e4;
            --highest-ink: #19191a;
            --highest-muted: #5d5d6b;
            display: block;
            width: 100%;
            color: var(--highest-ink);
            font-family: "Cooper Hewitt", Helvetica, Arial, sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          .ecosystem {
            width: min(100%, 1440px);
            margin: 0 auto;
            padding: clamp(3.5rem, 7vw, 7rem) clamp(1.25rem, 4.6vw, 4.75rem);
            background: #fff;
            scroll-margin-top: 2rem;
          }

          .heading {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(17rem, 0.6fr);
            gap: 2rem;
            align-items: end;
            margin-bottom: 2.5rem;
          }

          .eyebrow {
            grid-column: 1 / -1;
            margin: 0 0 -1rem;
            color: var(--highest-blue);
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
          }

          h2 {
            max-width: 13ch;
            margin: 0;
            color: var(--highest-navy);
            font-size: clamp(2.4rem, 5vw, 5rem);
            font-weight: 900;
            line-height: 0.98;
            letter-spacing: -0.035em;
          }

          .intro {
            margin: 0;
            color: var(--highest-muted);
            font-size: clamp(1rem, 1.5vw, 1.15rem);
            line-height: 1.5;
          }

          .network {
            position: relative;
            min-height: clamp(43rem, 65vw, 58rem);
            overflow: visible;
            isolation: isolate;
            background: #fff;
            border-top: 1px solid var(--highest-line);
            border-bottom: 1px solid var(--highest-line);
          }

          .network::before {
            content: "";
            position: absolute;
            z-index: 0;
            inset: 16% 20%;
            background: radial-gradient(circle, rgba(92, 235, 49, 0.16), rgba(50, 50, 175, 0.04) 48%, transparent 72%);
            filter: blur(52px);
            pointer-events: none;
          }

          .network-field {
            --sway-x: 0px;
            --sway-y: 0px;
            --sway-rotation: 0deg;
            position: absolute;
            z-index: 1;
            inset: 0;
            transform: translate3d(var(--sway-x), var(--sway-y), 0) rotate(var(--sway-rotation));
            transform-origin: center;
            transition: transform 520ms cubic-bezier(0.2, 0.8, 0.2, 1);
            will-change: transform;
          }

          .links {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .links line {
            stroke: var(--highest-blue);
            stroke-width: 1.25;
            stroke-linecap: round;
            opacity: 0.22;
          }

          .links line:not(.join-link) {
            animation: network-impact 1500ms 3.25s ease-in-out 1;
          }

          .node {
            --float-x: 0px;
            --float-y: 0px;
            position: absolute;
            z-index: 2;
            left: calc(var(--node-x) * 1%);
            top: calc(var(--node-y) * 1%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 44px;
            min-height: 44px;
            padding: 0;
            color: var(--highest-navy);
            background: transparent;
            border: 0;
            font: inherit;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transform: translate(calc(-50% + var(--float-x)), calc(-0.475rem + var(--float-y)));
          }

          .dot {
            flex: 0 0 auto;
            width: 0.95rem;
            height: 0.95rem;
            background: #fff;
            border: 4px solid var(--highest-blue);
            border-radius: 50%;
            box-shadow: 0 0 0 6px rgba(50, 50, 175, 0.1);
            transition: border-color 160ms ease, box-shadow 160ms ease;
          }

          .node.core .dot {
            background: var(--highest-green);
            border-color: var(--highest-navy);
            box-shadow: 0 0 0 9px rgba(92, 235, 49, 0.22);
          }

          .node.join {
            z-index: 4;
            opacity: 0;
            animation: join-node-in 820ms 350ms cubic-bezier(0.18, 0.9, 0.25, 1.25) forwards;
          }

          .node.join .dot {
            width: 1.3rem;
            height: 1.3rem;
            background: var(--highest-green);
            border-color: var(--highest-navy);
            box-shadow: 0 0 0 0 rgba(92, 235, 49, 0.55);
            animation: join-node-pulse 1100ms 1.05s ease-out 4;
          }

          .node.join .name {
            max-width: 15rem;
            padding: 0.65rem 0.85rem;
            color: #fff;
            background: var(--highest-navy);
            box-shadow: 0 0.85rem 2rem rgba(7, 7, 45, 0.2);
            font-size: 0.94rem;
            opacity: 0;
            animation: join-label-in 520ms 1.65s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }

          .node.join:hover .name,
          .node.join:focus-visible .name {
            color: #fff;
            background: var(--highest-blue);
          }

          .links line.join-link {
            stroke: var(--highest-green);
            stroke-width: 3;
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            opacity: 0;
            animation: join-link-draw 900ms var(--signal-delay, 900ms) ease-out forwards;
          }

          .node.signal-target .dot {
            animation: signal-received 1050ms var(--signal-delay) ease-out 2;
          }

          .name {
            position: relative;
            z-index: 3;
            display: grid;
            place-items: center;
            width: max-content;
            max-width: 11rem;
            margin-top: 0.7rem;
            padding: 0.28rem 0.42rem;
            color: var(--highest-navy);
            background: rgba(255, 255, 255, 0.9);
            font-size: 0.78rem;
            font-weight: 700;
            line-height: 1.2;
            transition: color 160ms ease;
          }

          .name > span {
            grid-area: 1 / 1;
            transition: opacity 160ms ease, visibility 160ms ease;
          }

          .link-label {
            color: var(--highest-blue);
            opacity: 0;
            visibility: hidden;
          }

          .node:hover .partner-name,
          .node:focus-visible .partner-name {
            opacity: 0;
            visibility: hidden;
          }

          .node:hover .link-label,
          .node:focus-visible .link-label {
            opacity: 1;
            visibility: visible;
          }

          .node:hover .name,
          .node:focus-visible .name {
            color: var(--highest-blue);
          }

          .node:hover .dot,
          .node:focus-visible .dot {
            border-color: var(--highest-green);
            box-shadow: 0 0 0 8px rgba(92, 235, 49, 0.18);
          }

          .node:focus-visible {
            outline: 2px solid var(--highest-blue);
            outline-offset: 0.45rem;
            border-radius: 0.25rem;
          }

          .note {
            display: flex;
            gap: 0.65rem;
            align-items: center;
            margin: 1rem 0 0;
            color: var(--highest-muted);
            font-size: 0.76rem;
            line-height: 1.4;
          }

          .note::before {
            content: "";
            flex: 0 0 auto;
            width: 1.7rem;
            height: 2px;
            background: var(--highest-blue);
            opacity: 0.35;
          }

          @keyframes join-link-draw {
            from {
              stroke-dashoffset: 1;
              opacity: 0;
            }

            to {
              stroke-dashoffset: 0;
              opacity: 0.85;
            }
          }

          @keyframes join-node-in {
            from {
              opacity: 0;
              translate: 0 1.5rem;
              scale: 0.12;
              filter: blur(0.25rem);
            }

            62% {
              opacity: 1;
              translate: 0 0;
              scale: 1.85;
              filter: blur(0);
            }

            to {
              opacity: 1;
              translate: 0 0;
              scale: 1;
              filter: blur(0);
            }
          }

          @keyframes join-label-in {
            from {
              opacity: 0;
              translate: 0 0.8rem;
            }

            to {
              opacity: 1;
              translate: 0 0;
            }
          }

          @keyframes join-node-pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(92, 235, 49, 0.5);
            }

            100% {
              box-shadow: 0 0 0 2.1rem rgba(92, 235, 49, 0);
            }
          }

          @keyframes signal-received {
            0% {
              border-color: var(--highest-blue);
              box-shadow: 0 0 0 0 rgba(92, 235, 49, 0.6);
              scale: 1;
            }

            45% {
              border-color: var(--highest-green);
              box-shadow: 0 0 0 1.15rem rgba(92, 235, 49, 0);
              scale: 1.55;
            }

            100% {
              border-color: var(--highest-blue);
              box-shadow: 0 0 0 0 rgba(92, 235, 49, 0);
              scale: 1;
            }
          }

          @keyframes network-impact {
            0%, 100% {
              stroke: var(--highest-blue);
              stroke-width: 1.25;
              opacity: 0.22;
            }

            48% {
              stroke: var(--highest-green);
              stroke-width: 2.4;
              opacity: 0.78;
            }
          }

          @media (max-width: 700px) {
            .ecosystem {
              padding: 3.5rem 1rem;
            }

            .heading {
              grid-template-columns: 1fr;
              gap: 1rem;
              margin-bottom: 2rem;
            }

            .eyebrow {
              margin-bottom: 0;
            }

            h2 {
              font-size: clamp(2.35rem, 13vw, 3.8rem);
            }

            .network {
              min-height: 80rem;
            }

            .node {
              left: calc(var(--node-mobile-x) * 1%);
              top: calc(var(--node-mobile-y) * 1%);
            }

            .name {
              max-width: 8.2rem;
              font-size: 0.72rem;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .network-field,
            .name,
            .dot {
              transition: none;
            }

            .network-field {
              transform: none;
            }

            .node.join,
            .node.join .dot,
            .node.join .name,
            .node.signal-target .dot,
            .links line:not(.join-link),
            .links line.join-link {
              animation: none;
            }

            .node.join {
              opacity: 1;
            }

            .node.join .name {
              opacity: 1;
            }

            .links line.join-link {
              stroke-dashoffset: 0;
              opacity: 0.85;
            }
          }
        </style>

        <section class="ecosystem" aria-labelledby="highest-ecosystem-title">
          <header class="heading">
            <h2 id="highest-ecosystem-title">Ein Netzwerk, das Wissen mit Wirkung verbindet.</h2>
            <p class="intro">Entdecke die Partner im Netzwerk – oder werde selbst Teil davon.</p>
          </header>

          <div class="network" role="group" aria-label="Partner im Innovationsökosystem der TU Darmstadt">
            <div class="network-field">
              <svg class="links" aria-hidden="true"></svg>
              ${partners.map((partner) => `
                <a
                  class="node${partner.core ? " core" : ""}${partner.join ? " join" : ""}${partner.signalDelay ? " signal-target" : ""}"
                  data-node-id="${partner.id}"
                  href="${partner.url}"
                  ${partner.join || partner.local ? "" : 'target="_blank" rel="noopener noreferrer"'}
                  aria-label="${partner.join ? partner.name + ": zu den Partnerschaftsmöglichkeiten" : partner.local ? partner.name + ": zur Startseite" : partner.name + ": Website öffnen (neuer Tab)"}"
                  style="--node-x:${partner.x};--node-y:${partner.y};--node-mobile-x:${partner.mx};--node-mobile-y:${partner.my};--signal-delay:${partner.signalDelay || 0}ms"
                >
                  <span class="dot" aria-hidden="true"></span>
                  <span class="name" aria-hidden="true">
                    <span class="partner-name">${partner.name}</span>
                    <span class="link-label">${partner.join ? "Möglichkeiten ansehen ↓" : partner.local ? "Zur Startseite →" : "Website öffnen ↗"}</span>
                  </span>
                </a>
              `).join("")}
            </div>
          </div>

          <p class="note">Die Linien visualisieren Austausch und Vernetzung, keine formale Organisationsstruktur. Externe Angebote werden direkt von den jeweiligen Partnern gepflegt.</p>
        </section>
      `;

      this.network = root.querySelector(".network");
      this.field = root.querySelector(".network-field");
      this.lines = root.querySelector(".links");
      this.nodes = [...root.querySelectorAll(".node")];
      this.joinLink = root.querySelector(".node.join");
      this.nodeOffsets = new Map(partners.map((partner) => [partner.id, { x: 0, y: 0 }]));
      this.isHovering = false;

      this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.handlePointerEnter = () => this.beginMotion();
      this.handlePointerMove = (event) => this.swayToward(event);
      this.handlePointerLeave = () => this.endMotion();
      this.handleJoinClick = (event) => {
        const target = document.querySelector("#wege");
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({
          behavior: this.reducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      };

      if (!this.reducedMotion.matches) {
        this.network.addEventListener("pointerenter", this.handlePointerEnter);
        this.network.addEventListener("pointermove", this.handlePointerMove);
        this.network.addEventListener("pointerleave", this.handlePointerLeave);
      }

      this.joinLink?.addEventListener("click", this.handleJoinClick);

      this.resizeObserver = new ResizeObserver(() => this.drawConnections());
      this.resizeObserver.observe(this.network);
      requestAnimationFrame(() => this.drawConnections());

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => this.drawConnections());
      }
    }

    disconnectedCallback() {
      this.resizeObserver?.disconnect();
      this.network?.removeEventListener("pointerenter", this.handlePointerEnter);
      this.network?.removeEventListener("pointermove", this.handlePointerMove);
      this.network?.removeEventListener("pointerleave", this.handlePointerLeave);
      this.joinLink?.removeEventListener("click", this.handleJoinClick);
      if (this.pointerFrame) cancelAnimationFrame(this.pointerFrame);
      if (this.motionFrame) cancelAnimationFrame(this.motionFrame);
    }

    beginMotion() {
      this.isHovering = true;
      if (!this.motionFrame) {
        this.motionFrame = requestAnimationFrame((time) => this.animateNetwork(time));
      }
    }

    endMotion() {
      this.isHovering = false;
      this.resetSway();
      if (!this.motionFrame) {
        this.motionFrame = requestAnimationFrame((time) => this.animateNetwork(time));
      }
    }

    animateNetwork(time) {
      let remainingMotion = 0;

      partners.forEach((partner, index) => {
        const offset = this.nodeOffsets.get(partner.id);
        const phase = index * 1.47;
        const amplitude = partner.core || partner.join ? 2 : 3.4 + (index % 3) * 0.8;
        const targetX = this.isHovering ? Math.sin(time * 0.00072 + phase) * amplitude : 0;
        const targetY = this.isHovering ? Math.cos(time * 0.00058 + phase * 1.2) * amplitude * 0.72 : 0;

        offset.x += (targetX - offset.x) * 0.075;
        offset.y += (targetY - offset.y) * 0.075;
        remainingMotion = Math.max(remainingMotion, Math.abs(offset.x), Math.abs(offset.y));

        const node = this.nodes[index];
        node.style.setProperty("--float-x", `${offset.x.toFixed(2)}px`);
        node.style.setProperty("--float-y", `${offset.y.toFixed(2)}px`);
      });

      this.drawConnections();

      if (this.isHovering || remainingMotion > 0.04) {
        this.motionFrame = requestAnimationFrame((nextTime) => this.animateNetwork(nextTime));
      } else {
        this.motionFrame = null;
      }
    }

    swayToward(event) {
      if (this.pointerFrame) cancelAnimationFrame(this.pointerFrame);
      this.pointerFrame = requestAnimationFrame(() => {
        const bounds = this.network.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
        const x = horizontal * 20;
        const y = vertical * 14;
        const rotation = horizontal * 0.5;

        this.field.style.setProperty("--sway-x", `${x.toFixed(2)}px`);
        this.field.style.setProperty("--sway-y", `${y.toFixed(2)}px`);
        this.field.style.setProperty("--sway-rotation", `${rotation.toFixed(3)}deg`);
        this.pointerFrame = null;
      });
    }

    resetSway() {
      this.field.style.setProperty("--sway-x", "0px");
      this.field.style.setProperty("--sway-y", "0px");
      this.field.style.setProperty("--sway-rotation", "0deg");
    }

    drawConnections() {
      if (!this.network || !this.lines) return;

      const networkBounds = this.network.getBoundingClientRect();
      if (!networkBounds.width || !networkBounds.height) return;

      const useMobileLayout = window.matchMedia("(max-width: 700px)").matches;
      const points = new Map(partners.map((partner) => {
        const offset = this.nodeOffsets?.get(partner.id) || { x: 0, y: 0 };
        return [partner.id, {
          x: networkBounds.width * (useMobileLayout ? partner.mx : partner.x) / 100 + offset.x,
          y: networkBounds.height * (useMobileLayout ? partner.my : partner.y) / 100 + offset.y
        }];
      }));

      this.lines.setAttribute("viewBox", `0 0 ${networkBounds.width} ${networkBounds.height}`);

      if (!this.edgeLines) {
        this.lines.innerHTML = connections.map(([fromId, toId, signalDelay]) =>
          `<line${fromId === "join-network" || toId === "join-network" ? ` class="join-link" pathLength="1" style="--signal-delay:${signalDelay || 900}ms"` : ""}></line>`
        ).join("");
        this.edgeLines = [...this.lines.querySelectorAll("line")];
      }

      connections.forEach(([fromId, toId], index) => {
        const from = points.get(fromId);
        const to = points.get(toId);
        const line = this.edgeLines[index];
        line.setAttribute("x1", from.x);
        line.setAttribute("y1", from.y);
        line.setAttribute("x2", to.x);
        line.setAttribute("y2", to.y);
      });
    }
  }

  customElements.define(elementName, HighestEcosystem);
})();
