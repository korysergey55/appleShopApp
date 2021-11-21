import { addToCartAction, removeFromCartAction, remuveAllFromCartAction, setError } from "./cartActions";
import { toast } from 'react-toastify'

export const addToCartOperation = (data) => async (dispatch) => {
  try {
    const response = await dispatch(addToCartAction(data));
    if (response) {
      toast.success('Product was successfully added to cart!', {
        theme: 'colored',
      })
    }
  } catch (error) {
    dispatch(setError(error));
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
};

export const remuveFromCartOperation = (id) => async (dispatch) => {
  try {
    await dispatch(removeFromCartAction(id));
    toast.success('Product was successfully remuved!', {
      theme: 'colored',
    })
  } catch (error) {
    dispatch(setError(error));
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
};

export const createOrderOperation = () => async (dispatch) => {
  try {
  }
  catch (error) {
    dispatch(setError(error));
  }
};

export const remuveAllFromCartOperation = () => async (dispatch) => {
  try {
    await dispatch(remuveAllFromCartAction());
    toast.success('Products were successfully remuved!', {
      theme: 'colored',
    })
  } catch (error) {
    dispatch(setError(error));
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
};
