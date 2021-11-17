import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./Components/App/App";

// normalize and basic styles for application
import "./index.css";
import './sourses/styles/styles.scss'
import "video-react/dist/video-react.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";

ReactDOM.render(
 <Provider store={store}>
  <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
   <BrowserRouter>
    <ReactNotification />
    <App />
   </BrowserRouter>
  </PersistGate>
 </Provider>,
 document.getElementById("root")
);
