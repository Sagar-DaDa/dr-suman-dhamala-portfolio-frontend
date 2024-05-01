import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./state/store.js"
import Blog from "./components/Blog.jsx";
import MainContainer from "./components/MainContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>I caught the error. :D</p>,
    children: [
      {
        index: true,
        element: <Navigate to="main" replace />,
      },
      {
        path: "/main",
        element: <MainContainer/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
