import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/cart/cartActions";
import { cartItemSelector, cartModalSelector, } from "../../redux/cart/cartSelectors";

import Header from '../../containers/header/Header'
import Cart from "../../Components/cart/Cart";
import CartModal from "../../Components/cart/cartModal/CartModal";
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

  return (
    <div className={styles.cartPage}>
      <Header />
      <Section title="Cart">
        <Cart />
        {openModal ? <CartModal children={<CartOrder />} /> : null}
      </Section>
    </div>
  );
};

export default CartPage;
