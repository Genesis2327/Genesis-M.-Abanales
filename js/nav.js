(function () {
  const header = document.getElementById("site-nav");
  const burger = document.querySelector(".nav__burger");
  const links = document.querySelectorAll(".nav__links a");
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  burger?.addEventListener("click", function () {
    const open = header.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("is-open");
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Open menu");
    });
  });

  function setActive() {
    const y = window.scrollY + 90;
    let current = "home";
    sections.forEach(function (section) {
      if (section.offsetTop <= y) current = section.id;
    });
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.section === current);
    });
  }

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
