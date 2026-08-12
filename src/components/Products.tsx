import { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '5579999486400';

const products = [
  {
    id: 1,
    model: 'iPhone 16 Pro',
    storage: '256GB',
    condition: 'Novo',
    price: 'R$ 7.499',
    image: '/images/iphone-product-1.png',
    badge: 'Lançamento',
  },
  {
    id: 2,
    model: 'iPhone 15 Pro Max',
    storage: '512GB',
    condition: 'Novo',
    price: 'R$ 8.299',
    image: 'https://images.pexels.com/photos/11216318/pexels-photo-11216318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: null,
  },
  {
    id: 3,
    model: 'iPhone 15',
    storage: '128GB',
    condition: 'Novo',
    price: 'R$ 4.799',
    image: '/images/iphone-product-2.png',
    badge: 'Mais vendido',
  },
  {
    id: 4,
    model: 'iPhone 14 Pro',
    storage: '256GB',
    condition: 'Seminovo',
    price: 'R$ 4.499',
    image: 'https://images.pexels.com/photos/11216260/pexels-photo-11216260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Seminovo',
  },
];

function buildWhatsApp(model: string, storage: string) {
  const msg = encodeURIComponent(`Olá! Tenho interesse no ${model} ${storage}. Poderia me passar mais informações?`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export default function Products() {
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
    <section id="produtos" ref={sectionRef} className="bg-[#F5F5F5] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-label !text-black/30">02</span>
              <div className="w-6 h-px bg-black/20" />
              <span className="section-label !text-black/30">IPHONES</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-black tracking-tight leading-[1.05]" style={{ fontWeight: 800 }}>
              Encontre seu<br />próximo iPhone.
            </h2>
          </div>
          <p className="text-black/50 text-sm max-w-xs leading-relaxed md:text-right">
            Selecionados com critério.<br />Novos e seminovos disponíveis.
          </p>
        </div>

        {/* Product Grid — horizontal scroll on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`product-card group bg-white border border-black/[0.06] overflow-hidden reveal reveal-delay-${i + 1}`}
              style={{ borderRadius: '4px' }}
            >
              {/* Image */}
              <div className="relative bg-[#F0F0F0] overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.model}
                  className="product-image w-full h-full object-cover"
                />
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-3 left-3 px-2.5 py-1 text-[0.6rem] font-semibold tracking-widest uppercase ${
                    product.badge === 'Seminovo' 
                      ? 'bg-black/10 text-black/60 border border-black/10'
                      : 'bg-black text-white'
                  }`} style={{ borderRadius: '2px' }}>
                    {product.badge}
                  </div>
                )}
                {/* CTA overlay */}
                <div className="product-cta absolute inset-x-3 bottom-3">
                  <a
                    href={buildWhatsApp(product.model, product.storage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-black text-white text-xs font-semibold tracking-wide hover:bg-zinc-800 transition-colors"
                    style={{ borderRadius: '2px' }}
                  >
                    Ver produto
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-base font-700 text-black tracking-tight" style={{ fontWeight: 700 }}>
                      {product.model}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-black/40 text-xs">{product.storage}</span>
                      <span className="w-1 h-1 rounded-full bg-black/20" />
                      <span className="text-black/40 text-xs">{product.condition}</span>
                    </div>
                  </div>
                  <span className="font-display font-700 text-sm text-black whitespace-nowrap" style={{ fontWeight: 700 }}>
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de ver todos os iPhones disponíveis.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-full"
          >
            Ver todos os iPhones
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
