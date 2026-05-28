export function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function formatCurrency(value) {
  const number = Number(String(value).replace(/\D/g, '')) / 100
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number)
}

export function buildWhatsAppMessage(formData) {
  const lines = [
    'Olá, gostaria de solicitar uma simulação de crédito com garantia de veículo.',
    '',
    '*Dados do cliente:*',
    `Nome: ${formData.name}`,
    `Telefone: ${formData.whatsapp}`,
    '',
    '*Dados da solicitação:*',
    `Valor desejado: ${formData.amount}`,
    `Veículo: ${formData.vehicle}`,
    `Ano: ${formData.vehicleYear}`,
    `Vínculo empregatício: ${formData.employmentTypeLabel || formData.employmentType}`,
    `Profissão: ${formData.occupation}`,
    '',
    'Fico no aguardo do retorno para dar continuidade ao atendimento.',
  ]
  return encodeURIComponent(lines.join('\n'))
}
