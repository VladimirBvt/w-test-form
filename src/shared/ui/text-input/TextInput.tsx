import { forwardRef, type InputHTMLAttributes } from 'react'
import styles from './TextInput.module.css'

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: string
  label?: string
  required?: boolean
  type?: 'text' | 'email' | 'tel'
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, required = false, type = 'text', ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          {...props}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
