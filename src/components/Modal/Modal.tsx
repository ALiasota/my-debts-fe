import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useSendExtraNotifyMutation } from '../../redux/debts';
import { yupResolver } from '@hookform/resolvers/yup';
import { PaymentSchema } from '../../types/debtSchema';
import { ReactComponent as CloseIcon } from '../../svg/close.svg';
import styles from './Modal.module.scss';


const modal = document.querySelector('#modal')!;

type Props = {
  id: string | undefined;
  onClose: ()=> void;
}

const Modal: React.FC<Props> = ({ id, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const { register, handleSubmit, formState: { errors } } = useForm<{extraPayment: number}>({
    resolver: yupResolver(PaymentSchema),
  });
  const [sendExtraNotify] = useSendExtraNotifyMutation();
  const onSubmit = (data: {extraPayment: number}) => { 
    const  {extraPayment} = data;  
    sendExtraNotify({extraPayment, id});
    onClose();   
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button
        onClick={onClose} 
        className={styles.modalBbtnClose} 
        type="button">
          <span className={styles.modalBbtnCloseIcon}>
            <CloseIcon width="12px" height="12px" fill="#111C1F" stroke="#111C1F" />
          </span>
        </button>
        <h1 style={{ marginBottom: '24px' }} className={styles.formTitle}>
          Recommend extra payment
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '24px' }} className={styles.sectionCont}>
            <label className={styles.formLabel}>
              <span className={styles.labelText}>Extra payment amount</span>
              <input
                className={styles.formInput}
                style={errors?.extraPayment ? { border: '1px solid #EF476F', width: '360px' } : { width: '360px' }}
                placeholder="Enter amount"
                type="text"
                {...register('extraPayment')}
              />
              {errors?.extraPayment && <p className={styles.errorText}>{errors.extraPayment.message}</p>}
            </label>
          </div>
          <button className={styles.SubmButton} style={{ width: '360px' }} type="submit">
            Recommend extra payment
          </button>
        </form>
      </div>
    </div>,
    modal,
  )
};


export default Modal;