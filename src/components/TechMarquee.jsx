import React from 'react';
import { SiMysql, SiPython, SiGit, SiGithub } from 'react-icons/si';
import { FaJava, FaFileExcel } from 'react-icons/fa';
import { BarChart2 } from 'lucide-react';

const TECHS = [
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Tableau', icon: BarChart2, color: '#E97627' },
  { name: 'Excel', icon: FaFileExcel, color: '#217346' },
  { name: 'Java', icon: FaJava, color: '#F89820' },
  { name: 'JavaFX', icon: FaJava, color: '#5382A1' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#f0f0f2' },
];

export default function TechMarquee() {
  const loopItems = [...TECHS, ...TECHS];

  return (
    <div className="w-full overflow-hidden py-10 border-y border-zinc-900">
      <div className="marquee-track flex items-center gap-4 w-max">
        {loopItems.map((t, i) => {
          const Icon = t.icon;
          return (
            <div key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/40 shrink-0">
              <Icon size={18} color={t.color} />
              <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">{t.name}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}