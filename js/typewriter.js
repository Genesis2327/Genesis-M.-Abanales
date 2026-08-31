(function () {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const phrases = ["Full-Stack Developer", "QA Tester", "Systems Builder"];
  let i = 0;
  let char = 0;
  let deleting = false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = phrases.join(" · ");
    return;
  }

  function step() {
    const word = phrases[i];
    el.textContent = word.slice(0, char);
    if (!deleting && char < word.length) {
      char += 1;
      setTimeout(step, 70);
    } else if (!deleting && char === word.length) {
      deleting = true;
      setTimeout(step, 1400);
    } else if (deleting && char > 0) {
      char -= 1;
      setTimeout(step, 36);
    } else {
      deleting = false;
      i = (i + 1) % phrases.length;
      setTimeout(step, 280);
    }
  }
  step();
})();
