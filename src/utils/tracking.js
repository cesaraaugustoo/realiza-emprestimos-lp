/**
 * Centralized analytics/tracking facade.
 * Abstracts Meta Pixel, GTM data layer, and GA4 calls
 * so swapping providers requires changing only this file.
 */

function fbq(...args) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args)
  }
}

function pushDataLayer(event, payload = {}) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload })
  }
}

export const tracking = {
  leadSubmitted(formData) {
    fbq('track', 'Lead', {
      content_name: 'Empréstimo com Garantia de Veículo',
      value: formData?.amount ?? '',
    })
    pushDataLayer('lead_submitted', {
      lead_product: 'garantia_veiculo',
      lead_vehicle_year: formData?.vehicleYear ?? '',
    })
  },

  whatsAppClicked(source = 'unknown') {
    fbq('track', 'Contact', { content_name: source })
    pushDataLayer('whatsapp_clicked', { click_source: source })
  },

  ctaClicked(ctaLabel = '') {
    pushDataLayer('cta_clicked', { cta_label: ctaLabel })
  },

  formStarted() {
    fbq('track', 'InitiateCheckout')
    pushDataLayer('form_started')
  },
}
