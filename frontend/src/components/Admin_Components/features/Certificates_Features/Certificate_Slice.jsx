import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddCertificate, UpdateCertificate } from "./Certificate_API";
import { ContextBox } from "../AdminSidebar_Slice";

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
  },
});

export const { certificates } = Certificate_Slice.actions;

export default Certificate_Slice.reducer;
