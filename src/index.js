import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScreenFixedProvider from "./contexts/ScreenFixedProvider";
import AuthProvider from "./contexts/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <ScreenFixedProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ScreenFixedProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
