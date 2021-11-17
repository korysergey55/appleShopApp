import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import cartReducer from "./cart/cartReducer";
import FilterReducer from "./filter/filterReducer";
import productsReducer from "./products/productsReducer";
// ----------persist-----------------//
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCartConfig = {
    key: "cart",
    storage,
    whitelist: ["items"],
};
const persistAuthConfig = {
    key: "token",
    storage,
    whitelist: ["token"],
};

const rootReducer = combineReducers({
    //  auth: authReducer,
    auth: persistReducer(persistAuthConfig, authReducer),
    cart: persistReducer(persistCartConfig, cartReducer),
    products: productsReducer,
    filter: FilterReducer,
});

export default rootReducer;
