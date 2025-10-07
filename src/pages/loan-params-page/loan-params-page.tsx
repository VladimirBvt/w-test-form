import { useNavigate } from 'react-router-dom'
import { Controller } from 'react-hook-form'
import { Paths } from '../../shared/lib/const'
import { useLoanParamsForm } from '../../features/loan-application/model'
import { useLoanApplicationStore } from '../../features/loan-application/model'
import { Slider } from '../../shared/ui/slider'
import { Button } from '../../shared/ui/button'
import { Modal } from '../../shared/ui/modal'
import type { LoanData } from '../../shared/lib/types'
import styles from './loan-params-page.module.css'

export const LoanParamsPage = () => {
  const navigate = useNavigate()
  const {
    personalData,
    loanData,
    setLoanData,
    isModalOpen,
    openModal,
    closeModal,
    reset,
  } = useLoanApplicationStore()

  const handleSubmitData = (data: LoanData) => {
    setLoanData(data)
    openModal()
  }

  const handleBack = () => {
    navigate(Paths.STEP_TWO)
  }

  const handleModalClose = () => {
    closeModal()
    reset()
    navigate(Paths.HOME)
  }

  const { handleSubmit, errors, control, isSubmitting } = useLoanParamsForm({
    initialData: loanData,
    onSubmit: handleSubmitData,
    firstName: personalData.firstName || '',
    lastName: personalData.lastName || '',
  })

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Параметры займа</h2>

        <div className={styles.fields}>
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <Slider
                value={field.value}
                onChange={field.onChange}
                min={200}
                max={1000}
                step={100}
                label="Сумма займа"
                unit="$"
                required
              />
            )}
          />

          <Controller
            name="term"
            control={control}
            render={({ field }) => (
              <Slider
                value={field.value}
                onChange={field.onChange}
                min={10}
                max={30}
                step={1}
                label="Срок займа"
                unit=" дней"
                required
              />
            )}
          />
        </div>

        {errors.amount && (
          <p className={styles.error}>{errors.amount.message}</p>
        )}
        {errors.term && <p className={styles.error}>{errors.term.message}</p>}

        <div className={styles.actions}>
          <Button type="button" variant="secondary" onClick={handleBack}>
            Назад
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Подать заявку'}
          </Button>
        </div>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalTitle}>Поздравляем!</h3>
          <p className={styles.modalText}>
            Поздравляем, {personalData.lastName} {personalData.firstName}. Вам
            одобрена {loanData.amount}$ на {loanData.term} дней.
          </p>
          <Button onClick={handleModalClose} fullWidth>
            Закрыть
          </Button>
        </div>
      </Modal>
    </div>
  )
}
