import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {persistStore} from "redux-persist";
import {
 FLUSH,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
 REHYDRATE,
} from "redux-persist/es/constants";

const middleware = [
 ...getDefaultMiddleware({
  serializableCheck: {
   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
 }),
];

const store = configureStore({ reducer: rootReducer, middleware });
const persistor = persistStore(store);

export  { store, persistor };

// ========================= redux =========================
// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
