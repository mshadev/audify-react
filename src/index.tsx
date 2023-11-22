import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/main.sass";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import { ResultView } from "views/result/Result";
import Hello from "views/hello/Hello";

import ReactGA from "react-ga";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Hello />,
      },
      {
        path: "result",
        element: <ResultView />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

ReactGA.initialize("G-J5LFPBZ2D0");
ReactGA.pageview(window.location.pathname + window.location.search);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
