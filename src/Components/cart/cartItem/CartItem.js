import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCartByID } from "../../../redux/cart/cartActions";

import styles from "./styles.module.scss";

const CartListItem = ({ product }) => {
  const { name, price, id, image } = product;

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeFromCartByID(id))
  };

  return (
    <li className={styles.item} key={id}>
      <p className={styles.title}>{name}</p>
      <img src={image} alt='productImg' className={styles.img} />
      <p className={styles.price}>{price} грн</p>
      <div className={styles.iconContainer} onClick={removeFromCart}>
        <svg className={styles.iconBin}>
          <use href={sprite + "#icon-bin"} />
        </svg>
      </div>
    </li>
  );
};

export default CartListItem;
