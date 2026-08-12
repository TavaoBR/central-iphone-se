import { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '5579999486400';
const WHATSAPP_MSG = encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os iPhones disponíveis.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function FinalCTA() {
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

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="bg-black py-28 md:py-40 overflow-hidden relative">

      {/* Large decorative circles from logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outermost ring */}
        <div className="absolute w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full border border-white/[0.03]" />
        {/* Middle ring - incomplete */}
        <div
          className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-white/[0.05] animate-spin-slow"
          style={{
            borderStyle: 'dashed',
            borderWidth: '1px',
            borderColor: 'rgba(255,255,255,0.04)',
          }}
        />
        {/* Inner ring */}
        <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-white/[0.07]" />
        {/* Core glow */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-white/[0.02] blur-3xl" />
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">

        {/* Logo mark */}
        <div className="flex justify-center mb-10 reveal">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="1" strokeDasharray="140 35" strokeLinecap="round" opacity="0.4" />
              <circle cx="32" cy="32" r="18" stroke="white" strokeWidth="0.8" opacity="0.2" />
              <line x1="32" y1="4" x2="32" y2="60" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
              <circle cx="32" cy="32" r="4" fill="white" opacity="0.8" />
              <circle cx="32" cy="32" r="1.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-8 reveal">
          <div className="w-12 h-px bg-white/20" />
          <span className="section-label">CENTRAL DO IPHONE</span>
          <div className="w-12 h-px bg-white/20" />
        </div>

        {/* Headline */}
        <h2
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-800 text-white tracking-tight leading-[1.0] mb-6 reveal"
          style={{ fontWeight: 800 }}
        >
          Seu próximo
          <br />
          <span className="text-gradient-silver">iPhone</span> está aqui.
        </h2>

        {/* Supporting text */}
        <p className="text-white/40 text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto reveal">
          Escolha seu aparelho, tire suas dúvidas
          <br />
          e fale com nossa equipe.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <button
            onClick={() => handleNav('#produtos')}
            className="btn-primary px-8 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2 min-w-[180px] justify-center"
          >
            Ver iPhones
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2 min-w-[180px] justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        {/* Location tag */}
        <div className="mt-12 reveal">
          <span className="text-white/20 text-xs tracking-[0.2em] uppercase">
            Aracaju — Sergipe — Brasil
          </span>
        </div>
      </div>
    </section>
  );
}
