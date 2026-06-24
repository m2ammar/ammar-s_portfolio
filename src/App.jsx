import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, BarChart2, ExternalLink, X } from 'lucide-react';

const EMAIL = 'ma9731501@gmail.com';
const TABLEAU = 'https://public.tableau.com/app/profile/muhammad.ammar.saleem/vizzes';

const projects = [
  {
    id: 1,
    title: 'PakMart Retail Analytics',
    category: 'SQL',
    year: '2026',
    image: '/pakmart-ss.png',
    tags: ['MySQL', 'Tableau', 'Stored Procedures', 'Window Functions'],
    desc: 'A retail chain simulation tracking 7,000+ sales rows across 6 Pakistani cities. Built a stored procedure to auto-generate transactions mapped to local calendar events, then used RANK(), DENSE_RANK(), and LAG() to answer 9 business questions — promotion impact, MoM revenue shifts, top customers, and store rankings.',
    github: 'https://github.com/m2ammar/PakMart_Retail_Analysis',
    tableau: TABLEAU,
  },
  {
    id: 2,
    title: 'Global Healthcare System',
    category: 'SQL',
    year: '2026',
    image: '/global-dashboard-png.png',
    tags: ['MySQL', 'Tableau', 'Chained CTEs', 'Multi-JOIN'],
    desc: '19-table relational database mapping health KPIs across 197 countries — mortality rates, healthcare spending, vaccination coverage, pandemic response, and more. The flagship SQL query chains 4 CTEs to produce a country-level scorecard comparing spending tier against life expectancy status in a single output.',
    github: 'https://github.com/m2ammar/Global-Healthcare-System',
    tableau: TABLEAU,
  },
  {
    id: 3,
    title: 'Pakistan Financial Services',
    category: 'SQL',
    year: '2026',
    image: '/finance-dashboard.png',
    tags: ['MySQL', 'Tableau', 'Audit Logging', 'Subqueries'],
    desc: '9-table banking simulation with 500 customers, 30 branches across 7 cities, and 150 employees. Covers savings/current/fixed accounts, loans with payment history, credit cards, and an audit log tracking changes across all entities. Outputs feed directly into a Tableau executive dashboard.',
    github: 'https://github.com/m2ammar/Pakistan-Financial-Services',
    tableau: TABLEAU,
  },
  {
    id: 4,
    title: 'Pakistan Textile Export Analysis',
    category: 'SQL',
    year: '2025',
    image: '/pak-textile.png',
    tags: ['MySQL', 'Tableau', 'Real Data', 'YoY Analysis'],
    desc: 'Built on real data from the Pakistan Textile Council and Pakistan Bureau of Statistics. Tracks quarterly export values and volumes from 2021–2025 across product categories and destination countries. Key finding: North America dominates exports, and value-added products consistently outperform raw textiles.',
    github: 'https://github.com/m2ammar/Pakistan-textile-export-analysis',
    tableau: TABLEAU,
  },
  {
    id: 5,
    title: 'Payroll Management System',
    category: 'Java',
    year: '2026',
    image: '/PayrollManagement.png',
    tags: ['Java', 'JavaFX', 'OOP', 'MVC'],
    desc: 'Desktop HR application built with strict MVC architecture. Polymorphism handles salary calculation across Full-Time, Part-Time, and Contract employees. Role-based access control separates SuperAdmin, SubAdmin, and Employee views. Includes leave request workflow, payslip generation, and CSV persistence across 28 seeded employees. Scored 10/10 at university viva.',
    github: 'https://github.com/m2ammar/Payroll-Management-System',
  },
  {
    id: 6,
    title: 'Vehicle Rental System',
    category: 'Java',
    year: '2025',
    image: '/Home_vehicle.png',
    tags: ['Java', 'JavaFX', 'GUI', 'File I/O'],
    desc: 'JavaFX desktop application for managing vehicle bookings. Users select a vehicle, enter rental duration, and get an automatically calculated cost. Focused on clean separation of UI from backend logic, input validation, and error handling.',
    github: 'https://github.com/m2ammar/VehicleRentalSystem',
  },
  {
    id: 7,
    title: '3-Floor Elevator Controller',
    category: 'DLD',
    year: '2026',
    image: '/Elevator_Controller.png',
    tags: ['Digital Logic', 'Sequential Circuits', 'Boolean Algebra', 'TinkerCad'],
    desc: 'Hardware-level finite state machine built on a breadboard and simulated in TinkerCad. Current floor encoded as 2-bit state (Q1Q0); floor requests use one-hot encoding (F1F2F3). Boolean equations derived from a 9-combination truth table drive the Up, Down, and Stop outputs. A 7447 decoder and 7-segment display show the current floor in real time.',
    github: 'https://github.com/m2ammar',
  },
];

const TABS = ['All', 'SQL', 'Java', 'DLD'];

export default function App() {
  const [tab, setTab] = useState('All');
  const [page, setPage] = useState('Work');
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
  }, [modal]);

  const filtered = tab === 'All' ? projects : projects.filter(p => p.category === tab);

  const ho = (v) => () => setHovered(v);

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f0f0f2] font-sans antialiased relative overflow-x-hidden">

      {/* Cursor */}
      <motion.div
        className="fixed w-7 h-7 rounded-full border border-white/30 pointer-events-none z-[999] hidden md:block"
        animate={{ x: mouse.x - 14, y: mouse.y - 14, scale: hovered ? 2 : 1 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.12 }}
      />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-7 flex justify-between items-center relative z-40">
        <button onClick={() => setPage('Work')} onMouseEnter={ho(true)} onMouseLeave={ho(false)} className="text-left">
          <span className="font-semibold text-base tracking-tight text-white">Muhammad Ammar Saleem</span>
          <span className="block text-[10px] font-mono text-zinc-500 tracking-widest uppercase mt-0.5">Data Scientist</span>
        </button>
        <div className="flex items-center gap-7 text-sm font-mono text-zinc-400">
          {['Work', 'About'].map(p => (
            <button key={p} onClick={() => setPage(p)} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
              className={`transition-colors hover:text-white ${page === p ? 'text-white' : ''}`}>
              {p}
            </button>
          ))}
          <a href={`mailto:${EMAIL}`} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
            className="bg-white text-black text-xs font-sans font-medium px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Pages */}
      <AnimatePresence mode="wait">
        {page === 'Work' ? (
          <motion.main key="work"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="max-w-6xl mx-auto px-6 pb-28 relative z-30">

            {/* Hero */}
            <div className="pt-14 pb-20 max-w-3xl">
              <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.08] tracking-tight text-white mb-6">
                A closer look at the work<br />
                <span className="italic text-zinc-400 font-serif">I've built.</span>
              </h1>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
                SQL databases, BI dashboards, Java desktop apps, and digital logic — built independently from scratch.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-12">
              {TABS.map(t => (
                <button key={t} onClick={() => setTab(t)} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                  className={`px-5 py-1.5 rounded-full text-xs font-mono border transition-all duration-200
                    ${tab === t ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600'}`}>
                  {t}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map(p => (
                  <motion.div key={p.id} layout
                    initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}
                    onClick={() => setModal(p)} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300">

                    {/* Image */}
                    <div className="w-full h-52 overflow-hidden bg-zinc-900">
                      <img src={p.image} alt={p.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Card body */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{p.category} · {p.year}</span>
                        <ExternalLink size={13} className="text-zinc-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-zinc-200 transition-colors">{p.title}</h3>
                      <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {p.tags.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.main>

        ) : (
          <motion.div key="about"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto px-6 pt-16 pb-28 relative z-30">

            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-5">About Me</p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-light text-white tracking-tight leading-tight mb-14 max-w-2xl">
              Data Science student.<br />
              <span className="italic font-serif text-zinc-400">Self-taught from zero.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-sm font-light leading-relaxed">
              <div className="md:col-span-7 space-y-5 text-zinc-400">
                <p>
                  I'm Ammar, a Data Science student at KSBL Karachi. I began my university journey in September 2025 with no prior computing background. Since then, I've independently learned Java, SQL, Python, Git/GitHub, and Tableau — building practical projects that extend beyond classroom assignments.
                </p>
                <p>
                  My portfolio includes a Global Healthcare System database covering 197 countries and 19 relational tables, a Pakistan Financial Services analytics project, PakMart Retail Analytics, and a JavaFX Payroll Management System. Through these projects, I've developed experience in database design, data analysis, business intelligence, dashboard development, and problem-solving.
                </p>
                <p>
                  I enjoy transforming raw data into meaningful insights and building solutions that address real-world business challenges. My interests include data analytics, business intelligence, data visualization, and the foundations of machine learning.
                </p>
                <blockquote className="border-l-2 border-zinc-700 pl-4 py-1 italic font-serif text-zinc-300 text-base my-6">
                  I believe consistency matters more than motivation. Rather than waiting until I feel ready, I learn by building, experimenting, and continuously improving one project at a time.
                </blockquote>
              </div>

              <div className="md:col-span-5 space-y-7 font-mono text-xs">
                <div>
                  <span className="text-white font-sans font-medium text-sm block mb-1.5">Skills</span>
                  <span className="text-zinc-500">SQL · MySQL · Tableau · Excel · Java · JavaFX · Python · Git · GitHub</span>
                </div>
                <div>
                  <span className="text-white font-sans font-medium text-sm block mb-1.5">Education</span>
                  <span className="text-zinc-500">BSCS Data Science · KSBL Karachi · 2nd Semester</span>
                </div>
                <div>
                  <span className="text-white font-sans font-medium text-sm block mb-1.5">Location</span>
                  <span className="text-zinc-500">Karachi, Pakistan</span>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <a href="https://www.linkedin.com/in/muhammad-ammar-b533a0323/" target="_blank" rel="noreferrer"
                    onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                    className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a href="https://github.com/m2ammar" target="_blank" rel="noreferrer"
                    onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                    className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                  <a href={TABLEAU} target="_blank" rel="noreferrer"
                    onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                    className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <BarChart2 size={14} /> Tableau Public
                  </a>
                  <a href={`mailto:${EMAIL}`}
                    onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                    className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={14} /> {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-[#0a0a0c] relative z-40">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">Let's work together</span>
            <a href={`mailto:${EMAIL}`} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
              className="text-xl font-light font-serif text-zinc-300 hover:text-white transition-colors">
              {EMAIL}
            </a>
          </div>
          <div className="flex gap-3">
            {[
              { icon: <Linkedin size={15} />, url: 'https://www.linkedin.com/in/muhammad-ammar-b533a0323/' },
              { icon: <Github size={15} />, url: 'https://github.com/m2ammar' },
              { icon: <BarChart2 size={15} />, url: TABLEAU },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer"
                onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setModal(null)}>
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }} transition={{ duration: 0.3 }}
              className="bg-[#111113] border border-zinc-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}>

              <button onClick={() => setModal(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <X size={14} />
              </button>

              <div className="w-full h-60 overflow-hidden bg-zinc-900">
                <img src={modal.image} alt={modal.title} className="w-full h-full object-cover object-top" />
              </div>

              <div className="p-8">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{modal.category} · {modal.year}</span>
                <h2 className="text-2xl font-medium text-white mt-2 mb-4">{modal.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{modal.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {modal.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-6 border-t border-zinc-900">
                  <a href={modal.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
                    <Github size={13} /> View on GitHub
                  </a>
                  {modal.tableau && (
                    <a href={modal.tableau} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 border border-zinc-700 text-zinc-300 text-xs font-medium px-4 py-2 rounded-lg hover:border-zinc-500 hover:text-white transition-colors">
                      <BarChart2 size={13} /> Tableau Dashboard
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
