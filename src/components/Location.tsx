import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const WHATSAPP_NUMBER = '5579999486400';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com a loja.')}`;
const MAPS_URL = 'https://maps.google.com/?q=Rua+Urquiza+Leal+1080+Aracaju+SE';

const info = [
  {
    icon: <MapPin size={18} />,
    label: 'Endereço',
    value: 'Rua Urquiza Leal, 1080\nGaleria Alvorada\nAracaju — SE',
  },
  {
    icon: <Clock size={18} />,
    label: 'Horário',
    value: 'Seg–Sex: 09h às 18h\nSábado: 09h às 14h',
  },
  {
    icon: <Phone size={18} />,
    label: 'Contato',
    value: 'WhatsApp disponível\nResponsta rápida',
  },
];

export default function Location() {
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
    <section id="localizacao" ref={sectionRef} className="bg-[#F5F5F5] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Info */}
          <div>
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="section-label !text-black/30">09</span>
              <div className="w-6 h-px bg-black/20" />
              <span className="section-label !text-black/30">LOCALIZAÇÃO</span>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-800 text-black tracking-tight leading-[1.05] mb-5 reveal"
              style={{ fontWeight: 800 }}
            >
              Venha conhecer
              <br />
              a Central.
            </h2>

            <p className="text-black/50 text-base leading-relaxed mb-10 reveal">
              Uma loja real, um time especializado,
              <br />no coração de Aracaju.
            </p>

            {/* Info items */}
            <div className="space-y-6 mb-10">
              {info.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 reveal reveal-delay-${i + 1}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-black/40 text-xs uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-black text-sm font-medium leading-relaxed whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 reveal">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
              >
                Como chegar
                <ExternalLink size={14} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-black !border-black/20 hover:!bg-black/5 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium"
              >
                Falar com a loja
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Map visual */}
          <div className="reveal">
            {/* Map embed placeholder styled premium */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              <iframe
                title="Central do iPhone - Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8!2d-37.0731!3d-10.9195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzEwLjIiUyAzN8KwMDQnMjMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 grayscale contrast-125"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                  <div>
                    <div className="text-white text-sm font-semibold">Central do iPhone</div>
                    <div className="text-white/60 text-xs">Galeria Alvorada — Aracaju, SE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store image */}
            <div className="mt-4 overflow-hidden rounded-sm">
              <img
                src="https://images.pexels.com/photos/36285541/pexels-photo-36285541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Loja Central do iPhone"
                className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
