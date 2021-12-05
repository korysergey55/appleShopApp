import React from "react";
import { useSelector } from "react-redux";
import { cartItemSelector, cartTotalPricelSelector } from "../../../redux/cart/cartSelectors";
import OrderItem from '../orderList/orderItem/OrderItem'
import styles from './styles.module.scss'

const OrderList = () => {
  const cartItems = useSelector(cartItemSelector);
  const totalPrice = useSelector(cartTotalPricelSelector);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Goods in your order</h2>
      <ul className={styles.orderList}>
        {cartItems.map((product) => (
          <OrderItem key={product.id} product={product} />
        ))}
      </ul>
      {cartItems.length > 0 &&
        <div className={styles.wripper}>
          <h2 className={styles.total}>
            Total: {totalPrice} грн{" "}
          </h2>
        </div>}
    </div>
  );
};

export default OrderList;



//  const TotalPrice = () =>
//   cartItems.reduce((acc, product) => {
//    acc += Number(product.price);
//    return acc;
//   }, 0);
