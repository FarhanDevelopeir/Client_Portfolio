import axios from "axios";
import { BASE_URL } from "../../../../constant";

export const AddCertificate = async (formData) => {
  console.log("api working");
  console.log("Form Data: ", formData);
  try {
    const res = await axios.post(`${BASE_URL}/api/certificates/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error occurred during API call:", error);
    throw error; // Properly throw the error for asyncThunk to catch
  }
};

export const UpdateCertificate = async (formData, id) => {
  console.log("Updating certificate with id:", id);
  try {
    const res = await axios.put(`${BASE_URL}/api/certificates/edit/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error occurred during certificate update:", error);
    throw error; // Properly throw the error for asyncThunk to catch
  }
};
