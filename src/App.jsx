import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: "Pakistan Financial Services Database & Dashboard",
    category: "SQL & Data Visualization",
    shortDesc: "MySQL database simulating 500 customers with an integrated Tableau insights engine.",
    longDescription: "Built a fully relational MySQL database simulating a Pakistani financial institution from scratch. Optimized schemas for 500+ customers and seamlessly integrated it with an interactive dashboard to track transaction velocities, liquidity matrices, and localized demographic distributions.",
    screenshot: "./finance-dashboard.png",
    tableauLink: "https://public.tableau.com", 
    githubLink: "https://github.com/m2ammar/ammar-s_portfolio"
  },
  {
    id: 2,
    title: "PakMart Retail Window Functions Analysis",
    category: "SQL Analytics",
    shortDesc: "Advanced optimization and retail tracking across 7,000 generated sales rows.",
    longDescription: "Utilized SQL window functions (RANK, LAG, DENSE_RANK) to perform intense trend analysis and retail tracking across 7,000 synthetic sales rows generated via custom stored procedures.",
    screenshot: "./pakmart-ss.png",
    githubLink: "https://github.com/m2ammar/ammar-s_portfolio"
  },
  {
    id: 3,
    title: "Java & DLD 3-Floor Elevator Controller",
    category: "Hardware Simulation / Java",
    shortDesc: "State-machine simulation logic managing directional priority routines (Partial Demo).",
    longDescription: "Designed and engineered a functional state-machine simulation for a 3-floor elevator controller using TinkerCad circuit logic and object-oriented Java execution handlers. The project showcases the core mathematical routing logic, floor queue handling, and priority state arrays used to process floor calls efficiently.",
    screenshot: "./Elevator_Controller", // Matched to your exact filename character structure
    githubLink: "https://github.com/m2ammar/ammar-s_portfolio",
    isSpecialAsset: true
  },
  {
    id: 4,
    title: "Enterprise Payroll & Employee Salary System",
    category: "Software Engineering",
    shortDesc: "Full-stack administrative management application with pre-calculated automated ledgers.",
    longDescription: "Engineered an administrative desktop/web architecture designed to safely compute operational overhead, roll history archives, and granular employee salary distributions with integrated automated pre-calculation mechanics.",
    screenshot: "./PayrollManagement.png",
    githubLink: "https://github.com/m2ammar/ammar-s_portfolio"
  },
  {
    id: 5,
    title: "Automated Vehicle Rental Architecture",
    category: "System Design",
    shortDesc: "Multi-tier administrative ecosystem mapping vehicle availabilities and login validation workflows.",
    longDescription: "Developed a comprehensive multi-role vehicle rental management application. Features clean separation of permissions between SuperAdmins and Administrators, secure credential authorization workflows, and live availability tracking arrays.",
    screenshot: "./Home_vehicle.png",
    githubLink: "https://github.com/m2ammar/ammar-s_portfolio"
  }
];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-500 selection:text-black font-sans antialiased">
      
      {/* HEADER SECTION WITH CONTACT LINKS */}
      <header className="p-6 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto border-b border-zinc-900 gap-4">
        <div className="text-xl font-bold tracking-wider font-mono">MUHAMMAD AMMAR SALEEM</div>
        <div className="flex gap-6 text-sm font-mono text-zinc-400">
          <a href="mailto:ammar.saleem@example.com" className="hover:text-teal-400 transition-colors">ammar.saleem@example.com</a>
          <a href="https://public.tableau.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Tableau</a>
          <a href="https://github.com/m2ammar" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">GitHub</a>
        </div>
      </header>

      {/* SELECTED WORKS GRID */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">// SELECTED PRODUCTIONS</h2>
            <p className="text-zinc-500 text-sm mt-2 font-mono">Click individual components to launch active case files.</p>
          </div>
          <div className="text-xs font-mono text-zinc-500 border border-zinc-800 px-3 py-1 rounded bg-zinc-900/20">
            System Node: Active
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group border border-zinc-800 bg-zinc-900/20 p-6 rounded-xl cursor-pointer hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-teal-400 font-mono tracking-widest uppercase">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-teal-300 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.shortDesc}</p>
              </div>
              <div className="mt-6 text-xs font-mono text-zinc-500 group-hover:text-teal-400 flex items-center gap-1 transition-colors">
                COMPILE ANALYSIS CASE ↗
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED PROJECT MODAL POPUP */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-mono transition-colors z-10"
            >
              ✕ CLOSE
            </button>

            {/* AUTOMATED IMAGE ROUTER WITH FALLBACK RESOLUTION */}
            <div className="w-full h-64 md:h-80 bg-zinc-900 border-b border-zinc-800 overflow-hidden flex items-center justify-center relative">
              <img 
                src={activeProject.screenshot} 
                alt={activeProject.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Catch extensions gracefully if character casing shifts on server configurations
                  if (!e.target.src.endsWith('.png') && !activeProject.isSpecialAsset) {
                    e.target.src += '.png';
                  } else {
                    e.target.src = './finance-dashboard.png'; // Universal secure fallback
                  }
                }}
              />
              {activeProject.id === 3 && (
                <div className="absolute top-3 left-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur">
                  ⚠️ IN-PROGRESS CORE DIAGRAM SNIPPET
                </div>
              )}
            </div>

            {/* OVERVIEW CONTENT */}
            <div className="p-8">
              <span className="text-xs font-mono text-teal-400 tracking-widest uppercase">{activeProject.category}</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{activeProject.title}</h3>
              <p className="text-zinc-300 leading-relaxed text-base mb-8">{activeProject.longDescription}</p>
              
              {/* EXTERNAL ACTION LINKS */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-900">
                {activeProject.tableauLink && (
                  <a 
                    href={activeProject.tableauLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-teal-500 hover:bg-teal-400 text-black px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors"
                  >
                    View Interactive Dashboard 📊
                  </a>
                )}
                <a 
                  href={activeProject.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  View GitHub Source Code 💻
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-12 text-center text-xs font-mono text-zinc-600">
        <p>Let's turn raw observations into active strategy.</p>
      </footer>

    </div>
  );
}
