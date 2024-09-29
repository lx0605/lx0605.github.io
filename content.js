// content.js

function loadHomeContent() {
    document.getElementById('home-content').innerHTML = homeContent;
}

function loadBioContent() {
    document.getElementById('bio-content').innerHTML = bioContent;
}

function loadProjectsContent() {
    const projectsContainer = document.getElementById('projects-content');
    projectsContainer.innerHTML = '';
    
    projectsContent.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies used:</strong> ${project.technologies}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Update active class on nav links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // Show target section, hide others
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
}

// Load content and setup navigation when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHomeContent();
    loadBioContent();
    loadProjectsContent();
    setupNavigation();
});