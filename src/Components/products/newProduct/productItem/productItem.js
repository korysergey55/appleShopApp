import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductWithId, setProductWithIdAction } from "../../../../redux/products/productsActions";
import { addToCartOperation } from "../../../../redux/cart/cartOperations";

import { ProductLi } from "./Styled";
import { cartItemSelector } from "../../../../redux/cart/cartSelectors";


const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const cartItems = useSelector(cartItemSelector)

  const addToCart = () => {
    const isDublicate = cartItems.filter((item) => item.id === product.id)
    console.log(isDublicate)
    if (isDublicate.length) {
      return
    }
    dispatch(addToCartOperation(product));
  };

  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${product.id}`,
      state: { from: location.pathname },
    });
    dispatch(setProductWithIdAction(product))
  };

  return (
    <ProductLi>
      <div className="content">
        <h3 className="title">{product.name}</h3>
        <div className="imgWrapper" onClick={openDetails}>
          <img
            src={product.image}
            alt={product.name}
            className="img"
          />
        </div>

        <p className="price">
          <span className="withoutSalePrice"> {product.price} грн</span>{" "}
          <span className="salePrice" >Old-price</span>
        </p>
        <div className="options">
          <button className="btnDetails" onClick={openDetails}>
            Details
          </button>
          <button className="BtnAddToCart" onClick={addToCart} >
            Add to cart
          </button>
        </div>
      </div>
    </ProductLi>
  );
};

export default ProductItem;
