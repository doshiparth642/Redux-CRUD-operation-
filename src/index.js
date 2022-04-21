import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import configureStore from "./config/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
console.log("app running on ", process.env.REACT_APP_APP_ENV);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </BrowserRouter>
    
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
