import PropTypes from 'prop-types'

const VARIANTS = {
  primary:
    'bg-brand-red hover:bg-brand-red-dark text-white shadow-cta hover:shadow-cta-hover animate-pulse-cta',
  secondary:
    'bg-transparent border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
  ghost:
    'bg-transparent text-brand-red hover:bg-brand-red/10',
  dark:
    'bg-brand-black hover:bg-brand-gray-dark text-white shadow-card hover:shadow-card-hover',
  whatsapp:
    'bg-[#25D366] hover:bg-[#20B858] text-white shadow-cta hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)]',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = 'button',
  as: Tag = 'button',
  href,
  target,
  rel,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const classes = [
    base,
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const props = {
    className: classes,
    disabled: disabled || loading,
    onClick,
    type: Tag === 'button' ? type : undefined,
    href: Tag === 'a' ? href : undefined,
    target: Tag === 'a' ? target : undefined,
    rel: Tag === 'a' ? rel : undefined,
    ...rest,
  }

  return (
    <Tag {...props}>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {children}
    </Tag>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'dark', 'whatsapp']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  as: PropTypes.elementType,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
}
