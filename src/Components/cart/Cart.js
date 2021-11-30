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
        <div className={styles.cart}>
          <h2 className={styles.title}>Cart</h2>
          <ul className={styles.list}>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className={styles.totalContainer}>
            {/* <h3 className={styles.title}>Total price:</h3> */}
            <h2 className={styles.totalPrise}>
              {totalPriceInOrder} грн
            </h2>
            <button
              type="button"
              onClick={() => history.push(pathes.order)}
              className={styles.orderButton}
            >
              Create Order
            </button>
            {/* <button
                type="button"
                onClick={() => dispatch(remuveAllFromCartOperation())}
                className={styles.remuveButton}
              >
                Remuve all
              </button> */}
          </div>
        </div>
      ) : (
        <h2 className={styles.titleEmpty}>Cart is empty!</h2>
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
