import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './scss/App.module.scss';
const DebtsList = lazy(() => import('./components/DebtsList'));
const DebtsForm = lazy(() => import('./components/DebtsForm'));

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<DebtsList />} />
          <Route path="form" element={<DebtsForm />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
