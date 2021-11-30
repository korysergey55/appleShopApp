import React from 'react';
import Header from '../../containers/header/Header'
import ContactForm from '../../Components/contact/contactForm/ContactForm'
import ReachUs from '../../Components/contact/reachUs/ReachUs';
import CustomersSaying from '../../Components/customersSay/CustomersSay';
import styles from "./styles.module.scss";
import Footer from '../../containers/footer/Footer'

const ContactsPage = () => {
  return (
    <section className={styles.contactPage}>
      <Header />
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <div className={styles.map}></div>
          <ReachUs />
        </div>
        <ContactForm />
        <CustomersSaying />
      </div>
      <Footer/>
    </section>
  );
};

export default ContactsPage;