import React from "react";
import { withRouter, NavLink, useHistory } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { pathes } from "../../utils/pathes";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserOperation } from "../../redux/auth/authOperations";
import { authTokenSelector } from '../../redux/auth/authSelectors';
import HeaderList from "./headerList/HeaderList";

import styles from './styles.module.scss'
import Logo from '../Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const history = useHistory();
  const token = useSelector(authTokenSelector);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wripper} onClick={() => history.push(pathes.products)}>
          <Logo />
          <h2 className={styles.title} > Apple-Shop</h2>
        </div>
        <ul className={styles.navigationList}>
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
                  icon={faSignOutAlt} color="white" size="2x"/>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
export default withRouter(Header);