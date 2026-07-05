import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, BarChart2, ChevronDown } from 'lucide-react';
import TechMarquee from './TechMarquee';
import { TABLEAU } from '../data/projects';

const EMAIL = 'ma9731501@gmail.com';

export default function Home({ setPage, ho }) {
  return (
    <motion.div key="home"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="relative z-30">

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 min-h-[calc(100vh-140px)] flex flex-col justify-center relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">

          {/* Left: intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-center md:text-left">
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Data Scientist</p>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-light leading-[1.1] tracking-tight text-white mb-6">
              Muhammad Ammar Saleem
            </h1>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-9">
              Self-taught from zero. I build SQL databases, BI dashboards, and machine learning
              projects that turn raw data into real business decisions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <button onClick={() => setPage('Work')} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-colors">
                View My Work
              </button>
              <a href={`mailto:${EMAIL}`} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
                className="border border-zinc-700 text-zinc-300 text-sm font-medium px-6 py-2.5 rounded-full hover:border-zinc-500 hover:text-white transition-colors">
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Right: photo with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] flex items-center justify-center shrink-0">
            <div className="absolute inset-0 m-auto w-[110%] h-[110%] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(29,158,117,0.35) 0%, rgba(29,158,117,0.12) 40%, rgba(29,158,117,0) 70%)',
                filter: 'blur(6px)'
              }} />
            <img
              src="/ammar-s_portfolio/photo-cutout.png"
              alt="Muhammad Ammar Saleem"
              className="relative w-full h-full object-contain z-10"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown size={16} className="text-zinc-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <TechMarquee />

      {/* Download Resume */}
      <div className="text-center py-8">
        <a href="/ammar-s_portfolio/Ammar_Saleem_Resume.pdf" download
          onMouseEnter={ho(true)} onMouseLeave={ho(false)}
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white">
          Download Resume ↓
        </a>
      </div>

      {/* Contact section */}

      {/* Contact section */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-light italic font-serif text-zinc-300 mb-10">
          Let's build something.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${EMAIL}`} onMouseEnter={ho(true)} onMouseLeave={ho(false)}
            className="flex items-center gap-2 border border-zinc-800 text-zinc-400 text-sm font-mono px-5 py-2.5 rounded-full hover:text-white hover:border-zinc-600 transition-colors">
            <Mail size={15} /> Email
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ammar-b533a0323/" target="_blank" rel="noreferrer"
            onMouseEnter={ho(true)} onMouseLeave={ho(false)}
            className="flex items-center gap-2 border border-zinc-800 text-zinc-400 text-sm font-mono px-5 py-2.5 rounded-full hover:text-white hover:border-zinc-600 transition-colors">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href="https://github.com/m2ammar" target="_blank" rel="noreferrer"
            onMouseEnter={ho(true)} onMouseLeave={ho(false)}
            className="flex items-center gap-2 border border-zinc-800 text-zinc-400 text-sm font-mono px-5 py-2.5 rounded-full hover:text-white hover:border-zinc-600 transition-colors">
            <Github size={15} /> GitHub
          </a>
          <a href={TABLEAU} target="_blank" rel="noreferrer"
            onMouseEnter={ho(true)} onMouseLeave={ho(false)}
            className="flex items-center gap-2 border border-zinc-800 text-zinc-400 text-sm font-mono px-5 py-2.5 rounded-full hover:text-white hover:border-zinc-600 transition-colors">
            <BarChart2 size={15} /> Tableau
          </a>
        </div>
      </div>
    </motion.div>
  );
}