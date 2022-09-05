import * as yup from 'yup'

const borrowerName = 'Please enter name'
const borrowerPhone = 'Please enter correct phone like +############'
const debtName = 'Please enter debt name'
const outstandingAmount = 'Please enter correct amount'
const interestRate = 'Please enter correct interest rate'
const minimalPayment = 'Please enter correct interest payment'
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

export const DebtSchema = yup.object().shape({
  borrowerName: yup.string().typeError(borrowerName).required(borrowerName),
  borrowerPhone: yup
    .string()
    .length(13, borrowerPhone)
    .typeError(borrowerPhone)
    .required(borrowerPhone)
    .matches(phoneRegExp, borrowerPhone),
  debtName: yup.string().typeError(debtName).required(debtName),
  outstandingAmount: yup.number().typeError(outstandingAmount).required(outstandingAmount).positive(outstandingAmount),
  interestRate: yup.number().typeError(interestRate).required(interestRate).positive(interestRate),
  minimalPayment: yup.number().typeError(minimalPayment).required(minimalPayment).positive(minimalPayment),
})

export const PaymentSchema = yup.object().shape({
  extraPayment: yup.number().typeError(minimalPayment).required(minimalPayment).positive(minimalPayment),
})
