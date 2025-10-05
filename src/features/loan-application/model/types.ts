import type { Application } from '../../../entities/application/model/types'

export interface LoanApplicationState {
  currentStep: 1 | 2 | 3
  application: Partial<Application>
  isLoading: boolean
  error: string | null
  isModalOpen: boolean
}

export interface LoanApplicationActions {
  setCurrentStep: (step: 1 | 2 | 3) => void
  updateApplication: (data: Partial<Application>) => void
  submitApplication: () => Promise<void>
  resetApplication: () => void
  openModal: () => void
  closeModal: () => void
}

export interface StepValidation {
  isValid: boolean
  errors: Record<string, string>
}
