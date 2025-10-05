import type { ChangeEvent } from 'react'
import styles from './Slider.module.css'

interface SliderProps {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  label?: string
  unit?: string
  required?: boolean
}

export const Slider = ({
  value,
  onChange,
  min,
  max,
  step,
  label,
  unit = '',
  required = false,
}: SliderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.labelRow}>
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
          <span className={styles.value}>
            {value}
            {unit}
          </span>
        </div>
      )}
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={styles.slider}
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #d1d5db ${percentage}%, #d1d5db 100%)`,
          }}
        />
        <div className={styles.marks}>
          <span className={styles.mark}>
            {min}
            {unit}
          </span>
          <span className={styles.mark}>
            {max}
            {unit}
          </span>
        </div>
      </div>
    </div>
  )
}
