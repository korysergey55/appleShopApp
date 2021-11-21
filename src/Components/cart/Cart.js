import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { taggleModal } from "../../redux/cart/cartActions";
import { cartItemSelector, cartTotalPricelSelector } from "../../redux/cart/cartSelectors";
import { remuveAllFromCartOperation } from "../../redux/cart/cartOperations";

import CartItem from "./cartItem/CartItem";
import styles from "./styles.module.scss";
import { pathes } from "../../utils/pathes";


const Cart = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemSelector);
  const totalPriceInOrder = useSelector(cartTotalPricelSelector);

  return (
    <div className={styles.container}>
      {cartItems.length ? (
        <>
          <ul className={styles.list}>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>

          <div className={styles.totalContainer}>
            <div className={styles.titleWripper} >
              <h3 className={styles.title}>Total price:</h3>
              <p className={styles.price}>
                {totalPriceInOrder} <span className={styles.priceSpan}>грн</span>
              </p>
            </div>
            <div className={styles.btnWripper}>
              <button
                type="button"
                onClick={() => history.push(pathes.order)}
                className={styles.orderButton}
              >
                Create Order
              </button>
              <button
                type="button"
                onClick={() => dispatch(remuveAllFromCartOperation())}
                className={styles.remuveButton}
              >
                Remuve all
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Cart is empty!</p>
      )
      }
    </div >
  );
};
export default Cart;

//  const getTotalPrice = () =>
//   cartItems.reduce((acc, product) => {
//    acc += Number(product.price);
//    return acc;
//   }, 0);
