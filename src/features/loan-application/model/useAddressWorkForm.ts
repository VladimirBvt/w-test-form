import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useQuery } from '@tanstack/react-query'
import {
  addressWorkSchema,
  type AddressWorkFormValues,
} from './addressWorkSchema'
import type { WorkplaceData } from '../../../shared/lib/types'

interface UseAddressWorkFormProps {
  initialData?: Partial<WorkplaceData>
  onSubmit: (data: WorkplaceData) => void
}

const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch('https://dummyjson.com/products/category-list')
  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }
  return response.json()
}

export const useAddressWorkForm = ({
  initialData,
  onSubmit,
}: UseAddressWorkFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    control,
  } = useForm<AddressWorkFormValues>({
    resolver: yupResolver(addressWorkSchema),
    defaultValues: {
      workPlace: initialData?.workPlace || '',
      address: initialData?.address || '',
    },
  })

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ['productCategories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
  })

  const onSubmitHandler = (data: AddressWorkFormValues) => {
    onSubmit({
      workPlace: data.workPlace,
      address: data.address,
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
    categories,
    isCategoriesLoading,
    categoriesError,
  }
}
