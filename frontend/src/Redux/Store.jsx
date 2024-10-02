import { configureStore } from "@reduxjs/toolkit";
import AdminSidebar_Slice from "../components/Admin_Components/features/AdminSidebar_Slice";

export const store = configureStore({
  reducer: {
    sideBar: AdminSidebar_Slice,
  },
});

export default store
