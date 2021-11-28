import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductWithId } from "../../../../redux/products/productsActions";
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
    dispatch(setProductWithId(product))
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
          <span className="salePrice" >SalePrise</span>
        </p>
        <div className="options">
          <button className="btnDetails" onClick={openDetails}>
            Details
          </button>
          <button className="BtnAddToCart" onClick={addProduct} >
            Add to cart
          </button>
        </div>
      </div>
    </ProductLi>
  );
};

export default ProductItem;
