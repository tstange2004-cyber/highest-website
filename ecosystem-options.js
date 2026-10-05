(() => {
  const navigationEntry = performance.getEntriesByType?.("navigation")[0];
  if (window.location.hash === "#wege" && navigationEntry?.type === "reload") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.addEventListener("load", () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), { once: true });
  }

  const choiceSystem = document.querySelector("[data-ecosystem-choices]");
  if (!choiceSystem) return;

  const choices = [...choiceSystem.querySelectorAll("[data-choice]")];
  const panels = [...choiceSystem.querySelectorAll("[data-choice-panel]")];

  const activateChoice = (choiceId) => {
    choices.forEach((choice) => {
      const isActive = choice.dataset.choice === choiceId;
      choice.classList.toggle("is-active", isActive);
      choice.setAttribute("aria-expanded", String(isActive));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.choicePanel !== choiceId;
    });
  };

  choices.forEach((choice) => {
    const activate = () => activateChoice(choice.dataset.choice);
    choice.addEventListener("pointerenter", activate);
    choice.addEventListener("focus", activate);
    choice.addEventListener("click", activate);
  });

  activateChoice(choices[0].dataset.choice);
})();
