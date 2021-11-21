import React, { useEffect } from "react";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { getProductWithIdSelector } from "../../redux/products/productsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdOperation } from "../../redux/products/productsOperations";
import { addToCartOperation } from "../../redux/cart/cartOperations";
import styles from './styles.module.scss'

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
    <div className={styles.page}>
      <button className={styles.goBack} onClick={goBack}>
        Go back
      </button>

      {productById && (
        <div className={styles.itemContainer}>
          <h3 className={styles.title}>{productById.name}</h3>
          <div className={styles.imageWrapper}>
            <img
              src={productById.image}
              alt={productById.name}
              className={styles.img}
            />
          </div>
          <p className={styles.description}>{productById.description}</p>
          <p className={styles.price}>
            {productById.isSale ? (
              <>
                <span className={styles.sale}>{productById.price}</span>
                <span className={styles.withoutSale}>{(productById.price - productById.price / 10).toFixed(0)}</span>{" "}
              </>
            ) : (
              <span className={styles.withoutSale}>{productById.price}</span>
            )}
            {" грн"}
          </p>
          <div className={styles.options}>
            <button
              onClick={() => dispatch(addToCartOperation(productById))}
              className={styles.addToCart}
            >
              Add to cart
            </button>
            <button onClick={() => dispatch(bayNowOperation(history, productById))}
              className={styles.bayNow}>
              Bay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(ProductItemDetails);
