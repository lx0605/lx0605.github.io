// projects.js

const projectsContent = [
        {
        name: "3D Gridded Subsurface Data Interpolation with Inverse Distance Weighting",
        description: `
                    Subsurface phenomena are difficult to observe and subsurface properties (e.g., contaminant concentrations, hydraulic conductivity) often vary spatially but are measured only at discrete points (e.g., well bores),
                    leaving unknowns or "missing data" at critical spots. These unknowns complicate predictions (e.g., contaminant plume migration) and simulations (e.g., transport modeling with incomplete initial concentration), rendering problems ill-posed.
                    This work addresses one of the challenge of modeling 3D gridded subsurface data from discrete data points by applying an anisotropic inverse distance weighting (IDW) method.

                    The IDW approach interpolates properties between sparse data points by assigning weights inversely proportional to the distance (raised to a power) from the target location. To account for directional variability,
                    the method incorporates anisotropic scaling factors (ax=ay=6, az=1), reflecting stronger spatial correlation along the horizontal directions than the vertical direction.
                    Using well-bore concentration data (left figure), the IDW method generates a 3D grid model (right figure) to estimate properties between wells, enabling accurate plume predictions.
                    In addition, the hexagonal grid mesh geometry, along with the concentration data, can be exported to PFLOTRAN input formats, facilitating seamless integration with reactive transport modeling work.
                        
                    `,
        technologies: "Python, Scipy, NumPy, PyVista, Paraview",
        //link: "https://github.com/yourusername/project1",
        images: ["images/model_mesh_1.png", "images/model_mesh_2.png"]
    },
    {
        name: "Local mesh refinement for 3D Unstructured Implicit Grid",
        description: `
                    This work presents a novel method for adaptive mesh refinement in 3D unstructured implicit grids (UGIs) for vadose zone or reservoir simulation. This method refines the mesh to resolve localized solution variations, enhancing simulation accuracy and convergence.
                    In the left figure, the subsurface domain contains five distinct geologic layers. Layer 4 (yellow) is refined to capture spatial heterogeneity at the transition between layers 3 and 4. In the right figure, 20 randomly generated fracture planes intersect the domain. 
                    Grid cells intersecting these fractures are flagged for refinement, enabling the construction of a detailed fracture network.
                    The refined mesh can be directly applied to reactive transport modeling. The results shown here were exported from PFLOTRAN in XDMF format.
                    One notable feature is that hexahedron elements are used in both grid mesh. I shall discuess why I prefer hexahedron over tetrahedron (triangulated) elements in the future. 
                    `,
        technologies: "Scipy, PyVista, Paraview, LaGriT, PFLOTRAN",       
        images: ["images/refine_01.png", "images/refine_02.png"]
    },
   
    // {
    //     name: "Simulating Seismic Wavelet Propagation with PyTorch",
    //     description: "This article explores the use of PyTorch tensors to simulate seismic wavelet propagation" +
    //                 " and solve the inverse problem for calculating material properties using a neural network-inspired approach" +
    //                 " $ \\frac{\\partial^2 u(x, t)}{\\partial t^2} = c^2 \\nabla^2 u(x, t)$",
        
    //                 technologies: "Python, PyTorch",
    //     //technologies: "To be build",
    //     link: "https://github.com/yourusername/project1",
    //     images: ["images/model_mesh_1.png", "images/model_mesh_2.png"]
    // },
    {
        name: "Partial Correlation Calculator",
        description: `When analyzing simulation outputs, it is common to compute covariance to identify which parameters most influence the objective function across multiple runs. 
                     A tool to calculate the partial correlation matrix based on user input can be quite helpful.`,
        technologies: "JavaScript, HTML, CSS",
        link: "partial-correlation.html"
    },
    // Add more projects as needed

    {
        name: "ICP Measurements Analysis Tool for SX Experiments",
        description: `A dynamic calculator for analyzing ICP measurements for solvent extraction (SX) experiments. 
                1st row: composition of the baseline brine before experiment. 
                2nd row: post-extraction solution composition after contacting with organic phase.
                3rd row: composition of the stripping solution.
                The tool computes the extraction efficiency, overall yield, and distribution coefficients for each element along with experimental parameters like volumes, masses, and densities.`,
        technologies: "JavaScript, HTML, CSS",
        link: "icp-analysis.html"        
        
    }

];