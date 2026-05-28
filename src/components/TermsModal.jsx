import { useEffect } from 'react'

export function TermsModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="terms-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <h2 id="terms-title" className="text-lg font-bold text-brand-black">
            Termos de Uso — Realiza Empréstimos
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-5 text-sm text-gray-700 leading-relaxed flex flex-col gap-5">
          <p className="text-xs text-gray-400">Última atualização: Maio de 2026</p>

          <p>
            Bem-vindo ao site Realiza Empréstimos. Ao acessar este site, o usuário concorda com os
            presentes Termos de Uso e com a Política de Privacidade disponível nesta plataforma.
          </p>

          <Section title="1. SOBRE A EMPRESA">
            <p>A plataforma Realiza Empréstimos é operada por:</p>
            <p className="mt-2 font-semibold text-brand-black">J.Kochanski-ME</p>
            <p>CNPJ: 24.133.165/0001-08</p>
            <p>Av. Paraná, 462, Centro — Telêmaco Borba/PR — CEP: 84261-060</p>
            <p>E-mail: contato@realizaemprestimos.com.br</p>
            <p>Telefone/WhatsApp: (42) 99954-8966</p>
          </Section>

          <Section title="2. OBJETIVO DA PLATAFORMA">
            <p>
              O site possui finalidade exclusivamente informativa e de captação de interessados em
              produtos financeiros, incluindo:
            </p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
              <li>Empréstimo com Garantia de Veículo</li>
              <li>Refinanciamento de Veículos</li>
              <li>Crédito Consignado</li>
              <li>Portabilidade de Crédito</li>
              <li>Demais soluções financeiras ofertadas por parceiros</li>
            </ul>
          </Section>

          <Section title="3. RESPONSABILIDADE DAS INFORMAÇÕES">
            <p>
              O usuário declara que todas as informações fornecidas nos formulários são verdadeiras,
              atualizadas e de sua titularidade.
            </p>
            <p className="mt-2">
              O envio de dados falsos poderá ocasionar bloqueio de atendimento e responsabilização legal.
            </p>
          </Section>

          <Section title="4. ANÁLISE E APROVAÇÃO">
            <p>
              A aprovação de crédito está sujeita à análise das instituições financeiras parceiras,
              podendo ocorrer recusa sem necessidade de justificativa.
            </p>
            <p className="mt-2">As condições apresentadas podem variar conforme:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
              <li>Perfil do cliente</li>
              <li>Score de crédito</li>
              <li>Análise documental</li>
              <li>Avaliação do veículo</li>
              <li>Políticas internas das instituições financeiras</li>
            </ul>
          </Section>

          <Section title="5. PROPRIEDADE INTELECTUAL">
            <p>
              Todo o conteúdo deste site, incluindo textos, logotipos, layout, imagens, identidade
              visual e códigos, é protegido pela legislação brasileira de propriedade intelectual.
            </p>
            <p className="mt-2">É proibida a reprodução sem autorização prévia.</p>
          </Section>

          <Section title="6. LIMITAÇÃO DE RESPONSABILIDADE">
            <p>
              A Realiza Empréstimos não garante aprovação de crédito, valores específicos ou taxas
              previamente anunciadas sem análise individual. As informações deste site possuem
              caráter informativo e comercial.
            </p>
          </Section>

          <Section title="7. ALTERAÇÕES DOS TERMOS">
            <p>
              Os presentes Termos de Uso poderão ser alterados a qualquer momento, sem aviso prévio.
            </p>
          </Section>

          <Section title="8. CONTATO">
            <p>E-mail: contato@realizaemprestimos.com.br</p>
            <p>Telefone/WhatsApp: (42) 99954-8966</p>
            <p>Telefone Fixo: (42) 3272-0172</p>
          </Section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-brand-red text-white text-sm font-semibold hover:bg-brand-red-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-bold text-brand-black mb-2">{title}</h3>
      {children}
    </div>
  )
}
