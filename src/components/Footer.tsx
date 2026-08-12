const WHATSAPP_NUMBER = '5579999486400';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_URL = 'https://instagram.com/centraldoiphonese';

const footerLinks = [
  { label: 'iPhones', href: '#produtos' },
  { label: 'Seminovos', href: '#seminovos' },
  { label: 'Acessórios', href: '#categorias' },
  { label: 'Assistência', href: '#assistencia' },
  { label: 'Sobre', href: '#localizacao' },
];

const socialLinks = [
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
  { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/[0.06] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {/* Logo Mark */}
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" strokeDasharray="70 18" strokeLinecap="round" opacity="0.6" />
                  <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1" opacity="0.2" />
                  <line x1="16" y1="2" x2="16" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  <circle cx="16" cy="16" r="2" fill="white" opacity="0.6" />
                </svg>
              </div>
              <div>
                <span className="font-display text-white text-sm font-700 tracking-tight leading-none block" style={{ fontWeight: 700 }}>
                  CENTRAL DO IPHONE
                </span>
                <span className="text-white/30 text-[0.6rem] tracking-[0.12em] leading-none block uppercase">
                  Aracaju — SE
                </span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              iPhones novos e seminovos, acessórios e assistência especializada em Aracaju, Sergipe.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="section-label mb-5">Navegação</div>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <div className="section-label mb-5">Contato</div>
            <ul className="space-y-3 mb-8">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-white/20 text-xs leading-relaxed">
              Rua Urquiza Leal, 1080<br />
              Galeria Alvorada<br />
              Aracaju — SE
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/20 text-xs">
            © 2026 Central do iPhone. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/20 text-xs tracking-widest uppercase">Aracaju / SE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
