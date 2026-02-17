// src/main.js
import { projects } from './projects.js'; 


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        // Toggle visibility
        menu.classList.toggle('hidden');
        
        // Toggle Icon between Bars and X
        if (menu.classList.contains('hidden')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    const projectsGrid = document.getElementById('projects-grid');
  
    if (projectsGrid && projects.length > 0) {
        projectsGrid.innerHTML = projects.map(project => {
        // Build social links dynamically
        const links = `
            ${project.github ? `<a href="${project.github}" class="hover:text-teal" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>` : ''}
            ${project.external ? `<a href="${project.external}" class="hover:text-teal" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
        `;

        // Build tech tags
        const techTags = project.technologies.map(tech => `<li>${tech}</li>`).join('');

        return `
            <div class="bg-navy-800 p-6 rounded hover:-translate-y-2 transition duration-300">
            <div class="flex justify-between items-center mb-6">
                <i class="${project.icon || 'fa-regular fa-folder'} text-teal text-4xl"></i>
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
        }).join('');
    }
});