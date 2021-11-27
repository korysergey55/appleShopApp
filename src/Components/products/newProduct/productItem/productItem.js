import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { addToCartOperation } from "../../../../redux/cart/cartOperations";

import { ProductLi } from "./Styled";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const addProduct = () => {
    dispatch(addToCartOperation(product));
  };

  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${product.id}`,
      state: { from: location.pathname },
    });
  };

  return (
    <ProductLi>
      <div className="content">
        <h3 className="title">{product.name}</h3>
        <div className="imgWrapper">
          <img
            src={product.image}
            alt={product.name}
            className="img"
            onClick={openDetails}
          />
        </div>

        <p className="price">
          <span className="withoutSalePrice"> {product.price} грн</span>{" "}
          <span className="salePrice" >SalePrise</span>
        </p>
        <div className="options">
          <button className="btnDetails" onClick={openDetails}>
            Details
          </button>
          <button onClick={addProduct} className="BtnAddToCart">
            Add to cart
          </button>
        </div>
      </div>
    </ProductLi>
  );
};

export default ProductItem;
