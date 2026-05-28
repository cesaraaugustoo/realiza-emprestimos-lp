import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Badge } from '@/components/ui/Badge'

const BENEFITS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Taxas reduzidas',
    description:
      'Juros muito menores que o crédito pessoal e cartão de crédito. O veículo como garantia gera tarifas competitivas no mercado.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Continue usando o veículo',
    description:
      'Você não abre mão do seu carro. Ele é apenas dado como garantia no papel — continue dirigindo normalmente durante todo o período.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Aprovação rápida',
    description:
      'Processo simplificado e digital. Análise de crédito ágil com resposta em poucas horas e liberação em até 24h após aprovação.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Parcelas menores',
    description:
      'Prazos de pagamento mais longos e valores de parcela que cabem no seu bolso. Planejamento financeiro sem aperto.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Atendimento especializado',
    description:
      'Consultores dedicados a cada cliente. Tiramos todas as suas dúvidas e acompanhamos você em cada etapa do processo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Sem burocracia',
    description:
      'Documentação simples e processo 100% orientado pelo nosso time. Você não precisa ir a banco nem enfrentar filas.',
  },
]

function BenefitCard({ benefit, index }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl border border-brand-gray-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      <div className="w-14 h-14 bg-brand-red/8 rounded-xl flex items-center justify-center text-brand-red mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
        {benefit.icon}
      </div>
      <h3 className="text-lg font-bold text-brand-black mb-2">{benefit.title}</h3>
      <p className="text-sm text-brand-gray-dark leading-relaxed">{benefit.description}</p>
    </div>
  )
}

export function BenefitsSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      id="beneficios"
      className="section-padding bg-brand-gray-light"
      aria-label="Benefícios do empréstimo com garantia de veículo"
    >
      <div className="container-xl">
        <div
          ref={ref}
          className={`text-center mb-14 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <Badge variant="red" className="mb-4">Por que nos escolher</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            Vantagens que fazem a diferença
          </h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            O empréstimo com garantia de veículo oferece condições que nenhuma
            outra modalidade de crédito consegue superar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
