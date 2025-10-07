import { IMaskInput } from 'react-imask'
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
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <IMaskInput
        mask="0000 000 000"
        value={value}
        onAccept={(value) => onChange(value)}
        placeholder="0XXX XXX XXX"
        type="tel"
        className={`${styles.input} ${error ? styles.inputError : ''}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
