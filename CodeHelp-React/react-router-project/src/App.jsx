import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import ParamsComp from "./components/ParamsComp";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <div>
        <Navbar></Navbar>
        <About></About>
      </div>
    ),
  },

  // Nested Routing
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>
    ),
    children: [
      { path: "courses", element: <Courses></Courses> },
      { path: "mock-test", element: <MockTest></MockTest> },
      { path: "reports", element: <Reports></Reports> },
    ],
  },

  // Dynamic Routing
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar></Navbar>
        <ParamsComp></ParamsComp>
      </div>
    ),
  },

  // Error Route handling
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
