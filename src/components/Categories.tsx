import { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '5579999486400';

const categories = [
  {
    id: 'iphones',
    number: '01',
    title: 'iPhones',
    subtitle: 'Smartphones novos e seminovos.',
    description: 'Do iPhone 13 ao 16 Pro Max. Cada aparelho verificado, testado e pronto para você.',
    image: 'https://images.pexels.com/photos/13570135/pexels-photo-13570135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cta: 'Ver iPhones',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de ver os iPhones disponíveis.')}`,
  },
  {
    id: 'acessorios',
    number: '02',
    title: 'Acessórios',
    subtitle: 'Proteção, carregamento e mais.',
    description: 'Cases, películas, carregadores, cabos e tudo para completar a experiência do seu iPhone.',
    image: '/images/accessories-bg.png',
    cta: 'Ver acessórios',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber quais acessórios estão disponíveis.')}`,
  },
  {
    id: 'assistencia',
    number: '03',
    title: 'Assistência',
    subtitle: 'Cuidados especializados.',
    description: 'Troca de tela, bateria, diagnóstico gratuito e reparos com garantia.',
    image: '/images/repair-tech.png',
    cta: 'Solicitar assistência',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar assistência técnica para meu smartphone.')}`,
  },
];

export default function Categories() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="categorias" ref={sectionRef} className="bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">03</span>
            <div className="w-6 h-px bg-white/20" />
            <span className="section-label">CATEGORIAS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-white tracking-tight leading-[1.05]" style={{ fontWeight: 800 }}>
            Tudo para o seu
            <br />
            <span className="text-gradient-silver">universo tech.</span>
          </h2>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`category-card group relative overflow-hidden reveal reveal-delay-${i + 1}`}
              style={{
                borderRadius: '4px',
                height: i === 0 ? undefined : undefined,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: i === 0 ? '480px' : '380px' }}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="category-image w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                {/* Dark tint */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Content on image */}
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="section-label !text-white/30">{cat.number}</span>
                    {/* Arrow */}
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div>
                    <p className="text-white/50 text-xs mb-2 font-medium">{cat.subtitle}</p>
                    <h3 className="font-display text-3xl font-700 text-white mb-3 tracking-tight" style={{ fontWeight: 700 }}>
                      {cat.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
                      {cat.description}
                    </p>
                    <a
                      href={cat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white text-xs font-semibold border-b border-white/20 pb-0.5 hover:border-white/60 transition-colors duration-200"
                    >
                      {cat.cta}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
