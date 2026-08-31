(function () {
  const cloud = document.getElementById("skill-cloud");
  const tabs = document.querySelectorAll(".skills__tree [role='tab']");
  if (!cloud) return;

  const pills = Array.from(cloud.querySelectorAll(".pill"));

  function scatter() {
    if (window.matchMedia("(max-width: 980px)").matches) return;
    const w = cloud.clientWidth;
    const h = cloud.clientHeight;
    pills.forEach(function (pill) {
      const pw = pill.offsetWidth || 80;
      const ph = pill.offsetHeight || 28;
      const x = 8 + Math.random() * Math.max(8, w - pw - 16);
      const y = 8 + Math.random() * Math.max(8, h - ph - 16);
      pill.style.left = x + "px";
      pill.style.top = y + "px";
    });
  }

  function filter(cat) {
    pills.forEach(function (pill) {
      const on = cat === "all" || pill.dataset.cat === cat;
      pill.classList.toggle("is-dim", !on);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.setAttribute("aria-selected", String(t === tab));
      });
      filter(tab.dataset.cat);
      scatter();
    });
  });

  window.addEventListener("resize", scatter);
  window.addEventListener("load", scatter);
  scatter();
})();
