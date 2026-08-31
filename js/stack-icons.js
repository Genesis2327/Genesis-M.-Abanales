/* Inject Simple Icons (official brand marks) into skill pills, project tags, and the hero ticker. */
(function () {
  var SLUGS = {
    JavaScript: "javascript",
    TypeScript: "typescript",
    Python: "python",
    PHP: "php",
    SQL: "mysql",
    HTML: "html5",
    CSS: "css",
    "React.js": "react",
    React: "react",
    "React Native": "react",
    Vite: "vite",
    "Tailwind CSS": "tailwindcss",
    Bootstrap: "bootstrap",
    "Material UI": "mui",
    "Node.js": "nodedotjs",
    "Express.js": "express",
    "REST APIs": "openapiinitiative",
    "REST API": "openapiinitiative",
    MySQL: "mysql",
    SQLite: "sqlite",
    MongoDB: "mongodb",
    "Sequelize ORM": "sequelize",
    Sequelize: "sequelize",
    Axios: "axios",
    "React Query": "reactquery",
    "Socket.IO": "socketdotio",
    WebSockets: "socketdotio",
    JSON: "json",
    "AWS S3": "amazonwebservices",
    Docker: "docker",
    Git: "git",
    GitHub: "github",
    npm: "npm",
    Netlify: "netlify",
    Vercel: "vercel",
    OpenCV: "opencv",
    dlib: "dlib",
    "Face Recognition": "opencv",
    PyTorch: "pytorch",
    Flutter: "flutter",
    Dart: "dart",
    Recharts: "chartdotjs",
    "Radix UI": "radixui",
    "Lucide React": "lucide",
    "Framer Motion": "framer",
    Laravel: "laravel",
    JIRA: "jira",
    "Manual QA": "testinglibrary",
    "Test Case Creation": "testinglibrary",
    "Functional Testing": "testinglibrary",
    "Defect Reporting": "jira",
    "Test Documentation": "markdown",
    QA: "jira",
  };

  // Marks that ship as near-black — invert them in dark mode so they stay visible.
  var INVERT = {
    github: true,
    vercel: true,
    express: true,
    framer: true,
    lucide: true,
    json: true,
    markdown: true,
    testinglibrary: true,
  };

  var CUSTOM_SRC = {
    amazonwebservices: "https://skillicons.dev/icons?i=aws",
  };

  function iconFor(name) {
    var slug = SLUGS[name];
    if (!slug) return null;
    var img = document.createElement("img");
    img.className = "stack-logo";
    if (INVERT[slug]) img.classList.add("stack-logo--invert");
    img.src = CUSTOM_SRC[slug] || "https://cdn.simpleicons.org/" + slug;
    img.alt = "";
    img.width = 16;
    img.height = 16;
    img.decoding = "async";
    img.loading = "lazy";
    return img;
  }

  function decorate(nodes) {
    nodes.forEach(function (el) {
      if (el.querySelector(".stack-logo")) return;
      var name = el.textContent.replace(/\s+/g, " ").trim();
      var img = iconFor(name);
      if (!img) return;
      el.insertBefore(img, el.firstChild);
    });
  }

  decorate(document.querySelectorAll(".pill, .tags li, .hero__ticker-track span"));
})();
