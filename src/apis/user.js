import axiosInstance from "../utils/axiosClient";

export const updateUserInfor = async (payload) => {
  const res = await axiosInstance.patch("/users", payload);
  return res;
};

//  @admin management user
export const get_all_user = async (payload) => {
  const res = await axiosInstance.get(`/users?role=${payload}`);
  return res.data;
};
export const get_user_by_id=async(id)=>{
  const res = await axiosInstance.get(`/users/${id}`);
  return res.data


}

export const update_user=async(id,payload)=>{
  const res=await axiosInstance.patch(`/users/${id}`,payload)
  return res.data

}