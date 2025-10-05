import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserData, LoanData, WorkplaceData } from '../../../shared/lib/types'

interface LoanApplicationState {
  personalData: Partial<UserData>
  workplaceData: Partial<WorkplaceData>
  loanData: Partial<LoanData>
  isModalOpen: boolean
}

interface LoanApplicationActions {
  setPersonalData: (data: UserData) => void
  setWorkplaceData: (data: WorkplaceData) => void
  setLoanData: (data: LoanData) => void
  openModal: () => void
  closeModal: () => void
  reset: () => void
}

type LoanApplicationStore = LoanApplicationState & LoanApplicationActions

const initialState: LoanApplicationState = {
  personalData: {},
  workplaceData: {},
  loanData: {},
  isModalOpen: false,
}

export const useLoanApplicationStore = create<LoanApplicationStore>()(
  persist(
    (set) => ({
      ...initialState,
      setPersonalData: (data) =>
        set(() => ({
          personalData: data,
        })),
      setWorkplaceData: (data) =>
        set(() => ({
          workplaceData: data,
        })),
      setLoanData: (data) =>
        set(() => ({
          loanData: data,
        })),
      openModal: () =>
        set(() => ({
          isModalOpen: true,
        })),
      closeModal: () =>
        set(() => ({
          isModalOpen: false,
        })),
      reset: () => set(initialState),
    }),
    {
      name: 'loan-application-storage',
    }
  )
)
