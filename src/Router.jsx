import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Sofrajiya from "./pages/Sofrajiya"
import Dj from "./pages/Dj"
import Studio from "./pages/Studio"
import Decoration from "./pages/Decoration"
import WeddingSupplies from "./pages/Wedding_supplies"
import MainLayout from "./layouts/MainLayout"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            
            index:true,
            element: <Home />,
        },{
            path: "sofrajiya",
            element: <Sofrajiya />,
        },{
            path: "dj",
            element: <Dj />,
        },{
            path: "studio",
            element: <Studio />,
        },{
            path: "decoration",
            element: <Decoration />,
        },{
            path:"wedding-supplies",
            element:<WeddingSupplies />
        }

    ]
  },
]);
export default router;