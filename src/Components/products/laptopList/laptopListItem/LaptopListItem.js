import React from "react";
import { LaptopLi } from "./LaptopListItemStyled";

import { useDispatch } from "react-redux";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { addToCartOperation } from "../../../../redux/cart/cartOperations";


const LaptopListItem = ({ laptop }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const addProduct = () => {
    dispatch(addToCartOperation(laptop));
  };

  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${laptop.id}`,
      state: { from: location.pathname },
    });
  };

  return (
    <LaptopLi>
      <div className="content">
        <h3 className="listItemTitle">{laptop.name}</h3>
        <div className="imageWrapper">
          <img
            src={laptop.image}
            alt={laptop.name}
            className="listItemImage"
            onClick={openDetails}
          />
        </div>
        <p className="priceTitle">
          {laptop.isSale ? (
            <>
              <span className="withSalePrice">
                {laptop.price}</span>{" "}
              <span className="withoutSalePrice">
                {(laptop.price - laptop.price * 10).toFixed(0)}</span>
            </>
          ) : (
            <span className="withoutSalePrice">{laptop.price}</span>
          )}
          {" UAH"}
        </p>
        <div className="options">
          <button className="detailsButton" onClick={openDetails}>
            Details
          </button>
          <button onClick={addProduct} className="addToCartButton">
            Add to cart
          </button>
        </div>
      </div>
    </LaptopLi>
  );
};

export default withRouter(LaptopListItem);
