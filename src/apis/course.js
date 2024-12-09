import axiosInstance from "../utils/axiosClient";

/// admin
export const get_course = async () => {
  const res = await axiosInstance.get("/courses");
  return res.data;
};

export const create_course = async (payload) => {
  const res = await axiosInstance.post("/courses", payload);
  return res.data;
};

export const update_course = async (payload, id) => {
  const res = await axiosInstance.post(`/courses/${id}`, payload);
  return res.data;
};

export const get_course_cate = async () => {
  //// function call list product not have course
  const res = await axiosInstance.get("/courses/products");
  return res.data;
};
