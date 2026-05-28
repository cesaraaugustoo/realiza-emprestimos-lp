import { useEffect } from 'react'

export function PrivacyModal({ onClose }) {
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
      aria-labelledby="privacy-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <h2 id="privacy-title" className="text-lg font-bold text-brand-black">
            Política de Privacidade — Realiza Empréstimos
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
            A Realiza Empréstimos respeita a privacidade e a proteção dos dados pessoais de seus
            usuários, atuando em conformidade com a Lei Geral de Proteção de Dados
            (LGPD — Lei nº 13.709/2018).
          </p>

          <Section title="1. DADOS COLETADOS">
            <p>Podemos coletar:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
              <li>Nome completo</li>
              <li>Telefone</li>
              <li>WhatsApp</li>
              <li>E-mail</li>
              <li>Cidade</li>
              <li>Informações do veículo</li>
              <li>Dados financeiros informados pelo usuário</li>
            </ul>
          </Section>

          <Section title="2. FINALIDADE DO USO DOS DADOS">
            <p>Os dados são utilizados para:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
              <li>Contato comercial</li>
              <li>Simulação de crédito</li>
              <li>Análise de propostas</li>
              <li>Encaminhamento às instituições financeiras parceiras</li>
              <li>Campanhas de marketing</li>
              <li>Melhoria da experiência do usuário</li>
            </ul>
          </Section>

          <Section title="3. COMPARTILHAMENTO DE DADOS">
            <p>Os dados poderão ser compartilhados com:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
              <li>Bancos</li>
              <li>Financeiras</li>
              <li>Correspondentes bancários</li>
              <li>Parceiros comerciais</li>
              <li>Plataformas de CRM</li>
              <li>Ferramentas de marketing e análise</li>
            </ul>
            <p className="mt-2">sempre respeitando a legislação vigente.</p>
          </Section>

          <Section title="4. COOKIES E TECNOLOGIAS">
            <p>Este site poderá utilizar:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
              <li>Cookies</li>
              <li>Meta Pixel</li>
              <li>Google Analytics</li>
              <li>Ferramentas de rastreamento e performance</li>
            </ul>
            <p className="mt-2">
              para melhorar a navegação e personalizar campanhas publicitárias.
            </p>
          </Section>

          <Section title="5. SEGURANÇA DAS INFORMAÇÕES">
            <p>
              Adotamos medidas técnicas e administrativas para proteção dos dados pessoais contra
              acessos não autorizados, vazamentos e uso indevido.
            </p>
          </Section>

          <Section title="6. DIREITOS DO TITULAR">
            <p>Nos termos da LGPD, o usuário poderá solicitar:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
              <li>Acesso aos dados</li>
              <li>Correção</li>
              <li>Exclusão</li>
              <li>Revogação do consentimento</li>
              <li>Portabilidade</li>
            </ul>
            <p className="mt-2">
              através do e-mail:{' '}
              <a href="mailto:contato@realizaemprestimos.com.br" className="text-brand-red hover:underline">
                contato@realizaemprestimos.com.br
              </a>
            </p>
          </Section>

          <Section title="7. TEMPO DE ARMAZENAMENTO">
            <p>
              Os dados poderão ser armazenados pelo período necessário para cumprimento das
              finalidades comerciais, legais e regulatórias.
            </p>
          </Section>

          <Section title="8. ALTERAÇÕES DESTA POLÍTICA">
            <p>
              Esta Política poderá ser alterada a qualquer momento para adequação legal ou operacional.
            </p>
          </Section>

          <Section title="9. CONTATO">
            <p className="font-semibold text-brand-black">J.Kochanski-ME</p>
            <p>CNPJ: 24.133.165/0001-08</p>
            <p>Av. Paraná, 462, Centro — Telêmaco Borba/PR — CEP: 84261-060</p>
            <p>
              E-mail:{' '}
              <a href="mailto:contato@realizaemprestimos.com.br" className="text-brand-red hover:underline">
                contato@realizaemprestimos.com.br
              </a>
            </p>
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
