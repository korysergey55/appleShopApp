import React from "react";
import styles from "./CartListItemStyled.module.css";
import sprite from "../../../sourses/icons/productsSprite.svg";
import { useDispatch } from "react-redux";
import { removeFromCartByID } from "../../../redux/cart/cartActions";
import Notification from "../../../utils/notify";

const CartListItem = ({ product }) => {

  const dispatch = useDispatch();
  const { name, price, id, image } = product;
  const removeFromCart = () => {
    dispatch(removeFromCartByID(id))
    Notification("removeFromCart");
  };

  return (
    <li className={styles.CartListItemContainer} key={id}>
      <p className={styles.cartItemName}>{name}</p>
      <img src={image} alt={name} className={styles.cartItemNameImage} />
      <p className={styles.cartPrice}>{price} грн</p>
      <div className={styles.iconContainer} onClick={removeFromCart}>
        <svg className={styles.iconBin}>
          <use href={sprite + "#icon-bin"} />
        </svg>
      </div>
    </li>
  );
};

export default CartListItem;
