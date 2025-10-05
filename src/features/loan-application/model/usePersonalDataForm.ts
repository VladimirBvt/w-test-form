import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { personalDataSchema, type PersonalDataFormValues } from './personalDataSchema'
import type { UserData } from '../../../shared/lib/types'

interface UsePersonalDataFormProps {
  initialData?: Partial<UserData>
  onSubmit: (data: UserData) => void
}

export const usePersonalDataForm = ({
  initialData,
  onSubmit,
}: UsePersonalDataFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    control,
  } = useForm<PersonalDataFormValues>({
    resolver: yupResolver(personalDataSchema),
    defaultValues: {
      phone: initialData?.phone || '',
      firstName: initialData?.firstName || '',
      lastName: initialData?.lastName || '',
      gender: initialData?.gender || '',
    },
  })

  const onSubmitHandler = (data: PersonalDataFormValues) => {
    onSubmit({
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender as 'male' | 'female',
    })
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmitHandler),
    errors,
    isSubmitting,
    setValue,
    watch,
    control,
  }
}
