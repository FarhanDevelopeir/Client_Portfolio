import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SiderbarItem } from "./features/AdminSidebar_Slice";
import { Link } from "react-router-dom";


const Admin_SideBar = () => {
  const activeItem = useSelector((state)=>state.sideBar.activeSiderbarItem)
  const dispatch = useDispatch()
  
  return (
    <div className="  md:bg-gradient-to-b from-gray-950  to-gray-600 md:text-gray-300 pt-5 text-sm md:text-lg  flex justify-around md:justify-normal md:flex-col md:w-[15%] ">
  <Link to={'/adminpanel'} >
      <button className={` ${activeItem === 'Blogs' ? 'bg-gray-950 md:bg-gray-500 text-white border':''} w-[93%] p-2 md:p-4 border md:border-none md:mx-2  rounded-3xl md:rounded-xl  flex  `}
      onClick={()=>dispatch(SiderbarItem("Blogs"))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mr-2 md:mr-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
          />
        </svg>

        <h1 className="flex-1">Blogs</h1>
      </button>
</Link>
<Link to={'/adminpanel/certificates'}>
      <button className={` ${activeItem === 'Certificates' ? 'bg-gray-950 md:bg-gray-500 text-white border':''} w-[93%] p-2 md:p-4 border  md:border-none md:mx-2 rounded-3xl md:rounded-xl  flex  `}
       onClick={()=>dispatch(SiderbarItem("Certificates"))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mr-1 md:mr-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>

        <h1 className="flex-1">Certificates</h1>
      </button>
      </Link>
      <Link to={'/adminpanel/projects'}>
      <button className={` ${activeItem === 'Projects' ? 'bg-gray-950 md:bg-gray-500 text-white border':''} w-[93%] p-2 md:p-4 border md:border-none md:mx-2 rounded-3xl md:rounded-xl  flex  `}
       onClick={()=>dispatch(SiderbarItem("Projects"))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mr-1 md:mr-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>

        <h1 className="flex-1">Projects</h1>
      </button>
      </Link>
    </div>
  );
};

export default Admin_SideBar;
