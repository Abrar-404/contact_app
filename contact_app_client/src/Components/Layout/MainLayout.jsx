import { Outlet } from 'react-router-dom';
import Navbar from './../Pages/Navbar/Navbar';
import backImg from '../../../public/Back.jpg';
import Spring from '../Spring/Spring';
import { useState } from 'react';

const MainLayout = () => {
  const [count, setCount] = useState(0);
  const background = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: 'cover',
    background: blur,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <div style={background} className="wrapper">
      <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1400px] mx-auto">
          <Navbar></Navbar>
          <Spring key={count} />
          <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
