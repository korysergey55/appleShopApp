import React from "react";
import { pathes } from '../../../utils/pathes'
import LoginForm from "../../../Components/auth/loginForm/LoginForm";
import Header from '../../../containers/header/Header'
import styles from './styles.module.scss'
import { useHistory } from "react-router";
useHistory

const LoginPage = () => {
  const history = useHistory()
  return (
    <section className={styles.LoginPage}>
      <Header />
      <div className={styles.container}>
        <LoginForm />
        <div className={styles.registWripper}>
          <h2 className={styles.subtitle}>Registration new user</h2>
          <button className={styles.btn} type='button' onClick={() => {
            history.push(pathes.registration)
          }}>Registration</button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
