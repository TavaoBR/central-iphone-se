import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Quais iPhones estão disponíveis?',
    answer: 'Trabalhamos com uma linha completa de iPhones, do iPhone 13 ao 16 Pro Max. Temos aparelhos novos lacrados e seminovos selecionados. Entre em contato pelo WhatsApp para ver o estoque atual, que é atualizado frequentemente.',
  },
  {
    question: 'Vocês trabalham com iPhones seminovos?',
    answer: 'Sim! Temos uma seleção criteriosa de iPhones seminovos. Cada aparelho passa por avaliação técnica completa, verificação de procedência, bateria e funcionamento antes de ser disponibilizado para venda. Todos os seminovos vêm com garantia da loja.',
  },
  {
    question: 'Os aparelhos possuem garantia?',
    answer: 'Todos os produtos têm garantia. iPhones novos seguem a garantia do fabricante. Seminovos possuem garantia da loja Central do iPhone. Em caso de qualquer problema, nossa equipe técnica está disponível para suporte.',
  },
  {
    question: 'Vocês parcelam?',
    answer: 'Sim! Parcelamos em até 18× sem juros no cartão de crédito. Também aceitamos PIX com desconto, transferência bancária, boleto e dinheiro. Entre em contato para mais informações sobre condições especiais.',
  },
  {
    question: 'Vocês fazem entrega em Aracaju?',
    answer: 'Sim, fazemos entregas em Aracaju e região. Também atendemos por WhatsApp para compras com envio para outras cidades do Sergipe e todo o Brasil. Entre em contato para mais informações sobre frete e prazo.',
  },
  {
    question: 'Vocês fazem manutenção de iPhone?',
    answer: 'Sim! Oferecemos assistência técnica especializada: troca de tela, substituição de bateria, diagnóstico gratuito, reparos de câmera, botões e muito mais. Atendemos também outros modelos de smartphones.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos: cartão de crédito (até 18×), cartão de débito, PIX, transferência bancária, boleto e dinheiro. PIX e dinheiro têm desconto especial. Fale conosco pelo WhatsApp para condições personalizadas.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="mb-14 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label !text-black/30">10</span>
            <div className="w-6 h-px bg-black/20" />
            <span className="section-label !text-black/30">DÚVIDAS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-black tracking-tight" style={{ fontWeight: 800 }}>
            Perguntas<br />frequentes.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} border-b border-black/[0.08]`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-display text-base md:text-lg font-600 tracking-tight transition-colors duration-200 ${
                    openIndex === i ? 'text-black' : 'text-black/70 group-hover:text-black'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-black text-white'
                      : 'bg-black/5 text-black/40 group-hover:bg-black/10'
                  }`}
                >
                  {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="text-black/50 text-sm leading-relaxed pb-6 pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
