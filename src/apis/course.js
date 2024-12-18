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
  const res = await axiosInstance.patch(`/courses/${id}`, payload);
  return res.data;
};

export const get_course_id = async (id) => {
  const res = await axiosInstance.get(`/courses/${id}`);
  return res.data;
};

export const get_course_cate = async () => {
  //// function call list product not have course
  const res = await axiosInstance.get("/courses/products");
  return res.data;
};

export const del_course=async(payload)=>{
  const res= await axiosInstance.delete(`/courses/${payload}`)
  return res.data
}

///user
export const get_user_course = async () => {
  const res = await axiosInstance.get("/users/courses/robe");
  return res.data;
};

export const get_course_by_id=async(id)=>{
  const res =await axiosInstance.get(`/courses/${id}`)
  return res.data
}
