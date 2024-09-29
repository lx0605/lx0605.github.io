// content.js

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

// Load content when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    loadBioContent();
    loadProjectsContent();
});