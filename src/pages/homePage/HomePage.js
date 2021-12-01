import React from "react";
import { useSelector } from "react-redux";
import { getAllItemsSelector } from "../../redux/products/productsSelectors";

import Header from '../../containers/header/Header'
import NewProduct from "../../Components/products/newProduct/newProduct";
import SubForm from "../../containers/subForm/SubForm";
import Footer from '../../containers/footer/Footer'

import styles from "./styles.module.scss";

const HomePage = () => {
  const allProducts = useSelector(getAllItemsSelector)

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.hero}>
        <h2 className={styles.heroTitle}>Apple Shop</h2>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Recomended products</h2>
        {allProducts?.map((item) =>
          <NewProduct category={item.category} key={item.id} />
        )}
        <SubForm />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
