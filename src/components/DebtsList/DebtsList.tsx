import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CirclesWithBar } from  'react-loader-spinner'
import { useFetchDebtsQuery } from '../../redux/debts'; 
import DebtsListItem from './DebtListItem';
import Modal from '../Modal';
import styles from './DebtsList.module.scss';

const DebtsList: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [id, setId] = useState<string | undefined>('');
  const navigate = useNavigate();
  const { data, isLoading } = useFetchDebtsQuery();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openModal = (searchId: string | undefined) => {
    setId(searchId)
    toggleModal()
  }
  return (
    <>
      <div className={styles.headerCont}>
        <h1 className={styles.formTitle}>My Debts</h1>
        <button onClick={() => navigate('/form')} className={styles.addButton} type="button">
          Add Debt
        </button>
      </div>
      {isLoading ? (
        <div className={styles.spinnerCont}>
          <CirclesWithBar
            height="100"
            width="100"
            color="#2CB7B0"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      ) : (
        <ul>
          {data &&
              data.map(({ borrowerName, _id, outstandingAmount, minimalPayment, interestRate, debtName }) => {
                const debt = { borrowerName, _id, outstandingAmount, minimalPayment, interestRate, debtName };
                return (
                  <DebtsListItem
                    key={_id}
                    debt={debt}
                    openModal={openModal}
                  />
                )
              }).reverse()}
        </ul>
      )}
      {showModal && <Modal id={id} onClose={toggleModal } />}
    </>
  )
};

export default DebtsList;
