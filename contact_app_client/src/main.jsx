import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Favorites from './Components/Pages/Favorites/Favorites';
import AllContacts from './Components/Pages/AllContacts/AllContacts';
import AddContact from './Components/Pages/AddContacts/AddContact';

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
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>,
      },
      {
        path: '/allContacts',
        element: <AllContacts></AllContacts>,
      },
      {
        path: '/addContacts',
        element: <AddContact></AddContact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
