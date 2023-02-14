import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Appointment from '../../Pages/Appointment/Appointment';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Login/Register';
import RequireAuth from '../../Pages/Login/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/appointment',
        element: (
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        ),
      },
    ],
  },
]);
export default router;
