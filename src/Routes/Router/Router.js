import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
