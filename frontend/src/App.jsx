import "./layout.scss";
import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listpage from "./routes/listPage/Listpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list",
      element: <Listpage />,
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
