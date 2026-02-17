var i=[{title:"Project Samaritan",description:"Bridging the gap between disabled individuals and access to quality education. A platform for volunteer lecturers and teachers.",technologies:["React","Django","PostgreSQL"],github:"https://github.com/butterman28/Project_Samaritan",icon:"fa-regular fa-folder"},{title:"Java Bank App",description:"A desktop application for basic banking transactions. Deep dive into JavaFX and Object-Oriented Programming.",technologies:["Java","JavaFX","OOP"],github:"https://github.com/butterman28/javafx-bankapp",external:null,icon:"fa-regular fa-folder"},{title:"Office Autos",description:"A streamlined inventory and management system for automotive office operations. Features real-time tracking, reporting dashboards, and role-based access control.",technologies:["Django","React","PostgreSQL","Redis"],github:"https://github.com/butterman28/Offiice_Autos",external:"https://xampfiresource-rers.vercel.app/#projects",icon:"fa-solid fa-car"},{title:"Dev Section",description:"A developer-focused resource hub featuring code snippets, documentation templates, and productivity tools. Built with performance and accessibility in mind.",technologies:["Next.js","Tailwind CSS","TypeScript","MDX"],github:"https://github.com/butterman28/Dev-Section",external:"https://xampfiresource-rers.vercel.app/#projects",icon:"fa-solid fa-terminal"}];document.addEventListener("DOMContentLoaded",()=>{let n=document.getElementById("mobile-menu-btn"),a=document.getElementById("mobile-menu"),t=n.querySelector("i");n.addEventListener("click",()=>{a.classList.toggle("hidden"),a.classList.contains("hidden")?(t.classList.remove("fa-xmark"),t.classList.add("fa-bars")):(t.classList.remove("fa-bars"),t.classList.add("fa-xmark"))}),a.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{a.classList.add("hidden"),t.classList.remove("fa-xmark"),t.classList.add("fa-bars")})});let r=document.getElementById("projects-grid");r&&i.length>0&&(r.innerHTML=i.map(e=>{let o=`
            ${e.github?`<a href="${e.github}" class="hover:text-teal" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>`:""}
            ${e.external?`<a href="${e.external}" class="hover:text-teal" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`:""}
        `,l=e.technologies.map(c=>`<li>${c}</li>`).join("");return`
            <div class="bg-navy-800 p-6 rounded hover:-translate-y-2 transition duration-300">
            <div class="flex justify-between items-center mb-6">
                <i class="${e.icon||"fa-regular fa-folder"} text-teal text-4xl"></i>
                <div class="flex space-x-4 text-slate-light text-xl">
                ${o}
                </div>
            </div>
            <h3 class="text-slate-light text-xl font-bold mb-2">${e.title}</h3>
            <p class="text-slate-medium text-sm mb-4">${e.description}</p>
            <ul class="flex flex-wrap gap-3 text-xs font-mono text-slate-dark">
                ${l}
            </ul>
            </div>
        `}).join(""))});
