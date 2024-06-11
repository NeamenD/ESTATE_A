import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listpage from "./routes/listPage/Listpage";
import { Layout, RequireAuth } from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import Register from "./routes/register/register.jsx";
import Login from "./routes/login/login.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage.jsx";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import { singlePageLoader } from "./lib/loaders.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },

        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },

        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return (
    <>
      {/* <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </div> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
