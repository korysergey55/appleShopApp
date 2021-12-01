import React, { useEffect, useState } from "react"
import { useHistory, useLocation, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUserOperation } from "../../redux/auth/authOperations"
import { authTokenSelector } from '../../redux/auth/authSelectors'
import { pathes } from "../../utils/pathes"

import { mainRoutes } from "../../routes/mainRoutes"
import HeaderList from "./headerList/HeaderList"
import Logo from '../Logo/Logo'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { shopLocation, shopTel, shopEmail, shopAdress } from '../../utils/location'

const Header = () => {
  const history = useHistory();
  const location = useLocation()
  const dispatch = useDispatch();
  const token = useSelector(authTokenSelector);

  useEffect(() => {

    window.addEventListener('scroll', () => window.scrollY)
    return () => {
      window.removeEventListener('scroll', () => window.scrollY)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wripperLogo} onClick={() => history.push(pathes.products)}>
          <Logo />
          <h2 className={styles.title}> Apple-Shop</h2>
        </div>
        <ul className={styles.navList}>
          {mainRoutes.map((route, index) => (
            <HeaderList route={route} token={token} key={index} />
          ))}
          {token && (
            <li className={styles.item}>
              <NavLink
                onClick={() => dispatch(logoutUserOperation())}
                to="login"
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                <FontAwesomeIcon className={styles.icon}
                  icon={faSignOutAlt} color="white" size="2x" />
              </NavLink>
            </li>
          )}
        </ul>
        <div className={styles.wripperTel}>
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
      </div>
    </header>
  );
}
export default Header;