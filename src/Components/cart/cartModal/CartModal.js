import React from "react";
import styles from "./CartModalStyled.module.css";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { taggleModal } from "../../../redux/cart/cartActions";
import { useEffect } from "react";

const CartModal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {

    window.addEventListener("keydown", handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEsc = (evt) => {
    if (evt.code === "Escape") {
      dispatch(taggleModal());
    }
  };

  const handleBackdropClick = (evt) => {
    if (evt.target !== evt.currentTarget) return;
    dispatch(taggleModal());
  };

  const modalRoot = document.querySelector("#modal-root");
  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <h2>Ваш заказ</h2>
      <div className={styles.Modal}>
        <button
          type="button"
          className={styles.closeModal}
          onClick={() => dispatch(taggleModal())}
        > X
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default CartModal;
