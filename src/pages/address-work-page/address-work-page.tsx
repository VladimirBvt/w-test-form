import { useNavigate } from 'react-router-dom'
import { Paths } from '../../shared/lib/const'
import { useAddressWorkForm } from '../../features/loan-application/model'
import { useLoanApplicationStore } from '../../features/loan-application/model'
import { TextInput } from '../../shared/ui/text-input'
import { Select } from '../../shared/ui/select'
import { Button } from '../../shared/ui/button'
import type { WorkplaceData } from '../../shared/lib/types'
import styles from './address-work-page.module.css'

export const AddressWorkPage = () => {
  const navigate = useNavigate()
  const { workplaceData, setWorkplaceData } = useLoanApplicationStore()

  const handleSubmitData = (data: WorkplaceData) => {
    setWorkplaceData(data)
    navigate(Paths.STEP_THREE)
  }

  const handleBack = () => {
    navigate(Paths.STEP_ONE)
  }

  const {
    register,
    handleSubmit,
    errors,
    categories,
    isCategoriesLoading,
    categoriesError,
  } = useAddressWorkForm({
    initialData: workplaceData,
    onSubmit: handleSubmitData,
  })

  const workPlaceOptions = categories.map((category) => ({
    value: category,
    label: category,
  }))

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Адрес и место работы</h2>

        <div className={styles.fields}>
          <Select
            {...register('workPlace')}
            options={workPlaceOptions}
            error={
              errors.workPlace?.message ||
              (categoriesError ? 'Не удалось загрузить категории' : undefined)
            }
            label="Место работы"
            placeholder={
              isCategoriesLoading ? 'Загрузка...' : 'Выберите место работы'
            }
            required
          />

          <TextInput
            {...register('address')}
            error={errors.address?.message}
            label="Адрес проживания"
            placeholder="Введите адрес"
            required
          />
        </div>

        <div className={styles.actions}>
          <Button type="button" variant="secondary" onClick={handleBack}>
            Назад
          </Button>
          <Button type="submit">Далее</Button>
        </div>
      </form>
    </div>
  )
}
