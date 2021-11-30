import React from "react";
import styles from "./styles.module.scss";
import Header from '../../containers/header/Header'
import Footer from '../../containers/footer/Footer'
import NewProduct from "../../Components/products/newProduct/newProduct";
import { useSelector } from "react-redux";
import { getAllItemsSelector } from "../../redux/products/productsSelectors";
import ProductRout from "../../Components/products/productsRouts/ProductRouts";
import SubForm from "../../containers/subForm/SubForm";

const HomePage = () => {
  const allProducts = useSelector(getAllItemsSelector)

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Recomended products</h2>
        {allProducts?.map((item) =>
          <NewProduct category={item.category} key={item.id} />
        )}
        <ProductRout />
      </div>
      <SubForm/>
      <Footer />
    </div>
  );
};

export default HomePage;
