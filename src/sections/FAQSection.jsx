import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Badge } from '@/components/ui/Badge'

const FAQ_ITEMS = [
  {
    question: 'O veículo precisa estar quitado?',
    answer:
      'Sim, para a modalidade de Empréstimo com Garantia de Veículo, o carro deve estar quitado e em seu nome. No caso de Refinanciamento, trabalhamos com veículos financiados — entre em contato para analisarmos sua situação específica.',
  },
  {
    question: 'Negativado pode fazer o empréstimo?',
    answer:
      'Sim! O empréstimo com garantia de veículo tem análise mais flexível que o crédito pessoal tradicional. Mesmo com restrições no CPF, trabalhamos para encontrar condições viáveis. O veículo serve como garantia, o que reduz o risco para a operação.',
  },
  {
    question: 'Posso continuar usando meu carro durante o empréstimo?',
    answer:
      'Sim, com certeza. Você continua usando seu veículo normalmente durante todo o período do contrato. O carro é dado apenas como garantia no documento — não há qualquer retenção física do veículo.',
  },
  {
    question: 'Qual o prazo de aprovação e liberação?',
    answer:
      'A análise de crédito é feita em poucas horas. Após aprovação e assinatura do contrato, a liberação do crédito ocorre em até 24 horas úteis diretamente na sua conta bancária.',
  },
  {
    question: 'Quais veículos são aceitos como garantia?',
    answer:
      'Aceitamos carros de passeio, caminhonetes, caminhões e motocicletas de até 10 anos de fabricação, em boas condições. Veículos mais antigos são analisados caso a caso. Entre em contato para verificar seu veículo específico.',
  },
  {
    question: 'Quais documentos preciso para solicitar o crédito?',
    answer:
      'Basicamente: RG/CPF, comprovante de residência atualizado, comprovante de renda (holerite, extrato ou declaração) e o CRLV (documento do veículo). Nossa equipe orienta você sobre todos os documentos necessários durante o atendimento.',
  },
  {
    question: 'Qual o valor mínimo e máximo que posso solicitar?',
    answer:
      'Trabalhamos com valores a partir de R$ 5.000. O valor máximo depende do valor de avaliação do veículo — geralmente liberamos até 70% do valor de mercado do carro. Para grandes montantes, entre em contato diretamente com nossa equipe.',
  },
  {
    question: 'A Realiza Empréstimos é uma empresa regulamentada?',
    answer:
      'Sim. A Realiza Empréstimos (CNPJ: 24.133.165/0001-08) opera de acordo com as legislações vigentes. Nossos contratos são elaborados com toda segurança jurídica e transparência para o cliente.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-brand-gray-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-inset rounded-sm"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-semibold transition-colors duration-150 ${isOpen ? 'text-brand-red' : 'text-brand-black group-hover:text-brand-red'}`}>
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? 'bg-brand-red text-white rotate-180'
              : 'bg-brand-gray-light text-brand-gray-dark group-hover:bg-brand-red/10 group-hover:text-brand-red'
          }`}
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-brand-gray-dark leading-relaxed text-sm md:text-base pr-10">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { ref, isVisible } = useIntersectionObserver()

  const toggle = (index) => setOpenIndex((prev) => (prev === index ? null : index))

  return (
    <section
      id="faq"
      className="section-padding bg-brand-gray-light"
      aria-label="Perguntas frequentes"
    >
      <div className="container-xl">
        <div
          ref={ref}
          className={`text-center mb-14 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <Badge variant="red" className="mb-4">Tire suas dúvidas</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Respondemos as principais dúvidas sobre o empréstimo com garantia de
            veículo. Não encontrou a resposta? Fale com nossa equipe.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card border border-brand-gray-border p-6 md:p-8">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
