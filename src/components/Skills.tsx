import { skillCategories } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code2, Server, Database, Wrench, Users } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  'Soft Skills': Users,
};

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Technologies I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.category] ?? Code2;
            return (
              <div
                key={cat.category}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.6s ease ${i * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                    <Icon size={20} className="text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
