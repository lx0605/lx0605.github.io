// projects.js

const projectsContent = [
  {
    "id": "res_sim_py",
    "name": "res_sim_py: Differentiable Reservoir Simulator & Adjoint History Matching",
    "category": "Research & Simulation Frameworks",
    "featured": true,
    "tagline": "End-to-end differentiable compositional reservoir simulation in JAX with reverse-mode automatic differentiation.",
    "description": "<p><strong>res_sim_py</strong> is an open-source, differentiable reservoir simulation framework implemented in Python using <strong>JAX</strong>. It combines physics-based multiphase compositional transport, flash thermodynamics, and Newton-Raphson implicit solvers with exact reverse-mode automatic differentiation (AD), eliminating the computational burden of numerical perturbation and finite-difference approximations.</p><p>The framework integrates an adjoint-state inverse parameter estimation engine with a <strong>2D Discrete Cosine Transform (DCT)</strong> spectral basis parameterization. In high-contrast benchmark tests, this formulation achieves <strong>97.3% accuracy</strong> in reconstructing complex heterogeneous permeability fields from sparse production data, while enforcing physical porosity-permeability constraints and wellbore conditioning.</p>",
    "technologies": [
      "Python",
      "JAX",
      "Automatic Differentiation",
      "Adjoint Optimization",
      "SciPy",
      "NumPy",
      "Matplotlib"
    ],
    "images": [
      "images/res_sim_dct_history.png"
    ],
    "captions": [
      "2D DCT spectral basis history matching: True vs. inferred permeability fields, loss convergence, and production rate matching."
    ],
    "link": "https://github.com/lx0605/res_sim_py",
    "linkText": "View on GitHub \u2197",
    "isExternal": true
  },
  {
    "id": "idw_interpolation",
    "name": "3D Gridded Subsurface Data Interpolation with Anisotropic IDW",
    "category": "Research & Simulation Frameworks",
    "featured": false,
    "tagline": "Spatial property interpolation from sparse wellbore observations with PFLOTRAN mesh export.",
    "description": "<p>Subsurface properties such as contaminant concentrations and hydraulic conductivity are typically measured only at discrete wellbore locations, leaving critical spatial gaps that complicate plume predictions and transport modeling.</p><p>This framework applies an anisotropic inverse distance weighting (IDW) method to interpolate 3D gridded properties between sparse observation wells. By incorporating directional scaling factors (ax = ay = 6, az = 1), it preserves realistic horizontal depositional continuity over vertical variations. The generated structured/hexagonal grid geometries and concentration arrays export directly into PFLOTRAN input decks for reactive transport simulations.</p>",
    "technologies": [
      "Python",
      "SciPy",
      "NumPy",
      "PyVista",
      "ParaView",
      "PFLOTRAN"
    ],
    "images": [
      "images/model_mesh_1.png",
      "images/model_mesh_2.png"
    ],
    "captions": [
      "Discrete wellbore observation coordinates.",
      "3D anisotropic IDW interpolated concentration plume and hexagonal grid model for PFLOTRAN."
    ],
    "link": "",
    "linkText": "",
    "isExternal": false
  },
  {
    "id": "mesh_refinement",
    "name": "Local Mesh Refinement for 3D Unstructured Implicit Grids (UGIs)",
    "category": "Research & Simulation Frameworks",
    "featured": false,
    "tagline": "Adaptive hexahedral grid refinement along stratigraphic transitions and 3D discrete fracture planes.",
    "description": "<p>High-fidelity reactive transport and vadose zone simulations require fine spatial resolution near sharp material transitions and fractures without inflating full-domain cell counts.</p><p>This pipeline provides automated adaptive mesh refinement for 3D unstructured implicit grids (UGIs) using hexahedral elements. It selectively refines cells intersecting stratigraphic layer interfaces (e.g., heterogeneous layer boundaries) as well as complex planar discrete fracture networks (DFNs). The resulting refined meshes are validated and exported in XDMF formats for high-performance reactive transport modeling in PFLOTRAN.</p>",
    "technologies": [
      "LaGriT",
      "PFLOTRAN",
      "PyVista",
      "ParaView",
      "SciPy"
    ],
    "images": [
      "images/refine_01.png",
      "images/refine_02.png"
    ],
    "captions": [
      "Hexahedral adaptive mesh refinement along stratigraphic layer boundaries to resolve localized heterogeneity.",
      "Adaptive grid refinement along 3D discrete fracture planes and intersecting fracture networks (DFNs)."
    ],
    "link": "",
    "linkText": "",
    "isExternal": false
  },
  {
    "id": "icp_calculator",
    "name": "ICP Measurements Analysis Tool for Solvent Extraction (SX)",
    "category": "Interactive Scientific Web Tools",
    "featured": false,
    "tagline": "Client-side multi-element mass balance and distribution coefficient calculator for SX experiments.",
    "description": "<p>A dynamic browser-based calculator designed for chemical and metallurgical workflows analyzing inductively coupled plasma (ICP) spectroscopy data from solvent extraction (SX) test runs.</p><p>The tool processes baseline brine concentrations, post-extraction aqueous concentrations, and stripping solutions to compute extraction efficiencies, stripping recovery percentages, distribution coefficients (D), and full mass balances incorporating organic and aqueous phase densities.</p>",
    "technologies": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Math.js"
    ],
    "link": "icp-analysis.html",
    "linkText": "Launch Calculator \u2197",
    "isExternal": true
  },
  {
    "id": "partial_correlation",
    "name": "Partial Correlation Matrix Calculator",
    "category": "Interactive Scientific Web Tools",
    "featured": false,
    "tagline": "Client-side matrix algebra tool for sensitivity analysis and parameter screening.",
    "description": "<p>When analyzing multi-parameter simulation ensembles, raw covariance matrices often obscure direct physical dependencies due to indirect confounding effects.</p><p>This interactive numerical utility computes partial correlation matrices from user-supplied correlation or covariance inputs, isolating direct relationships between individual parameters and objective response metrics.</p>",
    "technologies": [
      "JavaScript",
      "Math.js",
      "Matrix Algebra"
    ],
    "link": "partial-correlation.html",
    "linkText": "Launch Calculator \u2197",
    "isExternal": true
  }
];
