import { Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            My professional journey
          </h2>
        </div>

        <div className="relative">
          {experiences.length > 1 && (
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-slate-200" />
          )}

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-16 pb-12 last:pb-0 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(20px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-600/20 ring-4 ring-white">
                <Briefcase size={18} className="text-white" />
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-500 font-medium mb-3">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
