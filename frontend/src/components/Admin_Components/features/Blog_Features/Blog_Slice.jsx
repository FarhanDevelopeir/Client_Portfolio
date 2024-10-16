import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddBlog } from "./Blog_API";
import { ContextBox } from "../AdminSidebar_Slice";

const initialState = {
  Blogs: []
};

export const AddBlogAsync = createAsyncThunk(
  "item/addBlog",
  async (formData, {dispatch}) => {
    console.log(formData);
    const data = await AddBlog(formData);
    dispatch(ContextBox(false));
    return data;
  }
);

export const Blog_Slice = createSlice({
  name: "blog_Slice",
  initialState,
  reducers: {
    blogs: (state, action) => {
      console.log("Action payload:", action.payload); // Log the data being dispatched
      state.Blogs = action.payload; // Set the new Blogs array
      console.log("Updated state:", state.Blogs); // Log the updated state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddBlogAsync.fulfilled, (state, action) => {
      state.Blogs.push(action.payload);
    });
  },
});

export const { blogs } = Blog_Slice.actions;

export default Blog_Slice.reducer;
