import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Components/Pages/Login/Login';
import AllContacts from './Components/Pages/AllContacts/AllContacts';
import AddContacts from './Components/Pages/AddContacts/AddContacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
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
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/allContacts',
        element: <AllContacts></AllContacts>,
      },
      {
        path: '/addContacts',
        element: <AddContacts></AddContacts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
