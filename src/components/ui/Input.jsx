import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({
  label,
  error,
  helperText,
  className = '',
  type = 'text',
  ...props
}, ref) => {
  const inputClasses = [
    'input',
    error && 'input-error',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={inputClasses}
        {...props}
      />
      {error && <span className="input-error-text">{error}</span>}
      {helperText && !error && (
        <span className="input-helper-text">{helperText}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;