import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/cart/cartActions";
import { cartItemSelector, cartModalSelector, } from "../../redux/cart/cartSelectors";

import Header from '../../containers/header/Header'
import Cart from "../../Components/cart/Cart";
import Modal from "../../Components/modal/Modal";
import CartOrder from "../../Components/cart/cartOrder/CartOrder";
import Section from "../../containers/section/Section";

import styles from './styles.module.scss'

const CartPage = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(cartModalSelector);
  const cartItems = useSelector(cartItemSelector);

  useEffect(() => {
    dispatch(createOrder(cartItems));
  }, [dispatch, cartItems, openModal]);

  useEffect(() => {
    if (cartItems === 0) {
      dispatch(openModal());
    }
  }, [dispatch, cartItems]);

  return (
    <div className={styles.cartPage}>
      <Header />
      <Section title="Cart-page">
        <Cart />
        {openModal ? <Modal title={'Ваш заказ'}>
          <CartOrder />
        </Modal> : null}
      </Section>
    </div >
  );
};

export default CartPage;
