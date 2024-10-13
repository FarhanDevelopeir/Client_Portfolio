import { configureStore } from "@reduxjs/toolkit";
import AdminSidebar_Slice from '../components/Admin_Components/features/AdminSidebar_Slice'
import Project_Slice from "../components/Admin_Components/features/Project_Features/Project_Slice";

export const store = configureStore({
  reducer: {
    sideBar: AdminSidebar_Slice,
    project_Slice: Project_Slice
  },
});

export default store
