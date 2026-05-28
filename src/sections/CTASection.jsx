import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Button } from '@/components/ui/Button'
import { WHATSAPP } from '@/config/constants'
import { tracking } from '@/utils/tracking'

const URGENCY_ITEMS = [
  '✅ Sem consulta prévia ao CPF na simulação',
  '✅ Atendimento de segunda a sábado',
  '✅ Dinheiro na conta em até 24h',
  '✅ Negativados podem solicitar',
]

export function CTASection() {
  const { ref, isVisible } = useIntersectionObserver()

  const handleWhatsApp = () => {
    tracking.whatsAppClicked('cta_section')
    tracking.ctaClicked('cta_section_whatsapp')
    window.open(WHATSAPP.urlWithMessage, '_blank', 'noopener,noreferrer')
  }

  const handleScrollToForm = () => {
    tracking.ctaClicked('cta_section_form')
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="simulacao"
      className="section-padding bg-brand-black relative overflow-hidden"
      aria-label="Chamada para ação — Simule seu empréstimo"
    >
      {/* Decorative red gradient blob */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <span className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" aria-hidden="true" />
            Atendimento disponível agora
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Faça sua simulação agora
            <br />
            <span className="text-gradient-red">sem compromisso</span>
          </h2>

          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Descubra quanto você pode obter usando seu veículo como garantia.
            Nossa equipe responde em minutos.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 max-w-sm mx-auto mb-10 text-left">
            {URGENCY_ITEMS.map((item) => (
              <p key={item} className="text-sm text-white/80 font-medium">
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="xl"
              onClick={handleWhatsApp}
              className="gap-3 min-w-[260px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar no WhatsApp agora
            </Button>

            <Button
              variant="ghost"
              size="xl"
              onClick={handleScrollToForm}
              className="text-white hover:text-brand-red min-w-[200px] border border-white/20 hover:border-brand-red/50"
            >
              Preencher formulário
            </Button>
          </div>

          <p className="text-xs text-white/40 mt-6">
            🔒 Seus dados estão protegidos e não serão compartilhados com terceiros.
          </p>
        </div>
      </div>
    </section>
  )
}
