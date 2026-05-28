import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Badge } from '@/components/ui/Badge'
import { SOCIAL_PROOF } from '@/config/constants'

const STATS = [
  {
    value: SOCIAL_PROOF.clientsServed,
    label: 'Clientes atendidos',
    icon: '👥',
  },
  {
    value: SOCIAL_PROOF.totalReleased,
    label: 'Liberados em crédito',
    icon: '💰',
  },
  {
    value: SOCIAL_PROOF.averageRating,
    label: 'Avaliação média',
    icon: '⭐',
  },
  {
    value: SOCIAL_PROOF.approvalRate,
    label: 'Taxa de aprovação',
    icon: '✅',
  },
]

const TESTIMONIALS = [
  {
    name: 'Carlos Eduardo M.',
    city: 'Telêmaco Borba, PR',
    rating: 5,
    text: 'Processo muito rápido e transparente. Precisava de R$ 30 mil com urgência para o meu negócio e em menos de 24h o dinheiro estava na minha conta. Recomendo muito!',
    vehicle: 'Toyota Hilux 2019',
  },
  {
    name: 'Ana Paula S.',
    city: 'Ponta Grossa, PR',
    rating: 5,
    text: 'Achei que seria difícil por ter o nome sujo, mas a Realiza me surpreendeu. Atendimento humanizado, sem julgamento e com as melhores taxas que encontrei.',
    vehicle: 'Honda Civic 2020',
  },
  {
    name: 'Marcos Antônio R.',
    city: 'Imbaú, PR',
    rating: 5,
    text: 'Fiz portabilidade do meu contrato anterior e reduzi as parcelas em quase 40%. A equipe me explicou tudo com calma. Excelente trabalho!',
    vehicle: 'Volkswagen T-Cross 2021',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function StatCard({ stat, index }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`text-center p-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <span className="text-3xl mb-2 block" aria-hidden="true">{stat.icon}</span>
      <span className="block text-4xl md:text-5xl font-extrabold text-white mb-1">
        {stat.value}
      </span>
      <span className="text-sm font-medium text-white/75 uppercase tracking-wide">
        {stat.label}
      </span>
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <figure
      ref={ref}
      className={`bg-white rounded-xl border border-brand-gray-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-4 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-brand-black">{testimonial.name}</p>
          <p className="text-xs text-brand-gray-mid">{testimonial.city}</p>
        </div>
        <StarRating count={testimonial.rating} />
      </div>

      <blockquote className="text-sm text-brand-gray-dark leading-relaxed italic flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <div className="flex items-center gap-2 pt-2 border-t border-brand-gray-border">
        <svg className="w-4 h-4 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        <span className="text-xs text-brand-gray-mid">{testimonial.vehicle}</span>
      </div>
    </figure>
  )
}

export function SocialProofSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      id="depoimentos"
      className="section-padding bg-white"
      aria-label="Resultados e depoimentos de clientes"
    >
      <div className="container-xl">
        {/* Stats strip */}
        <div className="bg-brand-black rounded-2xl mb-16 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          ref={ref}
          className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <Badge variant="red" className="mb-4">Avaliações reais</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            Quem confia na Realiza Empréstimos
          </h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Mais de {SOCIAL_PROOF.clientsServed} clientes atendidos com
            satisfação. Veja o que dizem sobre nós.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Rating summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-brand-gray-light rounded-2xl p-6">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-brand-black font-semibold">
            <span className="text-xl font-extrabold text-brand-red">{SOCIAL_PROOF.averageRating}</span>
            /5 de média — baseado em {SOCIAL_PROOF.reviewCount} avaliações verificadas
          </p>
        </div>
      </div>
    </section>
  )
}
