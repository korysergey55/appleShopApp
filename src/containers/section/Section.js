import React from "react";
import styles from './styles.module.scss'

const Section = ({ children, title: myTitle, }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>{myTitle}</h2>
      {children}
    </div>
  );
};

export default Section;
