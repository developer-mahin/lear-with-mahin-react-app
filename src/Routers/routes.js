import { createBrowserRouter } from 'react-router-dom'
import Blog from '../components/Blog/Blog';
import Course from '../components/Course/Course';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Main from '../layout/Main';
import PrivateRoutes from './PrivateRoutes';
import GetPremium from '../components/GetPremium/GetPremium';
import Faq from '../components/FAQ/Faq';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => {
                    return fetch("https://learn-with-mahin-server.vercel.app/courses")
                },
                element: <Course></Course>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => {
                    return fetch(`https://learn-with-mahin-server.vercel.app/courses/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/getPremium/:id',
                loader: ({ params }) => {
                    return fetch(`https://learn-with-mahin-server.vercel.app/getPremium/${params.id}`)
                },
                element: <PrivateRoutes><GetPremium></GetPremium></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }

        ]
    }
])


export default router;