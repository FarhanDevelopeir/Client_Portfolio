import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddProject, DeleteProject, UpdateProject } from "./Project_API";
import { ContextBox, DeleteBox } from "../AdminSidebar_Slice";

const initialState = {
  Projects: []
};

export const AddProjectAsync = createAsyncThunk(
  "item/addProject",
  async (formData, {dispatch}) => {
    console.log(formData);
    const data = await AddProject(formData);
    dispatch(ContextBox(false));
    return data;
  }
);

export const UpdateProjectAsync = createAsyncThunk(
  "item/updateProject",
  async ({ formData, id }, { dispatch }) => {
    try {
      const data = await UpdateProject(formData, id);
      return { id, data };
    } catch (error) {
      console.error("Update failed:", error);
      throw error;
    }
  }
);

export const DeleteProjectAsync = createAsyncThunk(
  "item/deleteProject",
  async (id, { dispatch }) => {
    try {
      const data = await DeleteProject(id);
      dispatch(DeleteBox(null)); // Close any UI elements if necessary
      return id; // Return the Project ID to remove from the state
    } catch (error) {
      console.error("Delete failed:", error);
      throw error;
    }
  }
);

export const Project_Slice = createSlice({
  name: "project_Slice",
  initialState,
  reducers: {
    projects: (state, action) => {
      console.log("Action payload:", action.payload); // Log the data being dispatched
      state.Projects = action.payload; // Set the new projects array
      console.log("Updated state:", state.Projects); // Log the updated state
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(AddProjectAsync.fulfilled, (state, action) => {
      state.Projects.push(action.payload);
    })
    .addCase(UpdateProjectAsync.fulfilled, (state, action) => {
      const { id, data } = action.payload;
      const index = state.Projects.findIndex((project) => project.id === id);
      if (index !== -1) {
        state.Projects[index] = data; // Update the project with the new data
      }
    })
    .addCase(DeleteProjectAsync.fulfilled, (state, action) => {
      const id = action.payload;
      console.log(id);
      state.Projects = state.Projects.filter((Project) => Project._id !== id); // Remove the Project with the given id
      console.log(state.Projects);
    });
  },
});

export const { projects } = Project_Slice.actions;

export default Project_Slice.reducer;
