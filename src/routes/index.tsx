import Login from "../components/pages/Login";
import { Outlet, useRoutes } from "react-router-dom";
import { LandingPage } from "../components/pages";

const Routing = () => {
    const routes = [
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: '',
            element: <LandingPage />,
        },
    ]
    const routing = useRoutes(routes);
    return <>
        {routing}
        <Outlet />
    </>
}

export default Routing