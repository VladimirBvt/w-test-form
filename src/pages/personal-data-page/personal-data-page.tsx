import { useNavigate } from 'react-router-dom'
import { Controller } from 'react-hook-form'
import { Paths } from '../../shared/lib/const'
import { usePersonalDataForm } from '../../features/loan-application/model'
import { useLoanApplicationStore } from '../../features/loan-application/model'
import { PhoneInput } from '../../shared/ui/phone-input'
import { TextInput } from '../../shared/ui/text-input'
import { Select } from '../../shared/ui/select'
import { Button } from '../../shared/ui/button'
import type { UserData } from '../../shared/lib/types'
import styles from './personal-data-page.module.css'

export const PersonalDataPage = () => {
  const navigate = useNavigate()
  const { personalData, setPersonalData } = useLoanApplicationStore()

  const handleSubmitData = (data: UserData) => {
    setPersonalData(data)
    navigate(Paths.STEP_TWO)
  }

  const { register, handleSubmit, errors, control } = usePersonalDataForm({
    initialData: personalData,
    onSubmit: handleSubmitData,
  })

  const genderOptions = [
    { value: 'male', label: 'Мужской' },
    { value: 'female', label: 'Женский' },
  ]

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Личные данные</h2>

        <div className={styles.fields}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                error={errors.phone?.message}
                label="Телефон"
                required
              />
            )}
          />

          <TextInput
            {...register('firstName')}
            error={errors.firstName?.message}
            label="Имя"
            placeholder="Введите имя"
            required
          />

          <TextInput
            {...register('lastName')}
            error={errors.lastName?.message}
            label="Фамилия"
            placeholder="Введите фамилию"
            required
          />

          <Select
            {...register('gender')}
            options={genderOptions}
            error={errors.gender?.message}
            label="Пол"
            placeholder="Выберите пол"
            required
          />
        </div>

        <div className={styles.actions}>
          <Button type="submit" fullWidth>
            Далее
          </Button>
        </div>
      </form>
    </div>
  )
}
