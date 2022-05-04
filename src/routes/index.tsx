import React from "react";
import Login from "../components/pages/Login";
import { Outlet, useRoutes } from "react-router-dom";

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