/**
 * Gemeinsame, bewusst kleine Seitenlogik.
 * Seitenspezifische Funktionen liegen in eigenen Dateien im selben Ordner.
 */
(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#main-nav");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Mobile Navigation: Zustand und zugängliche Beschriftung bleiben synchron.
  if (menuButton && navigation) {
    const menuLabel = menuButton.querySelector(".sr-only");

    const setMenuOpen = (open) => {
      menuButton.setAttribute("aria-expanded", String(open));
      navigation.classList.toggle("open", open);
      if (menuLabel) menuLabel.textContent = open ? "Menü schließen" : "Menü öffnen";
    };

    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    });
  }

  // Interne Sprunglinks bewegen sich weich, sofern Animationen erlaubt sind.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const selector = link.getAttribute("href");
      if (!selector || selector === "#") return;
      const target = document.querySelector(selector);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });
      window.history.replaceState(null, "", selector);
    });
  });
})();
