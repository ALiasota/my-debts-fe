import React from 'react';
import styles from './DebtsList.module.scss';
import { IDebt } from '../../types/debt.type';
import { ReactComponent as BellIcon } from '../../svg/bell.svg';
import { ReactComponent as PlusIcon } from '../../svg/plus.svg';
import { useSendNotifyMutation } from '../../redux/debts';


type Props = {
  debt: IDebt;
  openModal: (searchId: string | undefined) => void;
}

const DebtsListItem: React.FC<Props> = ({ debt, openModal }) => {
  const { borrowerName, _id, outstandingAmount, minimalPayment, interestRate, debtName } = debt;
  const [sendNotify] = useSendNotifyMutation();
  const handleSendNotify = () => { sendNotify({_id}) };
  return (
    <div className={styles.itemCont}>
      <div className={styles.flexCont}>
        <h2 className={styles.debtName}>{debtName}</h2>
        <div className={styles.buttonsCont}>
          <button
            onClick={()=> openModal(_id)}
            className={`${styles.notifyButton} ${styles.extraPaymentButton}`}
            type="button">
            <span className={styles.notifyButtonSvgBell}>
              <PlusIcon width="16px" height="16px" fill="inherits" stroke="inherits" />
            </span>
            Extra payment
          </button>
          <button onClick={handleSendNotify} className={styles.notifyButton} type="button">
            <span className={styles.notifyButtonSvgBell}>
              <BellIcon width="16px" height="16px" fill="inherits" stroke="inherits" />
            </span>
            Notify
          </button>          
        </div>
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