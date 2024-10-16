import { configureStore } from "@reduxjs/toolkit";
import AdminSidebar_Slice from '../components/Admin_Components/features/AdminSidebar_Slice'
import Project_Slice from "../components/Admin_Components/features/Project_Features/Project_Slice";
import Certificate_Slice from "../components/Admin_Components/features/Certificates_Features/Certificate_Slice";
import Blog_Slice from "../components/Admin_Components/features/Blog_Features/Blog_Slice";

export const store = configureStore({
  reducer: {
    sideBar: AdminSidebar_Slice,
    project_Slice: Project_Slice,
    certificate_Slice: Certificate_Slice,
    blog_Slice: Blog_Slice
  },
});

export default store
