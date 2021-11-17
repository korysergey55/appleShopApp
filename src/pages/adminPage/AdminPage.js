import React from "react";
import Section from "../../containers/section/Section";
import AdvForm from "../../Components/admin/AdvForm";
import Header from '../../containers/header/Header'
import styles from './styles.module.scss'

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <Header />
      <div className={styles.container}>
        <Section title='Administration'>
          <AdvForm />
        </Section>
      </div>
    </div>
  );
};

export default AdminPage;
