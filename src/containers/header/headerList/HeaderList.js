import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from './styles.module.scss'
import { useSelector } from "react-redux";
import { cartItemLengthSelector } from "../../../redux/cart/cartSelectors";

const HeaderList = ({ route, token, }) => {
  const cartItemsLength = useSelector(cartItemLengthSelector);
  return (
    <>
      {!route.isPrivate && !route.isRestricted && route.name && (
        <li className={styles.item} key={route.path}>
          <NavLink
            to={route.path}
            exact={route.exact}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            {route.name}
            {route.cart && (
              <span className={styles.cartLength}>{cartItemsLength}</span>
            )}
          </NavLink>
        </li>
      )}
      {route.isPrivate && token && route.name && (
        <li className={styles.item} key={route.path}>
          <NavLink
            to={route.path}
            exact={route.exact}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            {route.name}
          </NavLink>
        </li>
      )}
      {!route.isPrivate && route.isRestricted && !token && route.name && (
        <li className={styles.item} key={route.path}>
          <NavLink
            to={route.path}
            exact={route.exact}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            {route.name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default withRouter(HeaderList);
