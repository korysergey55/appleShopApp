import React from "react";
import { withRouter, NavLink, useHistory } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { pathes } from "../../utils/pathes";
import HeaderList from "./headerList/HeaderList";


import { useDispatch, useSelector } from "react-redux";
import { logoutUserOperation } from "../../redux/auth/authOperations";
import { authTokenSelector } from '../../redux/auth/authSelectors';
import styles from './styles.module.scss'
import Logo from '../Logo/Logo'
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
          {mainRoutes.map((route) => (
            <HeaderList route={route} token={token} key={route.name} />
          ))}

          {token && (
            <li className={styles.item}>
              <NavLink
                onClick={(token) => dispatch(logoutUserOperation(token, history))}
                to="login"
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
export default withRouter(Header);