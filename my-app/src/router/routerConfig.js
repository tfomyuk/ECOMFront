import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Tshirts from "../pages/Tshirts/Tshirts";
import Default from "../layout/default";
import NotFound from "../pages/NotFound/NotFound";

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
              path: "/futbolka",
              element: <Tshirts />,
            },
            {
              path: "/products",
              element: <Tshirts />,
            },
            
          ],
        },
      ]);
      
export default appRouter;
