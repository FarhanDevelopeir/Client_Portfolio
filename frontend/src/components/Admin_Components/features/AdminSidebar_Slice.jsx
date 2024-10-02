import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      activeSiderbarItem: 'Blogs'
}

export const AdminSidebar_Slice = createSlice({
      name: "sideBar",
      initialState,
      reducers:{
            SiderbarItem: (state , action)=>{
                  state.activeSiderbarItem = action.payload
            }
      }
      

})

export const { SiderbarItem } = AdminSidebar_Slice.actions;

export default AdminSidebar_Slice.reducer;
