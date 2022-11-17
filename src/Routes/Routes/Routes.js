import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: 'appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
    }
])