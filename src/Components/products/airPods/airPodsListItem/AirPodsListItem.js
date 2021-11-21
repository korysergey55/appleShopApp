import React from "react";
import { AirPodsLi} from './styled'
import { useDispatch } from "react-redux";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { addToCart } from "../../../../redux/cart/cartActions";

const AirPodsListItem = ({ airPod }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const addProduct = () => {
    dispatch(addToCart(airPod));
      };

  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${airPod.id}`,
      state: { from: location.pathname },
    });
  };

  return (
    <AirPodsLi>
      <div className="content">
        <h3 className="listItemTitle">{airPod.name}</h3>
        <div className="imageWrapper">
          <img
            src={airPod.image}
            alt={airPod.name}
            className="listItemImage"
            onClick={openDetails}
          />
        </div>
        <p className="priceTitle">
          {airPod.isSale ? (
            <>
              <span className="withSalePrice">
                {airPod.price}</span>{" "}
              <span className="withoutSalePrice">
                {(airPod.price - airPod.price * 10).toFixed(0)}</span>
            </>
          ) : (
            <span className="withoutSalePrice">{airPod.price}</span>
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
    </AirPodsLi>
  );
};

export default withRouter(AirPodsListItem);
