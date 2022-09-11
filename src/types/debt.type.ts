export interface IDebt {
  borrowerName: string
  borrowerPhone?: string
  debtName: string
  outstandingAmount: number
  interestRate: number
  minimalPayment: number
  _id?: string
  expiryDate: Date
}
