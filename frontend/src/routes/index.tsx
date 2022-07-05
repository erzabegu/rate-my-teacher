import { Outlet, useRoutes } from "react-router-dom";
import { AdminPanel, LandingPage, Login, ProfessorDetails, ProfessorsPage, RatingPage, RegisterPage, UserProfile } from "../components/pages";
import { AccountDetails, Professors, SavedProfessors, UserRatings } from "../components/templates";
import { SchoolsTemplate } from "../components/templates/Schools";
import { Users } from "../components/templates/Users";

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
        },
        {
            path: 'admin',
            element: <AdminPanel />,
            children: [
                { path: '', element: <h1>Dashboard</h1> },
                { path: 'schools', element: <SchoolsTemplate /> },
                { path: 'professors', element: <Professors /> },
                { path: 'users', element: <Users /> }
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