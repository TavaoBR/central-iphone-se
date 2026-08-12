export default function Marquee() {
  const baseItems = [
    'IPHONE',
    'XIAOMI',
    'JBL',
    'ACESSÓRIOS',
    'ASSISTÊNCIA ESPECIALIZADA',
    'SEMINOVOS',
    'ARACAJU — SE',
  ];
  // Duplicate for seamless loop
  const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

  return (
    <div className="relative bg-black border-y border-white/[0.06] py-5 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="section-label text-white/30 mx-6 text-[0.6rem] tracking-[0.25em]">
              {item}
            </span>
            <span className="text-white/10 text-xs mx-2">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
