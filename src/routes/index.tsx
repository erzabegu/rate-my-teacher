import { Outlet, useRoutes } from "react-router-dom";
import { LandingPage, Login, ProfessorDetails, ProfessorsPage, RatingPage, RegisterPage, UserProfile } from "../components/pages";
import { AccountDetails, SavedProfessors, UserRatings } from "../components/templates";

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
            path: 'register',
            element: <RegisterPage />
        },
        {
            path: 'professors',
            element: <ProfessorsPage />,
        },
        {
            path: 'professor-details/:id',
            element: <ProfessorDetails />
        },
        {
            path: 'rating',
            element: <RatingPage />
        },
        {
            path: 'user-profile',
            element: <UserProfile />,
            children: [
                { path: '', element: <AccountDetails /> },
                { path: 'userRating', element: <UserRatings /> },
                { path: 'savedProfessors', element: <SavedProfessors /> }
            ]
        }
    ]
    const routing = useRoutes(routes);
    return <>
        {routing}
        <Outlet />
    </>
}

export default Routing