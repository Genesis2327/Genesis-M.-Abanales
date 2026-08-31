(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const label = document.querySelector("[data-theme-label]");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("gma-theme", theme);
    } catch (e) {
      /* private mode — still switch in-memory */
    }
    const isLight = theme === "light";
    if (toggle) {
      toggle.setAttribute("aria-checked", String(isLight));
      toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
    if (label) label.textContent = isLight ? "Light" : "Dark";
  }

  apply(root.getAttribute("data-theme") || "dark");

  toggle?.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();
