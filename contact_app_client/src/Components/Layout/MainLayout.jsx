import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Banner/Banner';
import Navbar from './../Pages/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1400px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
