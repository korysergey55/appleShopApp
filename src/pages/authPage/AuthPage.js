import React from "react";
import LoginForm from "../../Components/auth/LoginForm";
import Header from '../../containers/header/Header'
import Section from "../../containers/section/Section";
import styles from './styles.module.scss'

const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <Header />
      <div className={styles.container}>
        <Section title='Login with:'>
          <LoginForm />
        </Section>
      </div>
    </div>
  );
};

export default AuthPage;
