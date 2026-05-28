import { useLeadForm } from '@/hooks/useLeadForm'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Badge } from '@/components/ui/Badge'
import { LOAN_AMOUNTS, VEHICLE_YEARS, EMPLOYMENT_TYPES, WHATSAPP } from '@/config/constants'
import { tracking } from '@/utils/tracking'

const TRUST_ITEMS = [
  { icon: '🔒', text: '100% Seguro' },
  { icon: '⚡', text: 'Aprovação em 24h' },
  { icon: '📱', text: 'Sem burocracia' },
]

export function HeroSection() {
  const {
    fields,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useLeadForm()

  const handleWhatsApp = () => {
    tracking.whatsAppClicked('hero_button')
    window.open(WHATSAPP.urlWithMessage, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white bg-hero-pattern overflow-hidden flex items-center"
      aria-label="Simulação de empréstimo"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray-light hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 right-8 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl hidden lg:block"
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 w-full py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Copy */}
          <div className="animate-fade-in">
            <Badge variant="red" className="mb-5">
              🚗 Empréstimo com Garantia de Veículo
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-black leading-[1.05] mb-5">
              Transforme seu{' '}
              <span className="text-gradient-red">veículo</span>{' '}
              em crédito com taxas reduzidas.
            </h1>

            <p className="text-lg md:text-xl text-brand-gray-dark leading-relaxed mb-8 max-w-lg">
              Empréstimo com Garantia de Veículo com aprovação rápida, parcelas
              menores e liberação em até{' '}
              <strong className="text-brand-black">24 horas</strong>. Você
              continua usando seu carro normalmente.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {TRUST_ITEMS.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm font-semibold text-brand-black">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                className="gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar no WhatsApp
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Ver como funciona
              </Button>
            </div>
          </div>

          {/* Right — Form */}
          <div
            id="form-section"
            className="animate-slide-up animation-delay-200 bg-white rounded-2xl shadow-card-hover border border-brand-gray-border p-6 md:p-8 relative"
          >
            {/* Red accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-brand-red-light rounded-t-2xl" aria-hidden="true" />

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-black mb-1">
                    Simule agora — é gratuito
                  </h2>
                  <p className="text-sm text-brand-gray-dark">
                    Preencha os dados e receba sua proposta em minutos.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate aria-label="Formulário de simulação">
                  <div className="flex flex-col gap-4">
                    <Input
                      label="Nome completo"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name ? errors.name : null}
                      placeholder="Seu nome completo"
                      required
                      autoComplete="name"
                    />

                    <Input
                      label="WhatsApp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      value={fields.whatsapp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.whatsapp ? errors.whatsapp : null}
                      placeholder="(42) 99999-9999"
                      required
                      autoComplete="tel"
                    />

                    <Select
                      label="Valor desejado"
                      name="amount"
                      value={fields.amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.amount ? errors.amount : null}
                      options={LOAN_AMOUNTS}
                      placeholder="Quanto você precisa?"
                      required
                    />

                    <Input
                      label="Veículo (marca e modelo)"
                      name="vehicle"
                      value={fields.vehicle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.vehicle ? errors.vehicle : null}
                      placeholder="Ex: Chevrolet Onix"
                      required
                    />

                    <Select
                      label="Ano do veículo"
                      name="vehicleYear"
                      value={fields.vehicleYear}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.vehicleYear ? errors.vehicleYear : null}
                      options={VEHICLE_YEARS}
                      placeholder="Ano do veículo"
                      required
                    />

                    <Select
                      label="Vínculo profissional"
                      name="employmentType"
                      value={fields.employmentType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.employmentType ? errors.employmentType : null}
                      options={EMPLOYMENT_TYPES}
                      placeholder="Selecione seu vínculo"
                      required
                    />

                    <Input
                      label="Profissão / Ocupação"
                      name="occupation"
                      value={fields.occupation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.occupation ? errors.occupation : null}
                      placeholder="Ex: Motorista, Eletricista, Analista..."
                      required
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isSubmitting}
                      className="mt-2 text-base font-bold tracking-wide"
                    >
                      {isSubmitting ? 'Enviando...' : 'Simular Agora →'}
                    </Button>
                  </div>
                </form>

                <p className="text-center text-xs text-brand-gray-mid mt-4">
                  🔒 Seus dados estão protegidos conforme a LGPD. Sem spam.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Simulação enviada!
                </h3>
                <p className="text-brand-gray-dark mb-6">
                  Nossa equipe já recebeu seus dados e entrará em contato via
                  WhatsApp em instantes.
                </p>
                <Button variant="secondary" size="md" onClick={reset}>
                  Nova simulação
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
