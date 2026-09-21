/* Dual-role experience view: --role=developer (default) vs --role=it-support.
   Both jobs run concurrently; the toggle swaps which process log is in focus. */
(function () {
  const section = document.getElementById("experience");
  const buttons = document.querySelectorAll("[data-role-flag]");
  const items = document.querySelectorAll(".gitlog__item[data-roles]");
  if (!section || !buttons.length) return;

  function show(role) {
    section.dataset.role = role;
    buttons.forEach(function (btn) {
      const on = btn.dataset.roleFlag === role;
      btn.setAttribute("aria-pressed", String(on));
      btn.classList.toggle("is-on", on);
    });

    items.forEach(function (item) {
      const roles = (item.dataset.roles || "").split(/\s+/);
      const match = roles.indexOf(role) !== -1;
      item.hidden = !match;
      item.classList.toggle("is-hidden-role", !match);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      show(btn.dataset.roleFlag);
    });
  });

  show("developer");
})();
