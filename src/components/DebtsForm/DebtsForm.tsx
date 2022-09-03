import React, { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DebtSchema } from '../../types/debtSchema';
import styles from './DebtsForm.module.scss';
import { IDebt } from '../../types/debt.type';
import BackIcon from '../../svg/back.svg';

const DebtsForm: React.FC = () => {  
  const { register, handleSubmit, formState: { errors } } = useForm<IDebt>({
    resolver: yupResolver(DebtSchema),
  });

  const onSubmit = (data: IDebt) => {
    console.log(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
  };


  return (
    <>
      <button className={styles.GoBackButton} type="button">
        <span>
          <svg className={styles.GoBackButtonSvgBack}>
            <use href="../../svg/InlineSprite.svg#3"></use>
          </svg>
        </span>
        Go Back
      </button>
      <h1 className={styles.formTitle}>Add A Deft</h1>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={styles.sectionCont}>
          <p className={styles.titleSection}>Borrower</p>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Borrower name</span>
            <input
              className={styles.formInput}
              style={errors?.borrowerName && { border: '1px solid #EF476F' }}
              placeholder="Enter name"
              type="text"
              {...register('borrowerName')}
            />
            {errors?.borrowerName && <p className={styles.errorText}>{errors.borrowerName.message}</p>}
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Borrower phone</span>
            <input
              className={styles.formInput}
              style={errors?.borrowerPhone && { border: '1px solid #EF476F' }}
              placeholder="Enter phone number"
              type="text"
              {...register('borrowerPhone')}
            />
            {errors?.borrowerPhone && <p className={styles.errorText}>{errors.borrowerPhone.message}</p>}
          </label>
        </div>
        <div className={styles.sectionCont}>
          <p className={styles.titleSection}>Debt</p>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Debt name</span>
            <input
              className={styles.formInput}
              style={errors?.debtName && { border: '1px solid #EF476F' }}
              placeholder="Enter debt name"
              type="text"
              {...register('debtName')}
            />
            {errors?.debtName && <p className={styles.errorText}>{errors.debtName.message}</p>}
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Outstanding amount</span>
            <input
              className={styles.formInput}
              style={errors?.outstandingAmount && { border: '1px solid #EF476F' }}
              placeholder="Enter amount"
              type="text"
              {...register('outstandingAmount')}
            />
            {errors?.outstandingAmount && <p className={styles.errorText}>{errors.outstandingAmount.message}</p>}
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Interest rate</span>
            <input
              className={styles.formInput}
              style={errors?.interestRate && { border: '1px solid #EF476F' }}
              placeholder="Enter rate"
              type="text"
              {...register('interestRate')}
            />
            {errors?.interestRate && <p className={styles.errorText}>{errors.interestRate.message}</p>}
          </label>
          <label className={styles.formLabel}>
            <span className={styles.labelText}>Minimal payment</span>
            <input
              className={styles.formInput}
              style={errors?.minimalPayment && { border: '1px solid #EF476F' }}
              placeholder="Enter payment"
              type="text"
              {...register('minimalPayment')}
            />
            {errors?.minimalPayment && <p className={styles.errorText}>{errors.minimalPayment.message}</p>}
          </label>
        </div>
        <button className={styles.SubmButton} type="submit">
          Add Debt
        </button>
      </form>
    </>
  )
}


export default DebtsForm;