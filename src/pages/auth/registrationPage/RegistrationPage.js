import React from "react";
import LoginForm from "../../../Components/auth/loginForm/LoginForm";
import Header from '../../../containers/header/Header'
import Section from "../../../containers/section/Section";
import styles from './styles.module.scss'

const RegistrationPage = () => {
  return (
    <section className={styles.RegistrationPage}>
      <Header />
      <div className={styles.container}>
        <Section title='Registration-Page'>
         
        </Section>
      </div>
    </section>
  );
};

export default RegistrationPage;
