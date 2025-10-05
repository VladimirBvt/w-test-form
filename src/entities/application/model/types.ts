import type {
  UserData,
  LoanData,
  WorkplaceData,
} from '../../../shared/lib/types'

export interface Application {
  user: UserData
  workplace: WorkplaceData
  loan: LoanData
  id?: string
}
