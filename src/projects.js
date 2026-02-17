// src/projects.js
export const projects = [
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
    github: "https://github.com/butterman28/Offiice_Autos", // 👈 Update with your actual repo
    external: "https://xampfiresource-rers.vercel.app/#projects",           // 👈 Update or set to null
    icon: "fa-solid fa-car"                                // 👈 Custom icon!
  },
  
  // ✨ NEW: Dev Section
  {
    title: "Dev Section",
    description: "A developer-focused resource hub featuring code snippets, documentation templates, and productivity tools. Built with performance and accessibility in mind.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MDX"],
    github: "https://github.com/butterman28/Dev-Section",  // 👈 Update with your actual repo
    external: "https://xampfiresource-rers.vercel.app/#projects",                                        // 👈 Set to URL if live
    icon: "fa-solid fa-terminal"                           // 👈 Custom icon!
  }
  
  // 👉 Just add more objects here to add new projects!
];