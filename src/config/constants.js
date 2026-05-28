export const COMPANY = {
  name: 'Realiza Empréstimos',
  cnpj: '24.133.165/0001-08',
  email: import.meta.env.VITE_CONTACT_EMAIL ?? 'contato@realizaemprestimos.com.br',
  phone: '(42) 3272-0172',
  whatsapp: '(42) 99954-8966',
  address: {
    street: 'Av. Paraná, 462',
    neighborhood: 'Centro',
    city: 'Telêmaco Borba',
    state: 'PR',
    zipCode: '84261-060',
    full: 'Av. Paraná, 462, Centro — Telêmaco Borba/PR — CEP: 84261-060',
  },
}

export const WHATSAPP = {
  number: import.meta.env.VITE_WHATSAPP_NUMBER ?? '5542999548966',
  get baseUrl() {
    return `https://wa.me/${this.number}`
  },
  message: (productName = '') =>
    encodeURIComponent(
      productName
        ? `Olá! Tenho interesse em ${productName}. Pode me ajudar?`
        : 'Olá! Gostaria de fazer uma simulação de empréstimo com garantia de veículo.'
    ),
  get urlWithMessage() {
    return `${this.baseUrl}?text=${this.message()}`
  },
}

export const PRODUCTS = [
  {
    id: 'garantia-veiculo',
    label: 'Empréstimo com Garantia de Veículo',
  },
  {
    id: 'refinanciamento',
    label: 'Refinanciamento de Veículo',
  },
  {
    id: 'portabilidade',
    label: 'Portabilidade de Crédito',
  },
  {
    id: 'credito-garantia',
    label: 'Crédito com Garantia',
  },
]

export const LOAN_AMOUNTS = [
  { value: '5000-15000', label: 'R$ 5.000 a R$ 15.000' },
  { value: '15000-30000', label: 'R$ 15.000 a R$ 30.000' },
  { value: '30000-60000', label: 'R$ 30.000 a R$ 60.000' },
  { value: '60000-100000', label: 'R$ 60.000 a R$ 100.000' },
  { value: '100000+', label: 'Acima de R$ 100.000' },
]

export const EMPLOYMENT_TYPES = [
  { value: 'clt', label: 'CLT (Empregado com carteira assinada)' },
  { value: 'autonomo', label: 'Autônomo' },
  { value: 'prestador', label: 'Prestador de Serviço' },
]

export const VEHICLE_YEARS = (() => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: 20 }, (_, i) => {
    const year = currentYear - i
    return { value: String(year), label: String(year) }
  })
})()

export const SOCIAL_PROOF = {
  clientsServed: '3.200+',
  totalReleased: 'R$ 48 milhões',
  averageRating: '4.9',
  reviewCount: '1.800+',
  approvalRate: '94%',
}

export const ANALYTICS = {
  gtmId: import.meta.env.VITE_GTM_ID,
  fbPixelId: import.meta.env.VITE_FB_PIXEL_ID,
  ga4Id: import.meta.env.VITE_GA4_MEASUREMENT_ID,
}
