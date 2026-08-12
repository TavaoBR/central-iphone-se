import { useEffect, useRef } from 'react';
import { ShieldCheck, Zap, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '5579999486400';
const WHATSAPP_MSG = encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os iPhones disponíveis.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, ctaRef.current, imgRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 180);
    });
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center overflow-x-clip"
    >
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.04] animate-spin-slow" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/[0.06]" />
        {/* Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl animate-ambient" />
        {/* Bottom circle */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center min-h-screen py-28 lg:py-0">

          {/* Left — Text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-white/30" />
              <span className="section-label">ARACAJU / SE — 2026</span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-800 tracking-tight leading-[1.0] text-white mb-6"
              style={{ fontWeight: 800 }}
            >
              Seu próximo
              <br />
              <span className="text-gradient-silver">iPhone</span>
              <br />
              está aqui.
            </h1>

            {/* Sub */}
            <p
              ref={subRef}
              className="text-white/50 text-base md:text-lg font-normal leading-relaxed mb-10 max-w-md"
            >
              iPhones novos e seminovos, acessórios premium
              <br className="hidden md:block" />
              e assistência especializada em Aracaju.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 mb-12">
              <button
                onClick={() => handleNav('#produtos')}
                className="btn-primary px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
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
                className="btn-secondary px-7 py-3.5 rounded-full text-sm font-medium inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: <Star size={13} />, text: 'Produtos selecionados' },
                { icon: <ShieldCheck size={13} />, text: 'Compra segura' },
                { icon: <Zap size={13} />, text: 'Entrega rápida' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/40 text-xs">
                  <span className="text-white/30">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product image */}
          <div
            ref={imgRef}
            className="flex items-center justify-center order-1 lg:order-2 relative"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-white/[0.05]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-white/[0.07]" />
            </div>
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 rounded-full bg-white/[0.04] blur-3xl" />
            </div>

            {/* Phone image + floating badges (anchored to image bounds) */}
            <div className="relative z-10">
              <div className="animate-float">
                <img
                  src="/images/iphone-hero.png"
                  alt="iPhone premium"
                  className="w-48 md:w-64 lg:w-72 xl:w-80 object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 40px 80px rgba(255,255,255,0.06)) drop-shadow(0 0 60px rgba(255,255,255,0.03))',
                  }}
                />
              </div>

              {/* Floating badge - condition */}
              <div className="absolute top-[2%] left-full ml-5 md:ml-8 lg:ml-12 xl:ml-16 z-20 glass-light border-premium rounded-2xl px-4 py-3 backdrop-blur-xl pointer-events-none whitespace-nowrap hidden md:block">
                <div className="text-white/40 text-[0.6rem] tracking-widest uppercase mb-1">Disponível</div>
                <div className="text-white text-sm font-semibold font-display">iPhone 17 Pro</div>
                <div className="text-white/40 text-xs mt-0.5">A partir de R$ 7.200</div>
              </div>

              {/* Floating badge - rating */}
              <div className="absolute bottom-[4%] right-full mr-5 md:mr-8 lg:mr-12 xl:mr-16 z-20 glass-light border-premium rounded-2xl px-4 py-3 backdrop-blur-xl pointer-events-none whitespace-nowrap hidden md:block">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-white text-sm font-semibold">5.0</div>
                <div className="text-white/40 text-[0.65rem]">Google Reviews</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="section-label">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
