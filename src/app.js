// src/projects.js
var projects = [
  {
    title: "Project Samaritan",
    description: "Bridging the gap between disabled individuals and access to quality education. A platform for volunteer lecturers and teachers.",
    technologies: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/butterman28/Project_Samaritan",
    //external: "https://projectsamaritan.example.com",
    icon: "fa-regular fa-folder"
  },
  {
    title: "Java Bank App",
    description: "A desktop application for basic banking transactions. Deep dive into JavaFX and Object-Oriented Programming.",
    technologies: ["Java", "JavaFX", "OOP"],
    github: "https://github.com/butterman28/javafx-bankapp",
    external: null,
    icon: "fa-regular fa-folder"
  },
  // ✨ NEW: Office Autos
  {
    title: "Office Autos",
    description: "A streamlined inventory and management system for automotive office operations. Features real-time tracking, reporting dashboards, and role-based access control.",
    technologies: ["Django", "React", "PostgreSQL", "Redis"],
    github: "https://github.com/butterman28/Offiice_Autos",
    // 👈 Update with your actual repo
    external: "https://xampfiresource-rers.vercel.app/#projects",
    // 👈 Update or set to null
    icon: "fa-solid fa-car"
    // 👈 Custom icon!
  },
  // ✨ NEW: Dev Section
  {
    title: "Dev Section",
    description: "A developer-focused resource hub featuring code snippets, documentation templates, and productivity tools. Built with performance and accessibility in mind.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MDX"],
    github: "https://github.com/butterman28/Dev-Section",
    // 👈 Update with your actual repo
    external: "https://xampfiresource-rers.vercel.app/#projects",
    // 👈 Set to URL if live
    icon: "fa-solid fa-terminal"
    // 👈 Custom icon!
  }
  // 👉 Just add more objects here to add new projects!
];

// src/main.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const icon = btn.querySelector("i");
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (menu.classList.contains("hidden")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  });
  const mobileLinks = menu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid && projects.length > 0) {
    projectsGrid.innerHTML = projects.map((project) => {
      const links = `
            ${project.github ? `<a href="${project.github}" class="hover:text-teal" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>` : ""}
            ${project.external ? `<a href="${project.external}" class="hover:text-teal" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
        `;
      const techTags = project.technologies.map((tech) => `<li>${tech}</li>`).join("");
      return `
            <div class="bg-navy-800 p-6 rounded hover:-translate-y-2 transition duration-300">
            <div class="flex justify-between items-center mb-6">
                <i class="${project.icon || "fa-regular fa-folder"} text-teal text-4xl"></i>
                <div class="flex space-x-4 text-slate-light text-xl">
                ${links}
                </div>
            </div>
            <h3 class="text-slate-light text-xl font-bold mb-2">${project.title}</h3>
            <p class="text-slate-medium text-sm mb-4">${project.description}</p>
            <ul class="flex flex-wrap gap-3 text-xs font-mono text-slate-dark">
                ${techTags}
            </ul>
            </div>
        `;
      s;
    }).join("");
  }
});
