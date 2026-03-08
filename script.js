const projects = [
  {
    title: "Calculator App",
    description: "A functional calculator built with vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/alex/calculator"
  },
  {
    title: "Weather App",
    description: "Shows live weather using a public API.",
    tags: ["HTML", "CSS", "Fetch API"],
    link: "https://github.com/alex/weather"
  },
  {
    title: "To-Do List",
    description: "Add, complete and delete tasks. Data in localStorage.",
    tags: ["HTML", "CSS", "DOM"],
    link: "https://github.com/alex/todo"
  }
];

// ── 2. RENDER FUNCTION ────────────
function renderProjects() {
  const grid = document.querySelector("#projects-grid");
  grid.innerHTML = ""; // clear first

  // ── 3. FOR LOOP over the array ────
  for (const project of projects) {

    // Build the tags HTML string
    const tagsHTML = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    // Build the card HTML using template literals
    const cardHTML = ` <div class="project-card"> <h3>${project.title}</h3> <p>${project.description}</p> <div class="tags">${tagsHTML}</div> <a href="${project.link}" target="_blank" class="card-link">View on GitHub →</a> </div>`;

    // Inject into the DOM
    grid.innerHTML += cardHTML;
  }
}

// ── 4. RUN ON PAGE LOAD ───────────
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
});