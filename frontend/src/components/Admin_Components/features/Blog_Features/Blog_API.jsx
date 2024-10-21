import axios from "axios";
import { BASE_URL } from "../../../../constant";

export const AddBlog = async (formData) => {
  console.log("api working");
  console.log("Form Data: ", formData);
  try {
    const res = await axios.post(`${BASE_URL}/api/blogs/add`, formData, {
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

export const UpdateBlog = async (formData, id) => {
  console.log("Updating blog with id:", id);
  try {
    const res = await axios.put(`${BASE_URL}/api/blogs/edit/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error occurred during blog update:", error);
    throw error; // Properly throw the error for asyncThunk to catch
  }
};
