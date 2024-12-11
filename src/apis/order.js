import axiosInstance from "../utils/axiosClient";
export const update_oders = async (payload, id) => {
    const res = await axiosInstance.patch(`/orders/${id}`, payload);
    return res.data;
  };
  


  //// get user order history 
  export const user_order =async()=>{
    const res=await axiosInstance.get('/orders/users')
    return res.data
  }