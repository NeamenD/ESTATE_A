import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listpage from "./routes/listPage/Listpage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage.jsx";

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
