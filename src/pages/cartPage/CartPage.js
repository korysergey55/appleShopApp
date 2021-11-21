import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderAction } from "../../redux/cart/cartActions";
import { cartItemSelector } from "../../redux/cart/cartSelectors";

import Header from '../../containers/header/Header'
import Cart from "../../Components/cart/Cart";

import styles from './styles.module.scss'

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemSelector);

  useEffect(() => {
    dispatch(createOrderAction(cartItems));
  }, [dispatch, cartItems,]);


  return (
    <div className={styles.cartPage}>
      <section className={styles.cartPage}>
        <Header />
        <div className={styles.container}>
          <Cart />
        </div>
      </section >
    </div >
  );
};

export default CartPage;
