export interface UserData {
  phone: string
  firstName: string
  lastName: string
  gender: 'male' | 'female'
}

export interface LoanData {
  amount: number
  term: number
}

export interface WorkplaceData {
  workPlace: string
  address: string
}
