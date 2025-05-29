import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home-page/HomePage";
import RandevuPage from "../pages/randevu-page/RandevuPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/randevu',
        element:<RandevuPage/>
    },
    
])

export default router