const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row mx-auto">
        <div>
          <h1 className="font-bold">
            Effortlessly organize and streamline your contacts with our
            intuitive contact management platform
          </h1>
        </div>
        <div>
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

export default Banner;
