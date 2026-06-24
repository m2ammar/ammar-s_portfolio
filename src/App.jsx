import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, BarChart2, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [activePage, setActivePage] = useState('Work'); 
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "PakMart Retail Analytics",
      category: "SQL",
      subtitle: "Relational Sales Performance Engine",
      desc: "A custom transactional database tracking retail performance. Generates 7,000+ unique ledger entries procedurally mapped to Pakistani calendar events. Uses Window Functions (RANK, DENSE_RANK, LAG) to evaluate month-over-month shifts inside MySQL before exporting metrics to a live Tableau view.",
      tech: ["MySQL", "Tableau Public", "Stored Procedures", "Window Functions"],
      link: "https://github.com/m2ammar"
    },
    {
      id: 2,
      title: "Global Healthcare Analytics System",
      category: "SQL",
      subtitle: "Cross-Border Unified Metric Ledger",
      desc: "An enterprise data network structured across 19 interconnected tables covering WHO/World Bank KPIs across 197 countries. Processes multi-stage chained Common Table Expressions (CTEs) and categorical conditional filtering to map global spending velocity against demographic lifespans.",
      tech: ["MySQL", "Tableau", "Chained CTEs", "Data Normalization"],
      link: "https://github.com/m2ammar"
    },
    {
      id: 3,
      title: "Pakistan Financial Services Group",
      category: "SQL",
      subtitle: "Institutional Banking Model & Analytics Hub",
      desc: "A highly normalized 9-table financial simulation platform tracking asset distribution for 500+ active client profiles across 30 corporate branches. Features secure audit logging triggers and subquery aggregation arrays mapped directly to a live executive Tableau dashboard.",
      tech: ["MySQL", "Tableau", "Audit Logging", "Relational Constraints"],
      link: "https://github.com/m2ammar"
    },
    {
      id: 4,
      title: "Pakistan Textile Export Analysis",
      category: "SQL",
      subtitle: "B2B Manufacturing & Supply Chain Schema",
      desc: "A real-world market intelligence repository evaluating international trading parameters from the Pakistan Textile Council (PTC). Isolates macroeconomic volatility variables—such as dynamic resource cost adjustments—by joining global factory production logs with wholesale invoices.",
      tech: ["MySQL", "Tableau", "Data Aggregation", "Trend Forecasting"],
      link: "https://github.com/m2ammar"
    },
    {
      id: 5,
      title: "PayrollOS Management System",
      category: "Java",
      subtitle: "MVC Enterprise Architecture App",
      desc: "An advanced desktop HR application engineered via strict Model-View-Controller patterns. Employs polymorphism to execute dynamic salary calculation across Full-Time, Part-Time, and Contract models. Implements multi-tier Role-Based Access Control and a custom leave authorization engine over local CSV persistence layers. Scored 10/10 at university viva.",
      tech: ["Java", "JavaFX GUI", "Polymorphism / OOP", "MVC Architecture"],
      link: "https://github.com/m2ammar"
    },
    {
      id: 6,
      title: "Wheels on Deals Rental Application",
      category: "Java",
      subtitle: "Clean Architecture Component Processing",
      desc: "A modular asset reservation management system focusing on complete decoupling of graphical user interface panels from background business computing layers. Configured with robust UI state forms, programmatic data verification loops, and dynamic total reservation cost calculating pipelines.",
      tech: ["Java", "JavaFX", "Data Validation", "State Management"],
      link: "https://github.com/m2ammar"
    },
    {
      id: 7,
      title: "3-Floor Elevator Controller",
      category: "Elevator Controller",
      subtitle: "Logic Gate Level State Automation",
      desc: "A hardware-level finite state machine tracking real-time positional coordinate sets via synchronous 2-bit flip-flop memory tracking states (Q1Q0) and one-hot button inputs (F1, F2, F3). Leverages Boolean logic reduction equations to drive physical 7-segment digital display outputs and safe layout motor vector variables.",
      tech: ["Digital Logic Design", "Sequential Memory", "Boolean Optimization", "Flip-Flops"],
      link: "https://github.com/m2ammar"
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#030303] text-[#f5f5f7] relative overflow-hidden font-sans">
      
      {/* Custom Trailing Cursor */}
      <motion.div 
        className="fixed w-8 h-8 rounded-full border border-white/40 pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: cursorHovered ? 1.8 : 1,
          backgroundColor: cursorHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0)"
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center relative z-40">
        <div 
          className="cursor-pointer group"
          onClick={() => setActivePage('Work')}
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
        >
          <span className="font-medium tracking-tight text-lg text-white">Muhammad Ammar Saleem</span>
          <span className="text-zinc-600 block text-xs tracking-widest uppercase transition-colors group-hover:text-zinc-400 font-mono mt-0.5">// Data Scientist</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-mono text-zinc-400">
          <button 
            onClick={() => setActivePage('Work')}
            className={`transition-colors hover:text-white ${activePage === 'Work' ? 'text-white font-medium underline underline-offset-4' : ''}`}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            Work
          </button>
          <button 
            onClick={() => setActivePage('About')}
            className={`transition-colors hover:text-white ${activePage === 'About' ? 'text-white font-medium underline underline-offset-4' : ''}`}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            About
          </button>
          <a 
            href="mailto:muhammadammar@example.com" 
            className="bg-white text-black px-4 py-1.5 rounded-full font-sans font-medium text-xs hover:bg-zinc-200 transition-all transform hover:scale-105"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* PAGE CONTAINER */}
      <AnimatePresence mode="wait">
        {activePage === 'Work' ? (
          <motion.main 
            key="work-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto px-6 pt-16 pb-24 relative z-30"
          >
            {/* HERO SECTION */}
            <div className="max-w-4xl mb-24">
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8">
                Shaping core <span className="italic font-serif text-zinc-400">database systems</span>, complex analytics, and functional software models.
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Independent programmer executing robust system data pipelines. Specializing in highly optimized SQL relational engines, interactive BI dashboarding layers, and clean Java environments.
              </p>
            </div>

            {/* TAB CONTROLS */}
            <div className="flex gap-2 mb-16 border-b border-zinc-900 pb-4">
              {['All', 'SQL', 'Java', 'Elevator Controller'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-zinc-900 text-white border border-zinc-800' 
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* PROJECT GRID */}
            <div className="space-y-24">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-zinc-900 group"
                  >
                    <div className="md:col-span-4 space-y-4">
                      <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase block">// {project.category} Core Resource</span>
                      <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-zinc-300 transition-colors">{project.title}</h3>
                      <p className="text-sm font-mono text-zinc-500">{project.subtitle}</p>
                      
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="bg-zinc-950 text-zinc-500 border border-zinc-900 px-2 py-0.5 rounded text-[10px] font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-6 flex flex-col justify-between">
                      <p className="text-zinc-400 text-sm leading-relaxed font-light mt-1">
                        {project.desc}
                      </p>
                    </div>

                    <div className="md:col-span-2 flex items-start md:justify-end">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45"
                        onMouseEnter={() => setCursorHovered(true)}
                        onMouseLeave={() => setCursorHovered(false)}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.main>
        ) : (
          /* ABOUT PAGE */
          <motion.div 
            key="about-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto px-6 pt-20 pb-24 relative z-30"
          >
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">// THE PERSONAL CHRONICLE</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-12 max-w-2xl leading-tight">
              A self-taught analyst bridging the gap between rigorous <span className="italic font-serif text-zinc-400">database engineering</span> and predictive algorithms.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-zinc-400 font-light leading-relaxed text-sm">
              <div className="md:col-span-7 space-y-6">
                <p>
                  In September 2025, I entered the computer science field at KSBL with zero computational baseline records. Rather than aligning my progress metrics directly with linear classroom structures, I chose an aggressive, deployment-first approach to systems engineering.
                </p>
                <p>
                  Over the past year, I have independently reverse-engineered relational database schemas, deployed custom transactional desktop systems, and designed enterprise BI dashboards from scratch. I manipulate code as a container to isolate business inefficiencies and communicate numbers with narrative clarity.
                </p>
                <div className="border-l-2 border-zinc-800 pl-4 py-1 italic font-serif text-base text-zinc-300 my-8">
                  "Consistency scales. Motivation doesn't." I avoid building products strictly when inspired; I execute pipelines to understand constraints and consistently ship real assets.
                </div>
              </div>

              <div className="md:col-span-5 md:pl-8 space-y-6 font-mono text-xs">
                <div>
                  <span className="text-white block font-sans font-medium text-sm mb-1">Target Core Focus</span>
                  <span className="text-zinc-500 block">Business Intelligence · Data Architecture · LLM System Testing</span>
                </div>
                <div>
                  <span className="text-white block font-sans font-medium text-sm mb-1">Active Toolkit</span>
                  <span className="text-zinc-500 block">MySQL · Java / JavaFX · Python · Tableau BI · Git Engineering</span>
                </div>
                <div>
                  <span className="text-white block font-sans font-medium text-sm mb-1">Current Coordinates</span>
                  <span className="text-zinc-500 block">Karachi, Pakistan — Seeking Global Remote Allocations</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-zinc-950 bg-[#050505] relative z-40">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">LET'S BUILD LOGIC TOGETHER</span>
            <a 
              href="mailto:muhammadammar@example.com" 
              className="text-xl md:text-2xl font-light font-serif text-zinc-300 hover:text-white transition-colors"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              m.ammar.saleem@example.com
            </a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Linkedin size={16} />, url: "https://www.linkedin.com/in/muhammad-ammar-b533a0323/" },
              { icon: <Github size={16} />, url: "https://github.com/m2ammar" },
              { icon: <BarChart2 size={16} />, url: "https://public.tableau.com/" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors"
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
