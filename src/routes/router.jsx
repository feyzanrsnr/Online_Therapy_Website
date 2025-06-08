import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home-page/HomePage";
import RandevuPage from "../pages/randevu-page/RandevuPage";
import ExpertPage from '../pages/expert-page/ExpertPage'


const router = createBrowserRouter([
    
    {
        path:'/',
        index:true,
        element:<HomePage/>
    },
    {
        path:'randevu',
        element:<RandevuPage/>
    },
    {
        path:'uzmanlarımız',
        element:<ExpertPage/>
    }
    
])

export default router