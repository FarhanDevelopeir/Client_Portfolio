import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddBlog, DeleteBlog, UpdateBlog } from "./Blog_API";
import { ContextBox, DeleteBox } from "../AdminSidebar_Slice";

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

export const UpdateBlogAsync = createAsyncThunk(
  "item/updateBlog",
  async ({ formData, id }, { dispatch }) => {
    try {
      const data = await UpdateBlog(formData, id);
      dispatch(ContextBox(false)); // Assuming this closes a modal or updates UI
      return { id, data };
    } catch (error) {
      console.error("Update failed:", error);
      throw error;
    }
  }
);

export const DeleteBlogAsync = createAsyncThunk(
  "item/deleteBlog",
  async (id, { dispatch }) => {
    try {
      const data = await DeleteBlog(id);
      dispatch(DeleteBox(null)); // Close any UI elements if necessary
      return id; // Return the blog ID to remove from the state
    } catch (error) {
      console.error("Delete failed:", error);
      throw error;
    }
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
    builder
    .addCase(AddBlogAsync.fulfilled, (state, action) => {
      state.Blogs.push(action.payload);
    })
    .addCase(UpdateBlogAsync.fulfilled, (state, action) => {
      const { id, data } = action.payload;
      const index = state.Blogs.findIndex((blog) => blog._id === id);
      if (index !== -1) {
        state.Blogs[index] = data; // Update the blog with the new data
      }
    })
    .addCase(DeleteBlogAsync.fulfilled, (state, action) => {
      const id = action.payload;
      console.log(id);
      state.Blogs = state.Blogs.filter((blog) => blog._id !== id); // Remove the blog with the given id
      console.log(state.Blogs);
      
    });
}
});

export const { blogs } = Blog_Slice.actions;

export default Blog_Slice.reducer;
