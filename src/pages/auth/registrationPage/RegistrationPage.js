import React from "react";
import Header from '../../../containers/header/Header'
import AuthForm from "../../../Components/auth/authForm/AuthForm";
import styles from './styles.module.scss'

const RegistrationPage = () => {
  return (
    <section className={styles.RegistrationPage}>
      <Header />
      <div className={styles.container}>
        <AuthForm title='Registration user' titleSubmit='Registration' login={false} />
      </div>
    </section>
  );
};

export default RegistrationPage;
