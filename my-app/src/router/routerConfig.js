import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Tshirts from "../pages/Tshirts/Tshirts";
import Default from "../layout/default";
import NotFound from "../pages/NotFound/NotFound";
import Bags from "../pages/Bags/Bags.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Cups from "../pages/Cups/Cups";
import Puzzles from "../pages/Puzzles/Puzzles";
import Inshe from "../pages/Inshe/Inshe.jsx";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/futbolky",
        element: <Tshirts />,
      },
      {
        path: "/chashky",
        element: <Cups />,
      },
      { path: "/shopery", element: <Bags /> },
      {
        path: "/puzzly",
        element: <Puzzles />,
      },
      {
        path: "/inshe",
        element: <Inshe />,
      },
      { path: "/kontakty", element: <Contact /> },
    ],
  },
]);

export default appRouter;
