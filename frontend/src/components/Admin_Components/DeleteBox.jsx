import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBox } from "./features/AdminSidebar_Slice";
import { DeleteBlogAsync } from "./features/Blog_Features/Blog_Slice";
import { DeleteCertificateAsync } from "./features/Certificates_Features/Certificate_Slice";
import { DeleteProjectAsync } from "./features/Project_Features/Project_Slice";

const Deletebox = () => {
  const activeItem = useSelector((state) => state.sideBar.activeSiderbarItem);
  const id = useSelector((state) => state.sideBar.deleteBox);
  console.log(id);
  const trimItem = activeItem.slice(0, -1);
  const allBlogs = useSelector((state) => state.blog_Slice?.Blogs || []);
  const getSpecificBlog = allBlogs.find((item) => item._id === id);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    if (activeItem === "Projects") {
      dispatch(DeleteProjectAsync(id));
    }
    if (activeItem === "Certificates") {
      dispatch(DeleteCertificateAsync(id));
    }
    if (activeItem === "Blogs") {
      dispatch(DeleteBlogAsync(id));
      // console.log("id comes",id);
    }
    // dispatch(DeleteBlogAsync())
  };

  return (
    <div className=" fixed top-0 left-0 h-full md:h-screen w-full z-50  bg-black/80 backdrop-blur-sm flex justify-center items-center">
      <div className=" relative border flex flex-col justify-between items-center rounded-lg p-4 bg-gray-900 w-[90%] md:w-[35%]">
        <h1 className="text-white font-semibold text-lg mb-5 ">
          Did you want to delete this {trimItem}
        </h1>
        <div className=" flex  justify-around w-[80%] m-auto">
          {/* <Link 
        to={
          activeItem === "Certificates"
            ? "/adminpanel/certificates?item=Certificates"
            : activeItem === "Projects"
            ? "/adminpanel/projects?item=Projects"
            : activeItem === "Blogs"
            ? "/adminpanel?item=Blogs"
            : "/adminpanel"
        }
        > */}
          <button
            onClick={() => dispatch(DeleteBox(false))}
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            No
          </button>
          {/* </Link> */}
          <button
            onClick={() => deleteItem(id)}
            type="button"
            class="text-white flex items-center justify-between bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 md:h-6 mr-1 md:mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deletebox;
