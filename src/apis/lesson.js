import axiosInstance from "../utils/axiosClient";

export const create_new_lessoon = async (payload) => {
  const res = await axiosInstance.post("/lessons", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};


export const get_lesson_by_id=async(payload)=>{
   const res=await axiosInstance.get(`/lessons/${payload}`)
   return res.data
}