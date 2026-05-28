export const FIELD_ERRORS = {
  name: {
    required: 'Informe seu nome completo.',
    minLength: 'O nome deve ter pelo menos 3 caracteres.',
    invalid: 'Nome inválido. Use apenas letras.',
  },
  whatsapp: {
    required: 'Informe seu WhatsApp.',
    invalid: 'Número de WhatsApp inválido. Use o formato (99) 99999-9999.',
  },
  amount: {
    required: 'Selecione o valor desejado.',
  },
  vehicle: {
    required: 'Informe o modelo do veículo.',
    minLength: 'Informe ao menos marca e modelo.',
  },
  vehicleYear: {
    required: 'Selecione o ano do veículo.',
  },
}

export function validateName(value) {
  if (!value || value.trim().length === 0) return FIELD_ERRORS.name.required
  if (value.trim().length < 3) return FIELD_ERRORS.name.minLength
  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value.trim())) return FIELD_ERRORS.name.invalid
  return null
}

export function validateWhatsApp(value) {
  if (!value || value.trim().length === 0) return FIELD_ERRORS.whatsapp.required
  const digits = value.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 11) return FIELD_ERRORS.whatsapp.invalid
  return null
}

export function validateAmount(value) {
  if (!value) return FIELD_ERRORS.amount.required
  return null
}

export function validateVehicle(value) {
  if (!value || value.trim().length === 0) return FIELD_ERRORS.vehicle.required
  if (value.trim().length < 3) return FIELD_ERRORS.vehicle.minLength
  return null
}

export function validateVehicleYear(value) {
  if (!value) return FIELD_ERRORS.vehicleYear.required
  return null
}

export function validateEmploymentType(value) {
  if (!value) return 'Selecione seu vínculo profissional.'
  return null
}

export function validateOccupation(value) {
  if (!value || value.trim().length === 0) return 'Informe sua profissão/ocupação.'
  if (value.trim().length < 2) return 'Informe ao menos 2 caracteres.'
  return null
}

export function validateLeadForm(fields) {
  return {
    name: validateName(fields.name),
    whatsapp: validateWhatsApp(fields.whatsapp),
    amount: validateAmount(fields.amount),
    vehicle: validateVehicle(fields.vehicle),
    vehicleYear: validateVehicleYear(fields.vehicleYear),
    employmentType: validateEmploymentType(fields.employmentType),
    occupation: validateOccupation(fields.occupation),
  }
}

export function isFormValid(errors) {
  return Object.values(errors).every((err) => err === null)
}
