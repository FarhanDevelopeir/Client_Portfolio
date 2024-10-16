import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddCertificate } from "./Certificate_API";
import { ContextBox } from "../AdminSidebar_Slice";

const initialState = {
  Certificates: []
};

export const AddCertificateAsync = createAsyncThunk(
  "item/addCertificate",
  async (formData, {dispatch}) => {
    console.log(formData);
    const data = await AddCertificate(formData);
    dispatch(ContextBox(false));
    return data;
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
    builder.addCase(AddCertificateAsync.fulfilled, (state, action) => {
      state.Certificates.push(action.payload);
    });
  },
});

export const { certificates } = Certificate_Slice.actions;

export default Certificate_Slice.reducer;
