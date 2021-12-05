import React from 'react'
import Header from '../../containers/header/Header';
import styles from './styles.module.scss'
import OrderList from '../../Components/order/orderList/OrderList';
import OrderForm from '../../Components/order/orderForm/OrderForm';

const OrderPage = () => {
  return (
    <section className={styles.orderPage}>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Making an order</h2>
        <div className={styles.wripper}>
          <div className={styles.orderForm}>
            <OrderForm/>
          </div>
          <OrderList />
        </div>
      </div>
    </section>
  );
}

export default OrderPage;