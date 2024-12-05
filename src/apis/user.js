import axiosInstance from "../utils/axiosClient";

export const updateUserInfor = async (payload) => {
  const res = await axiosInstance.patch("/users", payload);
  return res;
};

//  @admin management user
export const get_all_user = async (payload) => {
  const res = await axiosInstance.get("/users");
  return res.data;
};
