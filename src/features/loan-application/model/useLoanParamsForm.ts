import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { loanParamsSchema, type LoanParamsFormValues } from './loanParamsSchema'
import type { LoanData } from '../../../shared/lib/types'

interface UseLoansParamsFormProps {
  initialData?: Partial<LoanData>
  onSubmit: (data: LoanData) => void
  firstName: string
  lastName: string
}

interface SubmitApplicationPayload {
  title: string
}

interface SubmitApplicationResponse {
  id: string
  title: string
}

const submitApplication = async (
  payload: SubmitApplicationPayload,
): Promise<SubmitApplicationResponse> => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to submit application')
  }

  return response.json()
}

export const useLoanParamsForm = ({
  initialData,
  onSubmit,
  firstName,
  lastName,
}: UseLoansParamsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    control,
  } = useForm<LoanParamsFormValues>({
    resolver: yupResolver(loanParamsSchema),
    defaultValues: {
      amount: initialData?.amount || 200,
      term: initialData?.term || 10,
    },
  })

  const mutation = useMutation({
    mutationFn: submitApplication,
    onSuccess: (data) => {
      console.log('Application submitted successfully:', data)
    },
    onError: (error) => {
      console.error('Failed to submit application:', error)
    },
  })

  const onSubmitHandler = async (data: LoanParamsFormValues) => {
    try {
      await mutation.mutateAsync({
        title: `${firstName} ${lastName}`,
      })

      onSubmit({
        amount: data.amount,
        term: data.term,
      })
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmitHandler),
    errors,
    isSubmitting: isSubmitting || mutation.isPending,
    setValue,
    watch,
    control,
    mutation,
  }
}
