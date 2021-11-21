import React from "react";
import { AppleWatchLi } from './styled'

import { useDispatch } from "react-redux";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { addToCartOperation } from "../../../../redux/cart/cartOperations";

const AppleWatchListItem = ({ watch }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const addProduct = () => {
    dispatch(addToCartOperation(watch));
  };

  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${watch.id}`,
      state: { from: location.pathname },
    });
  };

  return (
    <AppleWatchLi >
      <div className="content">
        <h3 className="listItemTitle">{watch.name}</h3>
        <div className="imageWrapper">
          <img
            src={watch.image}
            alt={watch.name}
            className="listItemImage"
            onClick={openDetails}
          />
        </div>
        <p className="priceTitle">
          {watch.isSale ? (
            <>
              <span className="withSalePrice">
                {watch.price}</span>{" "}
              <span className="withoutSalePrice">
                {(watch.price - watch.price * 10).toFixed(0)}</span>
            </>
          ) : (
            <span className="withoutSalePrice">{watch.price}</span>
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
    </AppleWatchLi>
  );
};

export default withRouter(AppleWatchListItem);
