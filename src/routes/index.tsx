import { Outlet, useRoutes } from "react-router-dom";
import { LandingPage, Login, ProfessorDetails, ProfessorsPage } from "../components/pages";

const Routing = () => {
    const routes = [
        {
            path: '*',
            element: <h1>Not found bro</h1>
        },
        {
            path: '',
            element: <LandingPage />,
        },
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: 'professors',
            element: <ProfessorsPage />,
        },
        {
            path: 'professor-details/:id',
            element: <ProfessorDetails />
        }
    ]
    const routing = useRoutes(routes);
    return <>
        {routing}
        <Outlet />
    </>
}

export default Routing