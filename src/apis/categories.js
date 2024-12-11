import axiosInstance from "../utils/axiosClient";

export const getCategories = async () => {
  const res = await axiosInstance.get("/categories");
  return res.data;
};

export const create_new_categories = async (payload) => {
  const res = await axiosInstance.post("/categories",payload);
  return res.data;
};

export const delete_category= async (payload) => {
    const res = await axiosInstance.delete(`/categories/${payload}`);
    return res.data;
  };
