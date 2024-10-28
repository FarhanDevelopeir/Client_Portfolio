import axios from "axios";
import { BASE_URL } from "../../../../constant";

export const AddProject = async (formData) => {
  console.log("api working");
  console.log("Form Data: ", formData);
  try {
    const res = await axios.post(`${BASE_URL}/api/projects/add`, formData, {
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

export const UpdateProject = async (formData, id) => {
  console.log("Updating project with id:", id);
  try {
    const res = await axios.put(`${BASE_URL}/api/projects/edit/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error occurred during project update:", error);
    throw error; // Properly throw the error for asyncThunk to catch
  }
};

export const DeleteProject = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/projects/delete/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error occurred during Project delete:", error);
    throw error; // Properly throw the error for asyncThunk to catch
  }
};
