import { getAllAdvByCategoryApi, getProductByIDApi } from "../../services/api";
import {
  setLaptops,
  setPhones,
  setProductWithId,
  setError,
  setLoader,
} from "./productsActions";

export const getAllAdvByCategoryApiOperation =
  (category) => async (dispatch) => {
    try {
      dispatch(setLoader());
      const response = await getAllAdvByCategoryApi(category);
      if (response) {
        const products = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));

        if (category === "phones") {
          dispatch(setPhones(products));
        }
        if (category === "laptops") {
          dispatch(setLaptops(products));
        }
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };

export const getProductByIdOperation = (category, id) => async (dispatch) => {
  try {
    const response = await getProductByIDApi(category, id);
    dispatch(setProductWithId(response));
  } catch (error) {
    dispatch(setError(error));
  }
};
