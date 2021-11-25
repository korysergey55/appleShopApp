import React from 'react';
import Header from '../../containers/header/Header'
import Section from '../../containers/section/Section';
import styles from "./styles.module.scss";
import ContactForm from '../../Components/contact/contactForm/ContactForgm'
import ReachUs from '../../Components/contact/reachUs/ReachUs';

const ContactsPage = () => {
  return (
    <section className={styles.contactPage}>
      <Header />
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.container}>
        <ContactForm />
        <ReachUs />
      </div>
    </section>
  );
};

export default ContactsPage;