import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../components/ProjectDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/projectDetails/:id",
                element:<ProjectDetails></ProjectDetails>
            }
        ]
    }
])