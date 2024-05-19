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
import { store } from "./state/store.js";
import Blog from "./components/Blog.jsx";
import MainContainer from "./components/MainContainer.jsx";
import PostView from "./components/PostView.jsx";
import BlogHome from "./components/BlogHome.jsx";

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
        element: <MainContainer />,
      },
      {
        path: "/blog-home",
        element: <BlogHome />,
        children: [
          {
            index: true,
            element: <Navigate to={`/blog-home/blog/all`} replace />,
          },
          {
            path: "/blog-home/blog/:category",
            element: <Blog />,
          },
          {
            path: "/blog-home/post/:postId",
            element: <PostView />,
          },
        ],
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
