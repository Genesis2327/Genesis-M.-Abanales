/* Primary CTAs drift slightly toward the pointer while it stays inside the button. */
(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll(".magnetic").forEach(function (btn) {
    btn.addEventListener("mousemove", function (e) {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = "translate(" + x * 0.18 + "px, " + y * 0.22 + "px)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "";
    });
  });
})();
