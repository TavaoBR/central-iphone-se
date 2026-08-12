import { useEffect, useRef } from 'react';

const INSTAGRAM_URL = 'https://instagram.com/centraldoiphonese';

const instagramImages = [
  {
    url: 'https://images.pexels.com/photos/13570158/pexels-photo-13570158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'iPhone packaging',
  },
  {
    url: 'https://images.pexels.com/photos/11216318/pexels-photo-11216318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Smartphone on surface',
  },
  {
    url: 'https://images.pexels.com/photos/13570135/pexels-photo-13570135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Hand holding phone',
  },
  {
    url: 'https://images.pexels.com/photos/11216260/pexels-photo-11216260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Smartphone close-up',
  },
  {
    url: 'https://images.pexels.com/photos/6754839/pexels-photo-6754839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Repair technician',
  },
  {
    url: 'https://images.pexels.com/photos/13570155/pexels-photo-13570155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'iPhone box',
  },
];

export default function Instagram() {
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
    <section ref={sectionRef} className="bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label">08</span>
              <div className="w-6 h-px bg-white/20" />
              <span className="section-label">INSTAGRAM</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-800 text-white tracking-tight leading-[1.05]" style={{ fontWeight: 800 }}>
              @centraldoiphonese
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium self-start md:self-end"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguir no Instagram
          </a>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramImages.map((img, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden reveal reveal-delay-${(i % 4) + 1} ${i === 0 ? 'col-span-2 row-span-2 md:row-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2' : ''}`}
              style={{ borderRadius: '2px', aspectRatio: i === 0 ? undefined : '1 / 1' }}
            >
              <div className={`w-full overflow-hidden ${i === 0 ? 'aspect-square lg:h-full' : 'aspect-square'}`}>
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
