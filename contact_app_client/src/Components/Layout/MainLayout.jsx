import { Outlet } from 'react-router-dom';
import Navbar from './../Pages/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1400px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
