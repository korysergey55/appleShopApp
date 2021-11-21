import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderOperation } from "../../../redux/cart/cartOperations";
import {
  cartItemSelector,
  cartTotalPricelSelector,
} from "../../../redux/cart/cartSelectors";
import CartItem from "../cartItem/CartItem";
import styles from './styles.module.scss'

const CartOrder = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemSelector);
  const totalPrice = useSelector(cartTotalPricelSelector);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Goods in yors order</h2>
      <ul className={styles.orderList}>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      {cartItems.length > 0 &&
        <div className={styles.wripper}>
          <h2 className={styles.total}>
            Total price: {totalPrice} грн{" "}
          </h2>
          <button
            className={styles.orderButton}
            onClick={() => dispatch(createOrderOperation())}
          >
            Create order
          </button>
        </div>}
    </div>
  );
};

export default CartOrder;



//  const TotalPrice = () =>
//   cartItems.reduce((acc, product) => {
//    acc += Number(product.price);
//    return acc;
//   }, 0);
