import axiosInstance from "../utils/axiosClient";

export const get_products = async () => {
  const res = await axiosInstance.get("/stems");
  return res.data;
};
export const create_product=async(payload)=>{
    const res =await axiosInstance.post('/stems',payload)
    return res

}
export const get_stem_by_id = async (payload) => {
  const res = await axiosInstance.get(`/stems/${payload}`);
  return res.data;
};
export const update_product_id=async(id,payload)=>{
    const res=await axiosInstance.patch(`/stems/${id}`,payload)
    return res
}

export  const delete_product=async (id)=>{
    const res=await axiosInstance.delete(`/stems/${id}`)
    return res

}

export const uploadFile = async (payload) => {
  const res = await axiosInstance.post("/upload/product/image", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res
};

