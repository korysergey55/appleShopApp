import React from "react";
import ResetPassword from "../../../Components/auth/resetForm/ResetForm";
import Header from '../../../containers/header/Header'
import styles from './styles.module.scss'

const ResetPage = () => {
  return (
    <section className={styles.ResetPage}>
      <Header />
      <div className={styles.container}>
        <ResetPassword />
      </div>
    </section>
  );
};

export default ResetPage;
