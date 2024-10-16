import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AddProjectAsync } from "./features/Project_Features/Project_Slice";
import { ContextBox } from "./features/AdminSidebar_Slice";
import { AddCertificateAsync } from "./features/Certificates_Features/Certificate_Slice";
import { AddBlogAsync } from "./features/Blog_Features/Blog_Slice";

const AddContent = () => {
  const activeItem = useSelector((state) => state.sideBar.activeSiderbarItem);
  const openContentBox = useSelector((state) => state.sideBar.openContentBox);
  console.log(openContentBox);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
  });
  const trimItem = activeItem.slice(0, -1);

  const [editorContent, setEditorContent] = useState("");

  const modules = {
    toolbar: [
      [{ size: [] }], // Font and size options
      ["bold", "italic"], // Bold and italic
      [{ color: [] }], // Text color and background color
      [{ align: [] }], // Align options
      ["link"], // Insert link
      ["clean"], // Remove formatting
    ],
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const SubmitFormData = new FormData();
    SubmitFormData.append("title", formData.title);
    SubmitFormData.append("image", formData.image);
    SubmitFormData.append("description", editorContent);
    // Conditional dispatches based on activeItem
    if (activeItem === "Projects") {
      dispatch(AddProjectAsync(SubmitFormData));
    }
    if (activeItem === "Certificates") {
      dispatch(AddCertificateAsync(SubmitFormData));
    }
    if (activeItem === "Blogs") {
      dispatch(AddBlogAsync(SubmitFormData));
    }

    console.log(SubmitFormData);

    // Logging FormData fields
    for (let [key, value] of SubmitFormData.entries()) {
      if (key === "image") {
        // If the field is the image, log its properties
        console.log(
          `image: ${value.name}, type: ${value.type}, size: ${value.size} bytes`
        );
      } else {
        console.log(`${key}: ${value}`);
      }
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    // setthumbnailImage(file);
    setFormData({ ...formData, image: file });
  };

  return (
    <div className=" fixed top-0 left-0 h-full md:h-screen w-full z-50  bg-black/80 backdrop-blur-sm flex justify-center items-center">
      <div className=" relative border rounded-lg p-4 bg-gray-900 w-[98%] md:w-[50%]">
        <div className=" text-white flex justify-end absolute top-2 right-2">
          <svg
            onClick={() => {
              dispatch(ContextBox(false));
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6  cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="">
          <form className="space-y-6 " onSubmit={submitForm}>
            <div className=" md:flex items-center justify-between">
              <div className="flex flex-col items-center md:mr-5">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="bg-gray-700 text-gray-200 rounded-full h-32 w-32 flex items-center justify-center text-center">
                    Upload Image
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleImage}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="title"
                  className="text-sm font-semibold mb-2 text-white"
                >
                  {trimItem} Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="peer h-full w-full text-white rounded-md border  border-gray-800   bg-gray-700 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-[#919090] placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border focus:border-gray-300 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder={`${trimItem} Title`}
                />
              </div>
            </div>

            {/* Text Editor */}
            <div className=" w-full  ">
              <label
                htmlFor="editor"
                className=" text-sm md:text-lg font-semibold  text-white"
              >
                {trimItem} Description
              </label>
              <ReactQuill
                value={editorContent}
                onChange={handleEditorChange}
                modules={modules}
                theme="snow"
                className="bg-gray-200 border-4 border-gray-200   rounded-lg"
                placeholder="Write your content here..."
              />
            </div>

            <button className="text-white float-right   focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
              Add {trimItem}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContent;
