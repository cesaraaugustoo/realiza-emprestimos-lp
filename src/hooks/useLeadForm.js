import { useState, useCallback, useRef } from 'react'
import { validateLeadForm, isFormValid } from '@/utils/validators'
import { sanitizeString, sanitizePhone } from '@/utils/sanitizers'
import { formatPhone, formatAmountInput, buildWhatsAppMessage } from '@/utils/formatters'
import { tracking } from '@/utils/tracking'
import { WHATSAPP, EMPLOYMENT_TYPES } from '@/config/constants'

const INITIAL_FIELDS = {
  name: '',
  whatsapp: '',
  amount: '',
  vehicle: '',
  vehicleYear: '',
  employmentType: '',
  occupation: '',
}

const INITIAL_ERRORS = {
  name: null,
  whatsapp: null,
  amount: null,
  vehicle: null,
  vehicleYear: null,
  employmentType: null,
  occupation: null,
}

export function useLeadForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const hasTrackedStart = useRef(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target

    if (!hasTrackedStart.current) {
      tracking.formStarted()
      hasTrackedStart.current = true
    }

    let sanitized = value
    if (name === 'whatsapp') {
      sanitized = formatPhone(sanitizePhone(value))
    } else if (name === 'amount') {
      sanitized = formatAmountInput(value)
    } else if (name === 'name' || name === 'vehicle' || name === 'occupation') {
      sanitized = sanitizeString(value)
    }

    setFields((prev) => ({ ...prev, [name]: sanitized }))

    if (touched[name]) {
      const newErrors = validateLeadForm({ ...fields, [name]: sanitized })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }, [fields, touched])

  const handleBlur = useCallback((e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validateLeadForm(fields)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
  }, [fields])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    const allTouched = Object.keys(INITIAL_FIELDS).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    )
    setTouched(allTouched)

    const validationErrors = validateLeadForm(fields)
    setErrors(validationErrors)

    if (!isFormValid(validationErrors)) return

    setIsSubmitting(true)
    tracking.leadSubmitted(fields)

    const employmentTypeLabel = EMPLOYMENT_TYPES.find(
      (t) => t.value === fields.employmentType
    )?.label ?? fields.employmentType
    const message = buildWhatsAppMessage({ ...fields, employmentTypeLabel })
    const url = `https://wa.me/${WHATSAPP.number}?text=${message}`

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.open(url, '_blank', 'noopener,noreferrer')
    }, 600)
  }, [fields])

  const reset = useCallback(() => {
    setFields(INITIAL_FIELDS)
    setErrors(INITIAL_ERRORS)
    setTouched({})
    setIsSubmitted(false)
    hasTrackedStart.current = false
  }, [])

  return {
    fields,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  }
}
