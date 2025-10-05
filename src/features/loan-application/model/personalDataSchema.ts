import * as yup from 'yup'

export const personalDataSchema = yup.object({
  phone: yup
    .string()
    .required('Телефон обязателен для заполнения')
    .test('phone-format', 'Введите корректный номер телефона (0XXX XXX XXX)', (value) => {
      if (!value) return false
      const digitsOnly = value.replace(/\s/g, '')
      return digitsOnly.length === 10 && /^\d{10}$/.test(digitsOnly)
    }),
  firstName: yup
    .string()
    .required('Имя обязательно для заполнения')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .matches(/^[а-яА-ЯёЁa-zA-Z\s-]+$/, 'Имя может содержать только буквы'),
  lastName: yup
    .string()
    .required('Фамилия обязательна для заполнения')
    .min(2, 'Фамилия должна содержать минимум 2 символа')
    .matches(/^[а-яА-ЯёЁa-zA-Z\s-]+$/, 'Фамилия может содержать только буквы'),
  gender: yup
    .string()
    .required('Пол обязателен для заполнения')
    .oneOf(['male', 'female'], 'Выберите корректное значение'),
})

export type PersonalDataFormValues = yup.InferType<typeof personalDataSchema>
