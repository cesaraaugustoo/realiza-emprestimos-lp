import { useState, useEffect } from 'react'
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

const VALUES = [
  'Transparência em todas as negociações',
  'Ética e responsabilidade',
  'Respeito aos clientes e parceiros',
  'Compromisso com resultados',
  'Excelência no atendimento',
  'Segurança e conformidade com a legislação vigente',
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

function AboutTab() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Badge variant="red" className="mb-4">Sobre nós</Badge>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
          Quem Somos
        </h2>
        <p className="text-lg text-brand-gray-dark leading-relaxed">
          A <strong className="text-brand-black">Realiza Empréstimos</strong> é uma empresa especializada em soluções financeiras, atuando como correspondente bancário e conectando clientes às melhores oportunidades de crédito do mercado.
        </p>
        <p className="text-base text-brand-gray-dark leading-relaxed mt-4">
          Trabalhamos com uma ampla rede de instituições financeiras parceiras, oferecendo atendimento consultivo, transparência e agilidade em todas as etapas da contratação. Nosso objetivo é ajudar pessoas e empresas a encontrarem a solução financeira mais adequada às suas necessidades, com segurança, responsabilidade e condições competitivas.
        </p>
        <p className="text-base text-brand-gray-dark leading-relaxed mt-4">
          Nossa equipe é formada por profissionais capacitados e comprometidos em proporcionar uma experiência simples, rápida e confiável, sempre prezando pela ética, pelo respeito ao cliente e pela excelência no atendimento.
        </p>
      </div>

      {/* Missão, Visão, Valores */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Missão */}
        <div className="bg-white rounded-xl border border-brand-gray-border p-6 shadow-card flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-brand-black">Nossa Missão</h3>
          <p className="text-sm text-brand-gray-dark leading-relaxed">
            Facilitar o acesso ao crédito de forma transparente, segura e eficiente, contribuindo para a realização de projetos, conquistas e objetivos financeiros de nossos clientes.
          </p>
        </div>

        {/* Visão */}
        <div className="bg-white rounded-xl border border-brand-gray-border p-6 shadow-card flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-brand-black">Nossa Visão</h3>
          <p className="text-sm text-brand-gray-dark leading-relaxed">
            Ser reconhecida como referência em soluções financeiras e intermediação de crédito, destacando-se pela qualidade do atendimento, inovação e confiança.
          </p>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-xl border border-brand-gray-border p-6 shadow-card flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-brand-black">Nossos Valores</h3>
          <ul className="flex flex-col gap-2">
            {VALUES.map((value) => (
              <li key={value} className="flex items-start gap-2 text-sm text-brand-gray-dark">
                <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Rodapé da aba */}
      <div className="text-center bg-brand-gray-light rounded-2xl p-6">
        <p className="text-brand-black font-semibold">
          <strong className="text-brand-red">Realiza Empréstimos</strong> – Conectando você às melhores oportunidades de crédito com segurança e confiança.
        </p>
      </div>
    </div>
  )
}

function TestimonialsTab() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <>
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
    </>
  )
}

const TABS = [
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'quem-somos', label: 'Quem Somos' },
]

export function SocialProofSection() {
  const [activeTab, setActiveTab] = useState('depoimentos')

  useEffect(() => {
    const handler = (e) => setActiveTab(e.detail)
    window.addEventListener('activate-tab', handler)
    return () => window.removeEventListener('activate-tab', handler)
  }, [])

  return (
    <section
      id="depoimentos"
      className="section-padding bg-white"
      aria-label="Resultados, depoimentos e sobre a empresa"
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

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-brand-gray-light rounded-xl p-1 gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-brand-gray-dark hover:text-brand-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        {activeTab === 'depoimentos' ? <TestimonialsTab /> : <AboutTab />}
      </div>
    </section>
  )
}
