import PropTypes from 'prop-types'

export function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  inputMode,
  autoComplete,
  className = '',
}) {
  const inputId = `field-${name}`
  const errorId = `error-${name}`

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-brand-black"
        >
          {label}
          {required && <span className="text-brand-red ml-0.5">*</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        inputMode={inputMode}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={[
          'w-full px-4 py-3 rounded-lg border text-brand-black bg-white',
          'text-base placeholder:text-brand-gray-mid',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red',
          error
            ? 'border-red-500 bg-red-50'
            : 'border-brand-gray-border hover:border-brand-gray-mid',
        ]
          .filter(Boolean)
          .join(' ')}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  inputMode: PropTypes.string,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
}
