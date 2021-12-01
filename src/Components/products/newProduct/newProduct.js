import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFilterSelector } from "../../../redux/filter/filterSelectors";
import { v4 as uuidv4 } from 'uuid';
import { setPhones } from "../../../redux/products/productsActions";
import { getAllAdvByCategoryApi } from "../../../services/api";
import ProductItem from "./productItem/productItem";
import { ProductUl } from "./Styled";

const NewProduct = ({ category = "phones"}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    getProductsFilterSelector(state, category)
  );

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await getAllAdvByCategoryApi(category);
  //     if (response) {
  //       const productsList = Object.keys(response).map((key) => ({
  //         id: key,
  //         ...response[key],
  //       }));
  //       dispatch(setPhones(productsList));
  //     }
  //   };
  //   getProducts();
  // }, [dispatch]);

  return (
    <ProductUl>
      {products?.map((product) => (
        <ProductItem product={product} key={uuidv4()} />
      ))}
    </ProductUl>
  );
};
export default NewProduct;
