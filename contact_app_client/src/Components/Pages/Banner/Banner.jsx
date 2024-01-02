import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const Banner = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col md:flex-column lg:flex-row mx-auto items-center justify-between">
        <div data-aos="fade-right">
          <h1 className="font-extrabold lg:text-4xl md:text-3xl text-center text-2xl font-cursive">
            <span className="lg:text-8xl md:text-6xl text-4xl">E</span>
            ffortlessly organize and streamline <br />
            your contacts with our <br />
            intuitive contact management platform
          </h1>
        </div>
        <div data-aos="fade-left">
          <img
            className="lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
            src="https://finwave.co/images/gif/Contact-1.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

AOS.init();
export default Banner;
