import { useEffect, useRef } from 'react';
import { Battery, HardDrive, ShieldCheck, CheckCircle2, Smartphone } from 'lucide-react';

const WHATSAPP_NUMBER = '5579999486400';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de ver os iPhones seminovos disponíveis.')}`;

const differentials = [
  {
    icon: <Smartphone size={18} />,
    title: 'Estado do aparelho',
    desc: 'Classificados por condição: bom, ótimo ou excelente.',
  },
  {
    icon: <HardDrive size={18} />,
    title: 'Armazenamento',
    desc: 'Capacidades de 64GB a 512GB disponíveis.',
  },
  {
    icon: <Battery size={18} />,
    title: 'Saúde da bateria',
    desc: 'Bateria acima de 85% ou substituída.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Garantia',
    desc: 'Todos os seminovos têm garantia da loja.',
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: 'Procedência',
    desc: 'Aparelhos verificados e de origem confiável.',
  },
];

export default function Seminovos() {
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
    <section id="seminovos" ref={sectionRef} className="bg-[#F5F5F5] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="section-label !text-black/30">04</span>
              <div className="w-6 h-px bg-black/20" />
              <span className="section-label !text-black/30">SEMINOVOS</span>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-800 text-black tracking-tight leading-[1.05] mb-5 reveal"
              style={{ fontWeight: 800 }}
            >
              Seu próximo iPhone
              <br />
              pode estar aqui.
            </h2>

            <p className="text-black/50 text-base leading-relaxed mb-10 max-w-md reveal">
              Seminovos selecionados, avaliados e preparados para você.
              Tecnologia premium com o melhor custo-benefício.
            </p>

            {/* Differentials */}
            <div className="space-y-4 mb-10">
              {differentials.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 reveal reveal-delay-${i + 1}`}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-black/50 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-black text-sm font-semibold mb-0.5">{item.title}</div>
                    <div className="text-black/40 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold reveal"
            >
              Ver seminovos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right — Visual */}
          <div className="relative reveal">
            {/* Large decorative number */}
            <div
              className="absolute -top-10 -right-5 text-[10rem] md:text-[14rem] font-display font-800 text-black/[0.04] leading-none select-none pointer-events-none"
              style={{ fontWeight: 800 }}
            >
              SE
            </div>

            {/* Phone stack visual */}
            <div className="relative">
              {/* Background card */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-black/5 rounded-sm" />

              {/* Main card */}
              <div className="relative bg-white border border-black/[0.06] p-8 rounded-sm">
                {/* Top label */}
                <div className="flex items-center justify-between mb-8">
                  <span className="section-label !text-black/30">SEMINOVO SELECIONADO</span>
                  <div className="w-2 h-2 rounded-full bg-black/20" />
                </div>

                {/* Specs */}
                <div className="mb-8">
                  <h3 className="font-display text-3xl font-700 text-black mb-1" style={{ fontWeight: 700 }}>
                    iPhone 14 Pro
                  </h3>
                  <p className="text-black/40 text-sm">256GB • Preto espacial</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Estado', value: 'Excelente' },
                    { label: 'Bateria', value: '91%' },
                    { label: 'Garantia', value: '3 meses' },
                    { label: 'Procedência', value: 'Verificada' },
                  ].map((m) => (
                    <div key={m.label} className="bg-[#F5F5F5] rounded-sm p-4">
                      <div className="text-black/30 text-[0.6rem] uppercase tracking-widest mb-1">{m.label}</div>
                      <div className="text-black text-sm font-semibold">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-end justify-between border-t border-black/[0.06] pt-6">
                  <div>
                    <div className="text-black/30 text-xs mb-1">Preço</div>
                    <div className="font-display text-3xl font-800 text-black" style={{ fontWeight: 800 }}>
                      R$ 4.299
                    </div>
                    <div className="text-black/30 text-xs mt-1">ou 18× sem juros</div>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Tenho interesse no iPhone 14 Pro 256GB seminovo. Ainda está disponível?')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark px-5 py-3 rounded-sm text-xs font-semibold"
                  >
                    Tenho interesse
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
