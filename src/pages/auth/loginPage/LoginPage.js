import React from "react";
import LoginForm from "../../../Components/auth/loginForm/LoginForm";
import Header from '../../../containers/header/Header'
import Section from "../../../containers/section/Section";
import styles from './styles.module.scss'

const LoginPage = () => {
  return (
    <section className={styles.LoginPage}>
      <Header />
      <div className={styles.container}>
        <Section title='Login with:'>
          <LoginForm />
        </Section>
      </div>
    </section>
  );
};

export default LoginPage;
