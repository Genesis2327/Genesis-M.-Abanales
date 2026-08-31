/* Lightweight circuit-grid canvas used in hero and contact. */
(function () {
  function mount(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    let nodes = [];
    let raf;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = Math.floor(rect.width);
      h = canvas.height = Math.floor(rect.height);
      const count = Math.max(18, Math.floor((w * h) / 28000));
      nodes = Array.from({ length: count }, function () {
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        };
      });
    }

    function color() {
      return getComputedStyle(document.documentElement).getPropertyValue("--signal").trim() || "#3ee08f";
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const c = color();
      ctx.strokeStyle = c;
      ctx.fillStyle = c;
      ctx.globalAlpha = 0.55;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.globalAlpha = (1 - d / 120) * 0.35;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
            ctx.globalAlpha = 0.55;
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
      return;
    }
    draw();
  }

  mount(document.getElementById("hero-grid"));
  mount(document.getElementById("contact-grid"));
})();
