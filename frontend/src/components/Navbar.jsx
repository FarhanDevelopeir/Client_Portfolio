import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [menuBorder, setMenuBorder] = useState("border");


  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = (value) => {
    setNavActive(false);
    setSelectedItem(value);
  };

  const changeNavbarColor = () => {
    console.log("Scroll Y position:", window.scrollY);  // Test log
    if (window.scrollY >= 30) {
      setNavbarBg("bg-gray-950");
      setMenuBorder('border-none')
    } else {
      setNavbarBg("bg-transparent");
      setMenuBorder('border')
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
    
      className={`${navbarBg} transition-colors duration-300 fixed w-full z-20 top-0 md:px-12 md:py-3 border-gray-200 dark:border-gray-600 dark:text-white`}
    >
      <div className="flex items-center justify-between p-4">
        <div>
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse w-40 text-2xl md:text-3xl font-bold"
          >
            Portfolio
          </a>
        </div>
        <div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleNav}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              navActive ? "translate-x-0" : "-translate-x-full"
            } items-center justify-between w-full top-[70px] md:flex md:w-auto md:order-1 fixed md:static inset-y-0 left-0  md:bg-transparent transition-transform duration-500 ease-in-out md:transition-none md:transform-none`}
            id=""
          >
            <ul className={` ${menuBorder} text-lg bg-gray-950 mt-0 text-center  md:bg-transparent border rounded-lg md:border-none flex flex-col md:flex-row md:space-x-8 p-4 md:p-0  md:mt-0 text-white md:text-black md:dark:text-white`}>
              <li className=" cursor-pointer hover:bg-blue-950 rounded-lg">
                <Link
                  onClick={() => closeMenu("Home")}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="/"
                  className="navbar--content"
                >
                  <span
                    className={`block py-2 px-3 ${
                      selectedItem === "Home"
                        ? "md:bg-transparent md:text-yellow-300 md:dark:text-yellow-300"
                        : ""
                    } rounded`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className=" cursor-pointer  hover:bg-blue-950 rounded-lg">
                <Link
                  onClick={() => closeMenu("Portfolio")}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={'/projects'}
                  className="navbar--content"
                >
                  <span
                    className={`block py-2 px-3 ${
                      selectedItem === "Portfolio"
                        ? "md:bg-transparent md:text-yellow-300 md:dark:text-yellow-300"
                        : ""
                    } rounded`}
                  >
                    Portfolio
                  </span>
                </Link>
              </li>

              <li className=" cursor-pointer  hover:bg-blue-950 rounded-lg">
                <Link
                  onClick={() => closeMenu("About")}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="navbar--content"
                >
                  <span
                    className={`block py-2 px-3 ${
                      selectedItem === "About"
                        ? "md:text-yellow-300 md:dark:text-yellow-300"
                        : ""
                    } rounded`}
                  >
                    About Me
                  </span>
                </Link>
              </li>
              <li className=" cursor-pointer  hover:bg-blue-950 rounded-lg">
                <Link
                  onClick={() => closeMenu("Skills")}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MySkills"
                  className="navbar--content"
                >
                  <span
                    className={`block py-2 px-3 ${
                      selectedItem === "Skills"
                        ? "md:bg-transparent md:text-yellow-300 md:dark:text-yellow-300"
                        : ""
                    } rounded`}
                  >
                    My Skills
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
