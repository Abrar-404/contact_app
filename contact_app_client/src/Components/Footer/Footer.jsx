import img from '../../../public/Logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  text-base-content shadow-xl">
        <aside>
          <img src={img} className="w-[350px] h-[120px]" alt="" />
          <p className="text-white">
            Contactify
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white">Services</header>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Company</header>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Legal</header>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
