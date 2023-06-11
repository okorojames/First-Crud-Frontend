import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BtnMotionVarientsProvider from "./BtnMotionVarients.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BtnMotionVarientsProvider>
      <App />
    </BtnMotionVarientsProvider>
  </BrowserRouter>
);
