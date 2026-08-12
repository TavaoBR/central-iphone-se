import { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '5579999486400';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar assistência técnica para meu smartphone.')}`;

const services = [
  { number: '01', name: 'Troca de tela' },
  { number: '02', name: 'Bateria' },
  { number: '03', name: 'Diagnóstico gratuito' },
  { number: '04', name: 'Reparos' },
  { number: '05', name: 'Manutenção' },
  { number: '06', name: 'Limpeza interna' },
];

export default function Assistencia() {
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
    <section id="assistencia" ref={sectionRef} className="bg-black py-24 md:py-32 overflow-hidden relative">

      {/* Background decorative circle */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[500px] h-[500px] rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-16 w-[300px] h-[300px] rounded-full border border-white/[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <div className="relative order-2 lg:order-1 reveal">
            <div className="relative overflow-hidden rounded-sm aspect-[4/3] lg:aspect-auto lg:h-[520px]">
              <img
                src="/images/repair-tech.png"
                alt="Assistência especializada"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
              {/* Corner label */}
              <div className="absolute bottom-6 left-6">
                <div className="section-label !text-white/40 mb-2">ASSISTÊNCIA TÉCNICA</div>
                <div className="text-white/20 text-xs">Central do iPhone — Aracaju</div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 right-6 glass-dark border-premium rounded-sm p-5 backdrop-blur-xl">
              <div className="text-white/40 text-[0.6rem] uppercase tracking-widest mb-2">Satisfação</div>
              <div className="font-display text-3xl font-700 text-white mb-1" style={{ fontWeight: 700 }}>100%</div>
              <div className="text-white/30 text-xs">clientes satisfeitos</div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="section-label">05</span>
              <div className="w-6 h-px bg-white/20" />
              <span className="section-label">ASSISTÊNCIA</span>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-800 text-white tracking-tight leading-[1.05] mb-5 reveal"
              style={{ fontWeight: 800 }}
            >
              Seu iPhone em
              <br />
              <span className="text-gradient-silver">boas mãos.</span>
            </h2>

            <p className="text-white/40 text-base leading-relaxed mb-10 max-w-md reveal">
              Não somos apenas uma loja.{' '}
              <span className="text-white/60">Somos especialistas em tecnologia</span>, com técnicos qualificados e equipamentos profissionais.
            </p>

            {/* Services list */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {services.map((s, i) => (
                <div
                  key={s.number}
                  className={`flex items-center gap-3 border border-white/[0.07] p-4 rounded-sm hover:border-white/20 transition-colors duration-300 reveal reveal-delay-${i + 1}`}
                >
                  <span className="section-label !text-white/20">{s.number}</span>
                  <span className="text-white/70 text-sm font-medium">{s.name}</span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold reveal"
            >
              Solicitar assistência
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
