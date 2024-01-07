import { Outlet } from 'react-router-dom';
import Navbar from './../Pages/Navbar/Navbar';
import backImg from '../../../public/Back.jpg';

const MainLayout = () => {
  const background = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={background} className="">
      <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1400px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
