import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taggleModal } from "../../redux/cart/cartActions";
import { cartItemSelector, cartTotalPricelSelector } from "../../redux/cart/cartSelectors";
import { remuveAllFromCartOperation } from "../../redux/cart/cartOperations";

import CartListItem from "./cartListItem/CartListItem";
import styles from "./styles.module.scss";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemSelector);
  const totalPriceInOrder = useSelector(cartTotalPricelSelector);

  return (
    <div className={styles.container}>
      {cartItems.length ? (
        <>
          <ul className={styles.list}>
            {cartItems.map((product) => (
              <CartListItem key={product.id} product={product} />
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h3 className={styles.title}>Total price in order:</h3>
            <p className={styles.price}>
              {totalPriceInOrder} <span className={styles.priceSpan}>грн</span>
            </p>
            <button
              type="button"
              onClick={() => dispatch(taggleModal())}
              className={styles.orderButton}
            >
              Bay
            </button>
            <button
              type="button"
              onClick={() => dispatch(remuveAllFromCartOperation())}
              className={styles.remuveOrderButton}
            >
              Remuve all
            </button>
          </div>
        </>
      ) : (
        <p>Cart is empty!</p>
      )}
    </div>
  );
};
export default Cart;

//  const getTotalPrice = () =>
//   cartItems.reduce((acc, product) => {
//    acc += Number(product.price);
//    return acc;
//   }, 0);
