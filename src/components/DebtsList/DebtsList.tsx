import React from 'react';
// import { useSelector } from 'react-redux';
// import { getFilter } from 'redux/filter/filter-selectors';
// import { useFetchContactsQuery } from 'redux/contacts';
import DebtsListItem from './DebtListItem';
import styles from './DebtsList.module.scss';

const DebtsList: React.FC = () => {  
  const data = [
    {
      borrowerName: 'Andrii',
      outstandingAmount: 1000,
      minimalPayment: 200,
      interestRate: 5,
      _id: '1',
      debtName: 'Car1'
    },
    {
      borrowerName: 'Andrii',
      outstandingAmount: 1000,
      minimalPayment: 200,
      interestRate: 5,
      _id: '2',
      debtName: 'Car2'
    },
    {
      borrowerName: 'Andrii',
      outstandingAmount: 1000,
      minimalPayment: 200,
      interestRate: 5,
      _id: '3',
      debtName: 'Car3'
    },
    {
      borrowerName: 'Andrii',
      outstandingAmount: 1000,
      minimalPayment: 200,
      interestRate: 5,
      _id: '4',
      debtName: 'Car4'
    },
    {
      borrowerName: 'Andrii',
      outstandingAmount: 1000,
      minimalPayment: 200,
      interestRate: 5,
      _id: '5',
      debtName: 'Car5'
    }
  ];

  return (
    <>
      <div className={styles.headerCont}>
        <h1 className={styles.formTitle}>My Debts</h1>
        <button className={styles.addButton} type="button">Add Debt</button>
      </div>
      <ul>
        {data.map(({ borrowerName, _id, outstandingAmount, minimalPayment, interestRate, debtName }) => {
          return (
            <DebtsListItem
              key={_id}
              borrowerName={borrowerName}
              _id={_id}
              outstandingAmount={outstandingAmount}
              minimalPayment={minimalPayment}
              interestRate={interestRate}
              debtName={debtName}
            />
          )
        })}
      </ul>
    </>
  )
}

export default DebtsList;
