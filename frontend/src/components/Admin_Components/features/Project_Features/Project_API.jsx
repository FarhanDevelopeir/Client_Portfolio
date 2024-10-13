import axios from "axios";

export const AddProject = async (formData) => {
  console.log("api working");
  console.log("Form Data: ", formData);
  try {
    const res = await axios.post(`/api/projects/add`, formData, {
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
