import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Mariana S.',
    role: 'Aracaju, SE',
    rating: 5,
    text: 'Atendimento impecável! Fui comprar meu primeiro iPhone e fui super bem atendida. O pessoal explicou tudo com calma e me ajudou a escolher o modelo certo. Super recomendo!',
    date: 'Jan 2026',
  },
  {
    name: 'Lucas A.',
    role: 'Aracaju, SE',
    rating: 5,
    text: 'Comprei um seminovo e fiquei impressionado com a qualidade. O aparelho veio perfeito, com garantia e tudo funcionando. Preço justo e atendimento de primeira.',
    date: 'Dez 2025',
  },
  {
    name: 'Fernanda R.',
    role: 'Aracaju, SE',
    rating: 5,
    text: 'Levei meu iPhone para trocar a tela e o serviço foi rápido e profissional. Ficou como novo! Ambiente da loja é muito agradável e organizado.',
    date: 'Nov 2025',
  },
  {
    name: 'Rafael M.',
    role: 'São Cristóvão, SE',
    rating: 5,
    text: 'Melhor loja de iPhone de Aracaju sem dúvidas. Ambiente sofisticado, equipe muito competente e preço competitivo. Já indiquei para vários amigos.',
    date: 'Out 2025',
  },
  {
    name: 'Ana Paula L.',
    role: 'Aracaju, SE',
    rating: 5,
    text: 'Excelente experiência de compra. A equipe tem muito conhecimento técnico e tirou todas as minhas dúvidas antes da compra. O iPhone chegou muito rápido.',
    date: 'Set 2025',
  },
  {
    name: 'Carlos E.',
    role: 'Itabaiana, SE',
    rating: 5,
    text: 'Parcela em até 18x sem juros! Isso foi o diferencial pra mim. Além disso, a loja transmite muita confiança. Produto de qualidade e entrega rápida.',
    date: 'Ago 2025',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section ref={sectionRef} className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label !text-black/30">07</span>
              <div className="w-6 h-px bg-black/20" />
              <span className="section-label !text-black/30">AVALIAÇÕES</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-black tracking-tight leading-[1.05]" style={{ fontWeight: 800 }}>
              Quem compra,<br />recomenda.
            </h2>
          </div>

          {/* Google rating */}
          <div className="reveal flex items-center gap-5 md:pb-2">
            <div className="text-right">
              <div className="font-display text-5xl font-800 text-black leading-none" style={{ fontWeight: 800 }}>5.0</div>
              <div className="flex justify-end mt-1">
                <StarRating count={5} />
              </div>
              <div className="text-black/40 text-xs mt-1">30 avaliações no Google</div>
            </div>
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <path fill="#4285F4" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,19.001,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-[#F5F5F5] p-6 border border-black/[0.06] cursor-pointer transition-all duration-300 ${activeIndex === i ? 'border-black/20' : ''}`}
              style={{ borderRadius: '4px' }}
              onClick={() => setActiveIndex(i)}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <StarRating count={t.rating} />
                <span className="text-black/30 text-[0.6rem] tracking-widest">{t.date}</span>
              </div>

              {/* Quote */}
              <p className="text-black/70 text-sm leading-relaxed mb-5 line-clamp-4">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                {/* Avatar initials */}
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-semibold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">{t.name}</div>
                  <div className="text-black/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
