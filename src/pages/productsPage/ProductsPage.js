import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Header from '../../containers/header/Header'
import Filter from "../../Components/filter/Filter";
import ProductRout from "../../Components/products/productsRouts/ProductRouts";
import ProductNavLinks from "../../Components/products/productNavLinks/ProductNavLinks";
import styles from "./styles.module.scss";

const ProductsPage = () => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    history.push(match.path + "/phones");
  }, [history, match.path]);

  return (
    <div className={styles.productPage}>
      <Header />
      <div className={styles.container}>
        <div className={styles.wripper}>
          {/* <Filter /> */}
          <ProductNavLinks />
        </div>
        <ProductRout />
      </div>
    </div>
  );
};

export default ProductsPage;
