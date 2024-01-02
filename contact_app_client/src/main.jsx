import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import { NextUIProvider } from '@nextui-org/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </NextUIProvider>
);
