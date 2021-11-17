import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLaptops, setPhones } from "../../redux/products/productsActions";
import {
  NavLink,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { productsRoutes } from "../../routes/productsRoutes";
import { laptopsJSON } from '../../sourses/data/products.js'
import Header from '../../containers/header/Header'
import Filter from "../../Components/filter/Filter";
import Loader from "../../containers/Loader/Loader";
import styles from "./styles.module.scss";

const ProductsPage = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLaptops(laptopsJSON))
    dispatch(setPhones(laptopsJSON))
  }, [dispatch])


  useEffect(() => {
    history.push(match.path + "/phones");
  }, [history, match.path]);

  return (
    <div className={styles.container}>
      <Header />
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
      <Suspense fallback={<Loader/>}>
        <Switch>
          {productsRoutes.map(({ name, path, exact, component }) => (
            <Route
              name={name}
              key={path}
              path={match.path + path}
              exact={exact}
              component={component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default ProductsPage;
