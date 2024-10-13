import React, { useEffect } from 'react';
import Add_New from '../Add_New';
import { useDispatch, useSelector } from 'react-redux';
import { projects } from '../features/Project_Features/Project_Slice';
import axios from 'axios';

const AllProjects = () => {
  const allProjects = useSelector((state) => state.project_Slice?.Projects|| []);  // Ensure state is accessed correctly
  console.log(allProjects);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');  // Update API endpoint
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
      <div className="text-xs md:text-[16px] pt-10 pb-5 px-1 md:px-8 mx-2 md:mx-12 overflow-x-auto">
        
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
          {allProjects.map((product, index) => (
            <tr key={index} className="border-b text-gray-700 ">
              <td className="py-1 px-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className=" object-cover rounded-full h-7 w-7 md:h-10 md:w-10"
                />
              </td>
              <td className="py-3 px-2">{product.title}</td>
              {/* <td className="   py-3 px-2"  dangerouslySetInnerHTML={{ __html: product.description }}></td> */}
              <td className="  py-3 px-2">{new Date(product.createdAt).toLocaleDateString()}</td>
              
              <td className="py-3 px-2">
                <button className="text-blue-500 hover:underline mr-2">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
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
