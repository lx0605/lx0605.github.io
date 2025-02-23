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
  
      // Create a container for images
      let imagesHtml = '';
      if (project.images && project.images.length > 0) {
        imagesHtml = '<div class="project-images-container">';
        project.images.forEach(imagePath => {
          imagesHtml += `<img src="${imagePath}" alt="${project.name} Image" class="project-image">`;
        });
        imagesHtml += '</div>';
      }
  
      projectElement.innerHTML = `
          <h3>${project.name}</h3>
          ${imagesHtml}
          <p>${project.description}</p>
          <p><strong>Tools used:</strong> ${project.technologies}</p>
          <a href="${project.link}" target="_blank">Project Link</a>
      `;
      projectsContainer.appendChild(projectElement);
    });
  
    // Create an overlay div dynamically
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    // Append the overlay to the body
    document.body.appendChild(overlay);
  
    // Add event listener to all project images
    document.querySelectorAll('.project img').forEach(image => {
      image.addEventListener('click', () => {
        // Create an enlarged image element
        const enlargedImage = document.createElement('img');
        enlargedImage.src = image.src;
        enlargedImage.classList.add('enlarged-image');
  
        // Clear any previous content in the overlay
        overlay.innerHTML = '';
  
        // Append the enlarged image to the overlay
        overlay.appendChild(enlargedImage);
  
        // Show the overlay
        overlay.style.display = 'block';
  
        // Close the overlay when clicking on it
        overlay.addEventListener('click', () => {
          overlay.style.display = 'none';
        });
      });
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