import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Login from "../components/pages/Login";

const Routing = () => {
    const routes = [
        {
            path: '/',
            element: <Login />,
        },
    ]
    const routing = useRoutes(routes);
    return <>
        {routing}
        <Outlet />
    </>
}

export default Routing