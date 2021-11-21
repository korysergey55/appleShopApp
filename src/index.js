import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./Components/App/App";

// normalize and basic styles for application
import 'normalize.css'
import "./index.css";
import './sourses/styles/styles.scss'
import 'antd/dist/antd.css'
import "video-react/dist/video-react.css";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
