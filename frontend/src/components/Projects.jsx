import React from "react";
import bg_img from "../assets/images/bgimg.png";
import project1 from "../assets/images/bg.jpg";
import project2 from "../assets/images/bgpic.png";
import project3 from "../assets/images/bg_img.jpg";

const Projects = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
      className="heroSection pt-32 md:pt-0     md:px-10 lg:px-36  text-white bg-gray-900 h-full md:h-lvh"
    >
      <div className="w-[80%] m-auto md:w-full md:pt-36">
        <div className=" mb-10 rounded-lg px-4 py-2 w-full">
          <h1 className=" text-3xl  md:text-5xl mb-2 drop-shadow-2xl font-semibold ">Projects</h1>
          <h4 className="text-gray-400 font-semibold ">Current Projects</h4>
        </div>
        <div className="  grid gap-5 md:grid-cols-3">
          
            <div class="max-w-sm  border rounded-lg shadow-lg border-white shadow-blue-900 bg-gray-800  transition-all duration-300">
              <a href="#">
                <img class="rounded-t-lg" src={project1} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold   text-white">
                    Here Write Your Project Title
                  </h5>
                </a>
                
                <a
                  href="#"
                  class="flex items-center w-28 text-yellow-400 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                >
                  details
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="max-w-sm  border rounded-lg shadow-lg border-white shadow-blue-900 bg-gray-800  transition-all duration-300">
              <a href="#">
                <img class="rounded-t-lg" src={project1} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold   text-white">
                    Here Write Your Project Title
                  </h5>
                </a>
                
                <a
                  href="#"
                  class="flex items-center w-28 text-yellow-400 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                >
                  details
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="max-w-sm  border rounded-lg shadow-lg border-white shadow-blue-900 bg-gray-800  transition-all duration-300">
              <a href="#">
                <img class="rounded-t-lg" src={project1} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold   text-white">
                    Here Write Your Project Title
                  </h5>
                </a>
                
                <a
                  href="#"
                  class="flex items-center w-28 text-yellow-400 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                >
                  details
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Projects;
