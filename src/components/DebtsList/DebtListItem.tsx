import React from 'react';
import styles from './DebtsList.module.scss';
import { IDebt } from '../../types/debt.type';
const DebtsListItem: React.FC<IDebt> = ({
  outstandingAmount,
  minimalPayment,
  interestRate,
  _id,
  debtName,
  borrowerName,
}) => {
  console.log(_id);
  return (
    <div className={styles.itemCont}>
      <div className={styles.flexCont}>
        <h2 className={styles.debtName}>{debtName}</h2>
        <button className={styles.notifyButton} type="button">Notify</button>
      </div>
      <p className={styles.borrowerName}>{borrowerName}</p>
      <p className={styles.debtDesctText}>
        Outstanding amount: <span className={styles.debtDesctValue}>${outstandingAmount}</span>
      </p>
      <p className={styles.debtDesctText}>
        Minimal payment: <span className={styles.debtDesctValue}>${minimalPayment}/Month</span>
      </p>
      <p className={styles.debtDesctText}>
        Interest rate: <span className={styles.debtDesctValue}>{interestRate}%</span>
      </p>
    </div>
  )
}

export default DebtsListItem;