/* Dual-layer cursor: a snappy dot plus a lagged ring. Disabled on coarse/touch pointers. */
(function () {
  // Touch / coarse pointers keep the native cursor. Fine pointers (mouse/trackpad)
  // keep the custom cursor even on Windows devices that report a touch digitizer.
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const canHover = window.matchMedia("(hover: hover)").matches;
  if (!finePointer || !canHover) return;

  const ring = document.querySelector(".cursor__ring");
  const dot = document.querySelector(".cursor__dot");
  if (!ring || !dot) return;

  document.body.classList.add("has-custom-cursor");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener(
    "mousemove",
    function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = "translate(" + (mouseX - 2.5) + "px, " + (mouseY - 2.5) + "px)";
    },
    { passive: true }
  );

  function tick() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = "translate(" + (ringX - 17) + "px, " + (ringY - 17) + "px)";
    requestAnimationFrame(tick);
  }
  tick();

  const growSel = "a, button, .reel__card, .badge, .commit, .pill, .port, .diploma";
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest(growSel)) document.body.classList.add("cursor-grow");
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest(growSel)) document.body.classList.remove("cursor-grow");
  });
})();
