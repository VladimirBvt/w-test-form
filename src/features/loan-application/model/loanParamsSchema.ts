import * as yup from 'yup'

export const loanParamsSchema = yup.object({
  amount: yup
    .number()
    .required('Сумма займа обязательна')
    .min(200, 'Минимальная сумма займа 200$')
    .max(1000, 'Максимальная сумма займа 1000$')
    .test('step-100', 'Сумма должна быть кратна 100', (value) => {
      if (!value) return false
      return value % 100 === 0
    }),
  term: yup
    .number()
    .required('Срок займа обязателен')
    .min(10, 'Минимальный срок займа 10 дней')
    .max(30, 'Максимальный срок займа 30 дней')
    .integer('Срок должен быть целым числом'),
})

export type LoanParamsFormValues = yup.InferType<typeof loanParamsSchema>
