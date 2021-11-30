import React from "react";
import { useDispatch } from "react-redux";
import { remuveFromCartOperation } from "../../../redux/cart/cartOperations";

import styles from "./styles.module.scss";
import sprite from '../../../sourses/icons/productsSprite.svg'

const CartListItem = ({ product }) => {
  const { name, price, id, image,
    code = '60785', description,
    rait } = product;

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remuveFromCartOperation(id))
  };

  return (
    <li className={styles.item}>
      <img src={image} alt='productImg' className={styles.img} />
      <div className={styles.wripper}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}> {price} грн</span>
        <div className={styles.iconContainer} onClick={removeFromCart}>
          <svg className={styles.iconBin}>
            <use href={sprite + "#icon-bin"} />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
