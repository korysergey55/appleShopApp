import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setProductWithIdAction } from "../../../../redux/products/productsActions";
import styles from "./styles.module.scss";

const OrderItem = ({ product }) => {
  const { name, price, category, id, image, qantity } = product;
  const history = useHistory()
  const dispatch = useDispatch()

  const openDetails = () => {
    dispatch(setProductWithIdAction(product))
    history.push(`/products/${category}/${id}`)
  };

  return (
    <li className={styles.orderItem}>
      <div className={styles.imgWripper}>
        <img className={styles.img}
          src={image}
          alt='productImg'
          onClick={openDetails} />
      </div>
      <div className={styles.wripper}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.qantity}>{qantity} шт</p>
        <span className={styles.price}> {price} грн</span>
      </div>
    </li>
  );
};

export default OrderItem;
