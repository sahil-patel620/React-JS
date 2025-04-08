import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./route/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList, { postLoader } from "./components/PostList";
import CreatePost, { createPostAction } from "./components/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />, action: createPostAction
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </StrictMode>
);
