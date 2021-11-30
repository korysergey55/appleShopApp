import * as React from 'react'
import { shopLocation, shopTel, shopEmail, shopAdress } from '../../utils/location'
import SotialList from '../sotialList/SotialList'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className={styles.title}>Contact us </h4>
            <div className={styles.wripper}>
              <a className={styles.link}
                href={shopLocation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faMapMarkerAlt}
                  color="#ffffff"
                  size="3x"
                />
                {shopAdress}
              </a>
            </div>
            <div className={styles.wripper}>
              <a className={styles.link} href={`tel:${shopTel}`}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faMobileAlt}
                  color="#ffffff"
                  size="3x"
                />
                {shopTel}
              </a>
            </div>
            <div className={styles.wripper}>
              <a className={styles.link} href={`mailto:${shopEmail}`}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faEnvelope}
                  color="#ffffff"
                  size="3x"
                />
                {shopEmail}
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <h4 className={styles.title}>Opening Hours</h4>
            <p className={styles.subtitle}>Monday – Saturday</p>
            <p className={styles.text}>12.00 – 14.45</p>
            <p className={styles.subtitle}>Sunday – Thursday</p>
            <p className={styles.text}>17.30 – 00.00</p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.title}>Useful Links</h4>
            <p className={styles.text}>About us</p>
            <p className={styles.text}>Contact</p>
            <p className={styles.text}>Shop</p>
            <SotialList />
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p className={styles.text}>
          Copyright 2020, Groxi Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
