import AOS from 'aos';
import 'aos/dist/aos.css';
import Framer from './Framer';
import banner from '../../../assets/banner.gif';
import '../../Styles/font1.css';
import '../../Styles/font2.css';
import '../../Styles/ban.css';
// ..
const Banner = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col md:flex-column lg:flex-row mx-auto items-center justify-between">
        <div data-aos="fade-right">
          <h1 className="font-extrabold lg:text-6xl md:text-3xl text-white text-left text-2xl font-cursive">
            <span className="tracking-in-expand">
              <span className="lg:text-8xl md:text-6xl text-4xl ">E</span>
              ffortlessly
            </span>{' '}
            <span className="tracking-in-contract">organize </span>
            <br />
            <span className="tracking-in-contract-bck-bottom">
              {' '}
              your contacts
            </span>
          </h1>
        </div>
        <div data-aos="fade-left" className="slide-in-elliptic-top-fwd">
          <img
            className="lg:w-[700px] lg:h-[600px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
            src={banner}
            alt=""
          />
        </div>
      </div>

      <div className="mt-32">
        <Framer></Framer>
      </div>
    </div>
  );
};

AOS.init();
export default Banner;
