// content.js

function loadHomeContent() {
  const homeContainer = document.getElementById('home-content');
  if (homeContainer) {
    homeContainer.innerHTML = homeContent;
  }
}

function loadBioContent() {
  const bioContainer = document.getElementById('bio-content');
  if (bioContainer) {
    bioContainer.innerHTML = bioContent;
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function loadProjectsContent() {
  const projectsContainer = document.getElementById('projects-content');
  if (!projectsContainer) return;
  projectsContainer.innerHTML = '';

  // Group projects by category
  const categories = {};
  projectsContent.forEach(project => {
    const cat = project.category || 'Other Projects';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(project);
  });

  // Render each category
  Object.keys(categories).forEach(catName => {
    const catSection = document.createElement('div');
    catSection.className = 'projects-category-section';

    const catHeading = document.createElement('h3');
    catHeading.className = 'category-heading';
    catHeading.textContent = catName;
    catSection.appendChild(catHeading);

    const grid = document.createElement('div');
    grid.className = 'projects-grid';

    categories[catName].forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card' + (project.featured ? ' featured-card' : '');

      // Featured label
      let featuredBadge = '';
      if (project.featured) {
        featuredBadge = '<div class="card-badge"><span class="badge badge-accent">Featured Research</span></div>';
      }

      // Images container
      let imagesHtml = '';
      if (project.images && project.images.length > 0) {
        imagesHtml = '<div class="project-media-wrapper">';
        project.images.forEach((imgSrc, idx) => {
          const captionText = (project.captions && project.captions[idx]) ? project.captions[idx] : project.name;
          const escapedCaption = escapeHtml(captionText);
          imagesHtml += `
            <div class="project-media-item" data-src="${imgSrc}" data-caption="${escapedCaption}">
              <img src="${imgSrc}" alt="${escapeHtml(project.name)}" class="project-thumbnail" loading="lazy">
              <span class="zoom-indicator">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"/></svg>
                Click to expand
              </span>
            </div>
          `;
        });
        imagesHtml += '</div>';
      }

      // Tech tags
      let techHtml = '';
      if (project.technologies && project.technologies.length > 0) {
        techHtml = '<div class="tech-pills-list">';
        project.technologies.forEach(tech => {
          techHtml += `<span class="tech-pill">${escapeHtml(tech)}</span>`;
        });
        techHtml += '</div>';
      }

      // Action button / link (ONLY rendered if project.link exists)
      let linkHtml = '';
      if (project.link && project.link.trim() !== '') {
        const target = project.isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
        const btnClass = project.featured ? 'btn btn-primary' : 'btn btn-outline';
        linkHtml = `
          <div class="project-action">
            <a href="${project.link}" ${target} class="${btnClass}">
              ${escapeHtml(project.linkText || 'Open Project')}
            </a>
          </div>
        `;
      }

      card.innerHTML = `
        ${featuredBadge}
        <div class="card-header">
          <h4 class="project-title">${project.name}</h4>
          ${project.tagline ? `<p class="project-tagline">${escapeHtml(project.tagline)}</p>` : ''}
        </div>
        ${imagesHtml}
        <div class="project-description">
          ${project.description}
        </div>
        <div class="project-meta">
          <div class="tools-label">Technologies:</div>
          ${techHtml}
        </div>
        ${linkHtml}
      `;

      grid.appendChild(card);
    });

    catSection.appendChild(grid);
    projectsContainer.appendChild(catSection);
  });

  // Trigger MathJax re-render if available
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// Global lightbox setup with event delegation
function setupGlobalLightbox() {
  let overlay = document.getElementById('lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-dialog">
        <button class="lightbox-close" aria-label="Close image">&times;</button>
        <img class="lightbox-image" src="" alt="Enlarged visualization" />
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  function openLightbox(src, caption) {
    const imgElem = overlay.querySelector('.lightbox-image');
    const captionElem = overlay.querySelector('.lightbox-caption');
    imgElem.src = src;
    captionElem.textContent = caption || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Delegated click listener across the entire document
  document.addEventListener('click', (e) => {
    const mediaItem = e.target.closest('.project-media-item');
    if (mediaItem) {
      e.preventDefault();
      const src = mediaItem.getAttribute('data-src');
      const caption = mediaItem.getAttribute('data-caption');
      if (src) openLightbox(src, caption);
    }
  });
}

function switchToSection(targetId) {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let matched = false;
  sections.forEach(sec => {
    if (sec.id === targetId) {
      sec.classList.add('active');
      matched = true;
    } else {
      sec.classList.remove('active');
    }
  });

  if (matched) {
    navLinks.forEach(link => {
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      window.location.hash = targetId;
      switchToSection(targetId);
    });
  });

  // Handle in-page triggers (e.g., hero buttons)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.nav-link-trigger');
    if (trigger) {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-target');
      if (targetId) {
        window.location.hash = targetId;
        switchToSection(targetId);
      }
    }
  });

  // Handle URL hash on initial load & back/forward
  function handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      switchToSection(hash);
    } else {
      switchToSection('home');
    }
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  loadHomeContent();
  loadBioContent();
  loadProjectsContent();
  setupGlobalLightbox();
  setupNavigation();
});