import { addToCart, remuveAllFromCart, setError, taggleModal } from "./cartActions";

export const addToCartOperation = (data) => async (dispatch) => {
  try {
    const response = await dispatch(addToCart(data));
    if (response) {
    }
  } catch (error) {

    dispatch(setError(error));
  }
};

export const bayNowOperation = (history, productById) => async (dispatch) => {
  try {
    dispatch(addToCart(productById))
    dispatch(taggleModal())
    history.push('/cart')
  }
  catch (error) {
    dispatch(setError(error));
  }
};

export const createOrderOperation = (history) => async (dispatch) => {
  try {
    dispatch(taggleModal())
    history.push('/cart')
  }
  catch (error) {
    dispatch(setError(error));
  }
};


export const remuveAllFromCartOperation = (data) => async (dispatch) => {
  try {
    await dispatch(remuveAllFromCart());
    Notification("deleteAllFromCart");
  } catch (error) {
    Notification("danger");
    dispatch(setError(error));
  }
};
