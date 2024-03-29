import React, { useState } from "react";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { getProductWithIdSelector } from "../../redux/products/productsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { addToCartOperation } from "../../redux/cart/cartOperations";
import Slider from 'react-slick'
import { sliderSettings } from '../../utils/sliderSettings'
import PhotoList from '../productDeteils/photoList/PhotoList'
import StarList from "../../containers/starList/StarList";
import styles from './styles.module.scss'

const ProductItemDetails = () => {
  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const productById = useSelector(getProductWithIdSelector)
  const category = match.params.category
  const [photo, setPhoto] = useState(null)

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from);
    } else history.push(`/products/${category}`)
  }

  const changePhoto = (data) => {
    setPhoto(data)
  }

  return (
    <div className={styles.container}>
      <button className={styles.goBack} type='button' onClick={goBack}>
        Go back
      </button>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          {productById.images &&
            <div className={styles.sliderContainer}>
              <Slider {...sliderSettings} className={styles.sliderList}>
                {productById.images?.map(item => (
                  <PhotoList item={item} changePhoto={changePhoto} key={item} />
                ))}
              </Slider>
            </div>
          }
          <img
            src={photo ? photo : productById.image}
            alt='productImg'
            className={styles.img}
          />
        </div>

        <div className={styles.wripper}>
          <h3 className={styles.title}>{productById.name}</h3>
          <p className={styles.code}>Product code: {productById.code}</p>
          <div className={styles.raitWripper}>
            <p className={styles.rating}>Rating:</p>
            <StarList />
          </div>
          <div className={styles.colorsWripper}>
            <p className={styles.colors}>Colors:</p>
            <ul className={styles.colorList}>
              <li className={styles.colorItem}></li>
              <li className={styles.colorItem}></li>
              <li className={styles.colorItem}></li>
              <li className={styles.colorItem}></li>
            </ul>
          </div>
          <p className={styles.description}>{productById.description}</p>
          <p className={styles.price}>{productById.price} грн
            <span className={styles.sale}>Old price</span>
          </p>
          <button
            onClick={() => dispatch(addToCartOperation(productById))}
            className={styles.addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductItemDetails);
