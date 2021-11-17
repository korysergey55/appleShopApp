import React from "react";
import styles from './CartOrderStyled.module.css'
import { useDispatch, useSelector } from "react-redux";
import { taggleModal } from "../../../redux/cart/cartActions";
import {
  cartItemSelector,
  cartTotalPricelSelector,
} from "../../../redux/cart/cartSelectors";
import CartListItem from "../cartListItem/CartListItem";

const CartOrder = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemSelector);
  const totalPriceInOrder = useSelector(cartTotalPricelSelector);

  return (
    <>
      <h2 className={styles.cartOrderTitle}>Ваш заказ:</h2>
      <ul className="CartListContainer">
        {cartItems.map((product) => (
          <CartListItem key={product.id} product={product} />
        ))}
      </ul>
      <h2 className={styles.totalInfoTitle}>
        Total price: {totalPriceInOrder} грн{" "}
      </h2>
      <button
        className={styles.orderButton}
        onClick={() => dispatch(taggleModal())}
      >
        Create order
      </button>
    </>
  );
};

export default CartOrder;



//  const TotalPrice = () =>
//   cartItems.reduce((acc, product) => {
//    acc += Number(product.price);
//    return acc;
//   }, 0);
