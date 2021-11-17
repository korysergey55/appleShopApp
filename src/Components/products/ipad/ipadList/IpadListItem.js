import React from "react";
import { IpadLi} from './IpadListItemStyled'
import Notification from "../../../../utils/notify";

import { useDispatch } from "react-redux";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { addToCart } from "../../../../redux/cart/cartActions";

const IpadListItem = ({ ipad }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const addProduct = () => {
    dispatch(addToCart(ipad));
    Notification("addProductToCartSuccess");
  };

  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${ipad.id}`,
      state: { from: location.pathname },
    });
  };

  return (
    <IpadLi >
      <div className="content">
        <h3 className="listItemTitle">{ipad.name}</h3>
        <div className="imageWrapper">
          <img
            src={ipad.image}
            alt={ipad.name}
            className="listItemImage"
            onClick={openDetails}
          />
        </div>
        <p className="priceTitle">
          {ipad.isSale ? (
            <>
              <span className="withSalePrice">
                {ipad.price}</span>{" "}
              <span className="withoutSalePrice">
                {(ipad.price - ipad.price * 10).toFixed(0)}</span>
            </>
          ) : (
            <span className="withoutSalePrice">{ipad.price}</span>
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
    </IpadLi>
  );
};

export default withRouter(IpadListItem);
