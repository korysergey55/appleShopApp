import React from 'react';
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SotialList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="/">
          <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
        </a>
      </li>

      <li className={styles.item}>
        <a className={styles.link} href="/">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </li>
    </ul>
  );
}

export default SotialList;