import React, { useEffect } from "react";
import { NavLink, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { productsRoutes } from "../../routes/productsRoutes";

import Header from '../../containers/header/Header'
import Filter from "../../Components/filter/Filter";
import styles from "./styles.module.scss";

const ProductsPage = () => {
  const history = useHistory();
  const match = useRouteMatch();
  
  useEffect(() => {
    history.push(match.path + "/phones");
  }, [history, match.path]);

  return (
    <section className={styles.productPage}>
      <Header />
      <div className={styles.container}>
        <ul className={styles.list}>
          {productsRoutes.map(
            (route) =>
              route.isLink && (
                <li className={styles.item} key={route.path}>
                  <NavLink
                    to={match.url + route.path}
                    exact={route.exact}
                    icon={route.icon}
                    className={styles.navLink}
                    activeClassName={styles.navLinkActive}
                  >
                    {route.icon}
                    {route.name}
                  </NavLink>
                </li>
              )
          )}
        </ul>
        <Filter />
        <Switch>
          {productsRoutes.map(({ name, category, path, exact, component: MyComponent }) => (
            <Route
              name={name}
              key={path}
              path={match.path + path}
              exact={exact}
              render={() => <MyComponent category={category} />}
            />
          ))}
        </Switch>
      </div>
    </section>
  );
};

export default ProductsPage;
