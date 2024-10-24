import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      activeSiderbarItem: 'Blogs',
      openContentBox: false,
      deleteBox: null,
}

export const AdminSidebar_Slice = createSlice({
      name: "sideBar",
      initialState,
      reducers:{
            SiderbarItem: (state, action)=>{
                  state.activeSiderbarItem = action.payload
            },
            ContextBox: (state, action)=>{
                  state.openContentBox = action.payload
            },
            DeleteBox: (state, action)=>{
                  state.deleteBox = action.payload
            },
      }
      

})

export const { SiderbarItem, ContextBox, DeleteBox } = AdminSidebar_Slice.actions;

export default AdminSidebar_Slice.reducer;
