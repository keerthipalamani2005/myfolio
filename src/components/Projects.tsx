import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Things I've built
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-teal-500/30 transition-all duration-300 hover:scale-[1.02]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 120}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                  {project.title.charAt(0)}
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-500 group-hover:text-teal-400 transition-colors"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
