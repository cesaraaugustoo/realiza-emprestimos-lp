/**
 * Strips HTML tags and dangerous characters to prevent XSS.
 * Applied to all user inputs before state storage or transmission.
 */
export function sanitizeString(value) {
  if (typeof value !== 'string') return ''
  return value
    .replace(/[<>'"&]/g, (char) => {
      const map = { '<': '', '>': '', "'": '', '"': '', '&': '' }
      return map[char]
    })
    .slice(0, 500)
}

export function sanitizePhone(value) {
  if (typeof value !== 'string') return ''
  return value.replace(/[^\d\s()\-+]/g, '').trim().slice(0, 20)
}

export function sanitizeNumericString(value) {
  if (typeof value !== 'string') return ''
  return value.replace(/[^\d]/g, '').slice(0, 10)
}
