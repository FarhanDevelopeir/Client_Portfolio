import React, { useEffect } from 'react';
import Add_New from '../Add_New';
import { useDispatch, useSelector } from 'react-redux';
import { projects } from '../features/Project_Features/Project_Slice';
import axios from 'axios';
import { BASE_URL } from '../../../constant';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const allProjects = useSelector((state) => state.project_Slice?.Projects|| []);  // Ensure state is accessed correctly
  const activeItem = useSelector((state)=>state.sideBar.activeSiderbarItem)
  console.log(allProjects);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/projects`);  // Update API endpoint
        console.log(response.data);  // Check if data is being fetched correctly
        dispatch(projects(response.data));  // Dispatch the fetched data to the Redux store
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [dispatch]);  // Add dispatch to dependency array

  return (
    <div>
      <Add_New />
      {/* <h1 className="text-3xl text-center mt-4">All Projects</h1> */}
      <div className="text-xs pt-40 md:pt-32 md:text-[16px]  pb-5 px-1 md:px-8 mx-2 md:mx-12 overflow-x-auto">
        
        <table className="min-w-full bg-white  rounded">
        <thead>
          <tr className="border-y  text-left">
          <th className="py-3 px-2">Image</th>
            <th className="py-3 px-2">Product Title</th>
            {/* <th className=" py-3 px-2">Description</th> */}
            <th className=" py-3 px-2">Created At</th>
            <th className="py-3 px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((project, index) => (
            <tr key={index} className="border-b text-gray-700 ">
              <td className="py-1 px-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" object-cover rounded-full h-7 w-7 md:h-10 md:w-10"
                />
              </td>
              <td className="py-3 px-2">{project.title}</td>
              {/* <td className="   py-3 px-2"  dangerouslySetInnerHTML={{ __html: product.description }}></td> */}
              <td className="  py-3 px-2">{new Date(project.published_date).toLocaleDateString()}</td>
              
              <td className="py-3 px-2">
              <Link to={`/adminpanel/${activeItem}/edit/${project._id}`}>
                    <button className="text-blue-500 mr-2 hover:underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className=" h-4 md:h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                  </Link>
                <button className="text-red-500 hover:underline">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 md:h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AllProjects;
