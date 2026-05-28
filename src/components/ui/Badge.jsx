import PropTypes from 'prop-types'

export function Badge({ children, variant = 'red', className = '' }) {
  const variants = {
    red: 'bg-brand-red/10 text-brand-red border border-brand-red/20',
    dark: 'bg-brand-black/10 text-brand-black border border-brand-black/20',
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['red', 'dark', 'green']),
  className: PropTypes.string,
}
