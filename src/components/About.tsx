import { MapPin, Mail, Phone } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-7xl font-bold shadow-xl shadow-teal-500/20">
                {profile.name.charAt(0)}
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-semibold text-sm shadow-lg">
                {profile.title.split(' ')[0]}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Turning ideas into polished products
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {profile.summary}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={18} className="text-teal-600" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-teal-600" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-teal-600 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-teal-600" />
                <span>{profile.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
