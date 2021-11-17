import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taggleModal } from "../../../redux/cart/cartActions";
import {
  cartItemSelector,
  cartTotalPricelSelector,
} from "../../../redux/cart/cartSelectors";
import CartItem from "../cartItem/CartItem";
import styles from './styles.module.scss'

const CartOrder = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemSelector);
  const totalPriceInOrder = useSelector(cartTotalPricelSelector);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ваш заказ:</h2>
      <ul className={styles.orderList}>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className={styles.wripper}>
        <h2 className={styles.total}>
          Total price: {totalPriceInOrder} грн{" "}
        </h2>
        <button
          className={styles.orderButton}
          onClick={() => dispatch(taggleModal())}
        >
          Create order
        </button>
      </div>
    </div>
  );
};

export default CartOrder;



//  const TotalPrice = () =>
//   cartItems.reduce((acc, product) => {
//    acc += Number(product.price);
//    return acc;
//   }, 0);
