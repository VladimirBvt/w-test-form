import type { ChangeEvent } from 'react'
import styles from './PhoneInput.module.css'

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  label?: string
  required?: boolean
}

export const PhoneInput = ({
  value,
  onChange,
  error,
  label = 'Телефон',
  required = false,
}: PhoneInputProps) => {
  const formatPhoneNumber = (input: string): string => {
    const digits = input.replace(/\D/g, '')
    const limited = digits.slice(0, 10)

    if (limited.length === 0) return ''
    if (limited.length <= 4) return limited
    if (limited.length <= 7) return `${limited.slice(0, 4)} ${limited.slice(4)}`
    return `${limited.slice(0, 4)} ${limited.slice(4, 7)} ${limited.slice(7)}`
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    onChange(formatted)
  }

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder="0XXX XXX XXX"
        className={`${styles.input} ${error ? styles.inputError : ''}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
