import { orderAction } from "./orderActions";
import { toast } from 'react-toastify'

export const createOrderOperation = (formData) => async (dispatch) => {
  try {
    dispatch(orderAction(formData))
    toast.success('Order was successful created !', {
      theme: 'colored',
    })
  }
  catch (error) {
    dispatch(setError(error));
  }
};