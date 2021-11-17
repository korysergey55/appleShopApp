import React, { useEffect } from "react";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";

import { ProductItem } from "./ProductItemDetailsStyled";

import { getProductWithIdSelector } from "../../redux/products/productsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdOperation } from "../../redux/products/productsOperations";
import { addToCartOperation, bayNowOperation } from "../../redux/cart/cartOperations";


const ProductItemDetails = () => {

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const productById = useSelector(getProductWithIdSelector);

  const category = match.params.category;
  const productId = match.params.productID;

  useEffect(() => {
    dispatch(getProductByIdOperation(category, productId));
  }, [dispatch, category, productId]);

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from);
    } else history.push(`/products/${category}`);
  };

  return (
    <ProductItem>
      <button className="goBack" onClick={goBack}>
        Go back
      </button>

      {productById && (
        <div className="itemContainer">
          <h3 className="title">{productById.name}</h3>
          <div className="imageWrapper">
            <img
              src={productById.image}
              alt={productById.name}
              className="img"
            />
          </div>
          <p className="description">{productById.description}</p>
          <p className="price">
            {productById.isSale ? (
              <>
                <span className="sale">{productById.price}</span>
                <span className=" withoutSale">{(productById.price - productById.price / 10).toFixed(0)}</span>{" "}
              </>
            ) : (
                <span className="withoutSale">{productById.price}</span>
            )}
            {" грн"}
          </p>
          <div className="options">
            <button
              onClick={() => dispatch(addToCartOperation(productById))}
              className="addToCart"
            >
              Add to cart
            </button>
            <button onClick={() => dispatch(bayNowOperation(history, productById))}
              className="bayNow">
              Bay Now
            </button>
          </div>
        </div>
      )}
    </ProductItem>
  );
};

export default withRouter(ProductItemDetails);
