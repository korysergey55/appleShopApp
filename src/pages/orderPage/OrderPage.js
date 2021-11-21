import React from 'react'
import CartOrder from '../../Components/cart/cartOrder/CartOrder';
import Header from '../../containers/header/Header';
import styles from './styles.module.scss'


const OrderPage = () => {
  return (
    <section className={styles.orderPage}>
      <Header />
      <div className={styles.container}>
        <CartOrder />
      </div>
    </section>
  );
}

export default OrderPage;