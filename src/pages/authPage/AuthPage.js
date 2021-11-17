import React from "react";
import AuthForm from "../../Components/auth/AuthForm";
import Header from '../../containers/header/Header'
import styles from './styles.module.scss'

const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <Header />
      <div className={styles.container}>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
