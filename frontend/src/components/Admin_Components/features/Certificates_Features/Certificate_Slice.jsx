import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddCertificate, DeleteCertificate, UpdateCertificate } from "./Certificate_API";
import { ContextBox, DeleteBox } from "../AdminSidebar_Slice";

const initialState = {
  Certificates: []
};

export const AddCertificateAsync = createAsyncThunk(
  "item/addCertificate",
  async (formData, {dispatch}) => {
    console.log(formData);
    const data = await AddCertificate(formData);
    return data;
  }
);

export const UpdateCertificateAsync = createAsyncThunk(
  "item/updateCertificate",
  async ({ formData, id }, { dispatch }) => {
    try {
      const data = await UpdateCertificate(formData, id);
      return { id, data };
    } catch (error) {
      console.error("Update failed:", error);
      throw error;
    }
  }
);

export const DeleteCertificateAsync = createAsyncThunk(
  "item/deleteCertificate",
  async (id, { dispatch }) => {
    try {
      const data = await DeleteCertificate(id);
      dispatch(DeleteBox(null)); // Close any UI elements if necessary
      return id; // Return the Certificate ID to remove from the state
    } catch (error) {
      console.error("Delete failed:", error);
      throw error;
    }
  }
);

export const Certificate_Slice = createSlice({
  name: "certificate_Slice",
  initialState,
  reducers: {
    certificates: (state, action) => {
      console.log("Action payload:", action.payload); // Log the data being dispatched
      state.Certificates = action.payload; // Set the new Certificates array
      console.log("Updated state:", state.Certificates); // Log the updated state
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(AddCertificateAsync.fulfilled, (state, action) => {
      state.Certificates.push(action.payload);
    })
    .addCase(UpdateCertificateAsync.fulfilled, (state, action) => {
      const { id, data } = action.payload;
      const index = state.Certificates.findIndex((certificate) => certificate.id === id);
      if (index !== -1) {
        state.Certificates[index] = data; // Update the certficate with the new data
      }
    })
    .addCase(DeleteCertificateAsync.fulfilled, (state, action) => {
      const id = action.payload;
      console.log(id);
      state.Certificates = state.Certificates.filter((Certificate) => Certificate._id !== id); // Remove the Certificate with the given id
      console.log(state.Certificates);
    });
  },
});

export const { certificates } = Certificate_Slice.actions;

export default Certificate_Slice.reducer;
