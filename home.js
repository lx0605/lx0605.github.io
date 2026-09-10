// home.js

const homeContent = `
  <div class="hero-section">
    <div class="hero-badge">Computational Earth Science & Subsurface Modeling</div>
    <h1 class="hero-title">Xiao Luo, Ph.D.</h1>
    <p class="hero-subtitle">
      Computational Earth Scientist at <strong>Pacific Northwest National Laboratory (PNNL)</strong>. 
      Specializing in differentiable physics, reactive transport, high-performance simulation, and inverse problems for subsurface energy systems.
    </p>
    <div class="hero-actions">
      <a href="#projects" class="btn btn-primary nav-link-trigger" data-target="projects">Explore Projects & Frameworks</a>
      <a href="https://www.linkedin.com/in/luoxiaoustc" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.64 1.63c0 .91.73 1.64 1.64 1.64s1.63-.73 1.63-1.64c0-.9-.72-1.63-1.63-1.63Z"/></svg>
        LinkedIn
      </a>
      <a href="https://github.com/lx0605" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
        <svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
        GitHub
      </a>
    </div>
  </div>

  <div class="section-divider"></div>

  <div class="section-heading-block">
    <h2>Research Pillars</h2>
    <p class="section-sub">Bridging applied mathematics, physics-informed numerical algorithms, and open-source scientific computing.</p>
  </div>

  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <h3>Differentiable Physics & Auto-Diff</h3>
      <p>
        Pioneering automatic differentiation (AD) in reservoir and porous media simulation with JAX. 
        Enables exact adjoint-state parameter estimation, rapid sensitivity analysis, and high-dimensional history matching without finite-difference bottlenecks.
      </p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🌊</div>
      <h3>Reactive Transport & Vadose Zone</h3>
      <p>
        High-performance numerical modeling of radioactive noble gas evolution and subsurface contaminant plumes in the vadose zone. 
        Developing scalable HPC simulation workflows with PFLOTRAN to address critical environmental challenges.
      </p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📐</div>
      <h3>3D Geological Meshing & Inversion</h3>
      <p>
        Building automated computational pipelines for anisotropic interpolation (IDW) and 3D adaptive local mesh refinement (UGIs) on hexahedral grids, 
        resolving discrete fracture planes and heterogeneous layer stratigraphy.
      </p>
    </div>
  </div>

  <div class="featured-spotlight-card">
    <div class="featured-spotlight-inner">
      <div class="featured-spotlight-text">
        <span class="spotlight-badge">Research Highlight</span>
        <h3>res_sim_py: Differentiable Reservoir Simulator</h3>
        <p>
          An end-to-end differentiable compositional reservoir modeling framework implemented in JAX. 
          Combines multiphase Darcy flow with exact reverse-mode automatic differentiation and a 2D DCT spectral basis parameterization, 
          achieving <strong>97.3% accuracy</strong> in recovering heterogeneous permeability fields.
        </p>
        <div class="featured-spotlight-tags">
          <span class="tech-pill">JAX</span>
          <span class="tech-pill">Auto-Diff</span>
          <span class="tech-pill">Adjoint Optimization</span>
          <span class="tech-pill">2D DCT Spectral</span>
          <span class="tech-pill">Python</span>
        </div>
        <div class="featured-spotlight-buttons">
          <a href="#projects" class="btn btn-sm btn-primary nav-link-trigger" data-target="projects">View Details →</a>
        </div>
      </div>
      <div class="featured-spotlight-media project-media-item" data-src="images/res_sim_dct_history.png" data-caption="res_sim_py: 2D DCT spectral basis history matching benchmark (97.3% match accuracy).">
        <img src="images/res_sim_dct_history.png" alt="res_sim_py History Matching Benchmark" class="spotlight-img project-thumbnail" />
        <span class="zoom-indicator">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"/></svg>
          Click to expand
        </span>
      </div>
    </div>
  </div>
`;