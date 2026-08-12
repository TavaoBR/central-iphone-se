import { useEffect, useRef } from 'react';
import { Star, CreditCard, Truck, Wrench, Award } from 'lucide-react';

const stats = [
  {
    icon: <Star size={20} />,
    value: '5.0 ★',
    label: 'Google Reviews',
    sub: '30+ avaliações',
  },
  {
    icon: <CreditCard size={20} />,
    value: 'Até 18×',
    label: 'Parcelamento',
    sub: 'sem juros no cartão',
  },
  {
    icon: <Truck size={20} />,
    value: 'Rápido',
    label: 'Entrega',
    sub: 'em Aracaju e região',
  },
  {
    icon: <Wrench size={20} />,
    value: 'Expert',
    label: 'Assistência',
    sub: 'técnicos especializados',
  },
  {
    icon: <Award size={20} />,
    value: 'Garantia',
    label: 'em todos',
    sub: 'os produtos',
  },
];

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F5F5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12 reveal">
          <span className="section-label !text-black/30">06</span>
          <div className="w-6 h-px bg-black/20" />
          <span className="section-label !text-black/30">DIFERENCIAIS</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} group`}
            >
              {/* Top line */}
              <div className="w-8 h-px bg-black/20 mb-5 group-hover:w-16 transition-all duration-500" />

              {/* Icon */}
              <div className="text-black/30 mb-3">{stat.icon}</div>

              {/* Value */}
              <div className="font-display text-2xl md:text-3xl font-700 text-black tracking-tight leading-none mb-1" style={{ fontWeight: 700 }}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-black text-sm font-semibold mb-0.5">{stat.label}</div>
              <div className="text-black/40 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
