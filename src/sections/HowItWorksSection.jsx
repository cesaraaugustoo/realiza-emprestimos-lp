import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { WHATSAPP } from '@/config/constants'
import { tracking } from '@/utils/tracking'

const STEPS = [
  {
    number: '01',
    title: 'Simulação gratuita',
    description:
      'Preencha o formulário com seus dados e as informações do veículo. Sem compromisso, sem consulta ao CPF nesta etapa.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Análise de crédito',
    description:
      'Nossa equipe analisa seu perfil e o veículo. Processo ágil com especialistas dedicados para encontrar a melhor proposta.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Aprovação e contrato',
    description:
      'Proposta aprovada, você assina o contrato digitalmente com toda segurança jurídica. Processo 100% transparente.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Dinheiro na conta',
    description:
      'Crédito liberado em até 24h após assinatura do contrato. Direto na sua conta bancária. Pronto para usar como precisar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

function StepCard({ step, index }) {
  const { ref, isVisible } = useIntersectionObserver()
  const isLast = index === STEPS.length - 1

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start gap-4 md:gap-6 lg:gap-4 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'both' }}
    >
      {/* Connector line (desktop horizontal) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-7 left-[calc(100%+0px)] w-full h-px border-t-2 border-dashed border-brand-gray-border z-0"
          style={{ left: '3.5rem', right: '-2rem', width: 'calc(100% - 2rem)' }}
          aria-hidden="true"
        />
      )}

      <div className="flex items-center gap-4 md:flex-shrink-0">
        <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-red text-white shadow-cta flex-shrink-0">
          {step.icon}
        </div>
        <span className="text-5xl font-black text-brand-gray-border select-none md:hidden lg:block">
          {step.number}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-brand-black mb-1">{step.title}</h3>
        <p className="text-sm text-brand-gray-dark leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  const { ref, isVisible } = useIntersectionObserver()

  const handleWhatsApp = () => {
    tracking.whatsAppClicked('how_it_works_cta')
    window.open(WHATSAPP.urlWithMessage, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="como-funciona"
      className="section-padding bg-white"
      aria-label="Como funciona o empréstimo com garantia de veículo"
    >
      <div className="container-xl">
        <div
          ref={ref}
          className={`text-center mb-14 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <Badge variant="red" className="mb-4">Processo simples</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            Do zero ao dinheiro na conta
            <br className="hidden sm:block" />
            <span className="text-gradient-red"> em 4 passos</span>
          </h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Simplificamos cada etapa para que você tenha a melhor experiência
            com o mínimo de esforço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative mb-14">
          {STEPS.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <div className="bg-brand-gray-light rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-2">
              Pronto para começar?
            </h3>
            <p className="text-brand-gray-dark">
              Nossa equipe está disponível para orientá-lo em cada passo.
            </p>
          </div>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsApp}
            className="flex-shrink-0 gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Iniciar minha simulação
          </Button>
        </div>
      </div>
    </section>
  )
}
