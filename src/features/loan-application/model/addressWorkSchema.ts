import * as yup from 'yup'

export const addressWorkSchema = yup.object({
  workPlace: yup
    .string()
    .required('Место работы обязательно для заполнения'),
  address: yup
    .string()
    .required('Адрес проживания обязателен для заполнения')
    .min(5, 'Адрес должен содержать минимум 5 символов'),
})

export type AddressWorkFormValues = yup.InferType<typeof addressWorkSchema>
