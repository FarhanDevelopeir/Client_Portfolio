import { useState, useEffect } from "react";
import { Link } from "react-scroll";


function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const toggleNav = () => {
    setNavActive(!navActive);
    console.log(!navActive);
  };

  const closeMenu = (value) => {
    setNavActive(false);
    console.log(value);
    // setSelectedItem(value)
  };

  return (
    <nav className="  bg-transparent  dark:bg-transparent fixed w-full z-20  top-0 start-0  border-gray-200 dark:border-gray-600 dark:text-white">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
        <a
        href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse h-12 w-40 text-3xl font-bold "
        >
          Portfolio
        </a>
        </div>
        <div>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class={`${
            navActive === true ? "block" : "hidden"
          } items-center justify-between   w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
            <li>
              <Link
                onClick={() => closeMenu("Home")}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "Home"
                      ? " md:bg-transparent md:text-yellow-300  md:dark:text-yellow-300"
                      : ""
                  }  rounded `}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeMenu("Portfolio")}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "Portfolio"
                      ? " md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : ""
                  }  rounded `}
                >
                  Portfolio
                </a>
              </Link>
            </li>

            <li>
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
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "About"
                      ? " md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : ""
                  }  rounded `}
                >
                  About Me
                </a>
              </Link>
            </li>
            <li>
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
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "Skills"
                      ? "bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : ""
                  }  rounded `}
                >
                  My Skills
                </a>
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
