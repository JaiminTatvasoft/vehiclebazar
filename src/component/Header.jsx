import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoadUsers } from "../utils/customHooks/useLoadUsers";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const Header = ({ isScrolled }) => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = useLoadUsers();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-3xl px-4 lg:px-28 xl:px-36 2xl:px-48 mx-auto flex justify-between items-center py-1 ">
        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="p-2 rounded-md md:hidden">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2 md:static md:ml-16"
        >
          <img
            src={require("../assets/vb-logo-preview.png")}
            alt="Logo"
            className="h-24 w-32"
          />
        </Link>

        {/* Navbar Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center flex-grow justify-center me-8">
          <Link
            to="/"
            className="text-black hover:text-darkGreen hover:underline font-semibold text-xl xl:text-xl"
          >
            Home
          </Link>
          <Link
            to="/rentcar"
            className="text-black hover:text-darkGreen hover:underline font-semibold text-xl xl:text-xl"
          >
            Explore Cars
          </Link>
          <Link
            to="/service"
            className="text-black hover:text-darkGreen hover:underline font-semibold text-xl xl:text-xl"
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="text-black hover:text-darkGreen hover:underline font-semibold text-xl xl:text-xl"
          >
            Contact
          </Link>
          {data && (
            <Link
              to="/orders"
              className="text-black hover:text-darkGreen hover:underline font-semibold text-xl xl:text-xl"
            >
              Orders
            </Link>
          )}
        </nav>

        {/* Login Button (Far Right) */}
        <div className="flex items-center space-x-4 ml-auto">
          {data ? (
            <>
              <button
                className="bg-darkGreen text-white hover:bg-mediumGreen px-4 py-2 rounded flex items-center space-x-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="bg-darkGreen text-white hover:bg-mediumGreen px-4 py-2 rounded flex items-center space-x-2">
                <Link to="/login" className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM12 14c-4.418 0-8 2.682-8 6s3.582 6 8 6 8-2.682 8-6-3.582-6-8-6z"></path>
                  </svg>

                  <span>Login</span>
                </Link>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 max-w-64 z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        {/* Menu Items */}
        <ul className="space-y-4 p-6">
          <Link to="/" className="block text-darkestGreen" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/rentcar"
            className="block text-darkestGreen"
            onClick={toggleMenu}
          >
            Explore Cars
          </Link>
          <Link
            to="/service"
            className="block text-darkestGreen"
            onClick={toggleMenu}
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="block text-darkestGreen"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          {/* <li>
            <Link
              to="/faq"
              className="block text-darkestGreen"
              onClick={toggleMenu}
            >
              FAQs
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
