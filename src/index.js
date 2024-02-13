import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import NotFound from "../src/app/NotFound";
import Resume from "../src/app/Resume";
import Content from "../src/app/Content";
import { createBrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "Projects",
        element: <Content />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
