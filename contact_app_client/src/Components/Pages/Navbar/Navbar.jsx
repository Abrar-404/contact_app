import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../../public/Logo.png';
import '../../Styles/signout.css';
import { AuthContext } from './../../../AuthProvider/AuthProvider';
import '../../Styles/loginbtn.css';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const naviGate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(result => {
        naviGate('/');
        console.log(result?.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navs = (
    <>
      <li className="text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? null : (
        <>
          {/* <li className="text-white">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/register">Register</NavLink>
          </li> */}
          <li className="text-white">
            <NavLink to="/allContacts">All Contacts</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/addContacts">Add Contacts</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/favorites">Favorite Contacts</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="text-white">
            <NavLink to="/createtask">All Contacts</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/tasks">Add Contacts</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/favorites">Favorite Contacts</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar sticky top-0 z-50 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="text-white btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content t mt-3 z-[1] p-2 shadow bg-gray-900 bg-opacity-60 rounded-box w-52"
            >
              {navs}
            </ul>
          </div>
          <Link to="/">
            <img className="max-w-[150px] max-h-[80px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navs}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 border-4 border-green-500 rounded-full">
                  <img
                    className=""
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="mb-2 text-base btn btn-sm btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="flex justify-center mx-auto Btn"
                    onClick={handleSignOut}
                  >
                    <div className="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>

                    <div className="text">Sign Out</div>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="bittu" type="button">
                <strong>Login</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
