import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddProject, UpdateProject } from "./Project_API";
import { ContextBox } from "../AdminSidebar_Slice";

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
  },
});

export const { projects } = Project_Slice.actions;

export default Project_Slice.reducer;
