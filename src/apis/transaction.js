import axiosInstance from "../utils/axiosClient";


export const get_all_transaction=async(query)=>{
    const res=await axiosInstance.get(`/orders?payment_method=${query}`)
    return res.data
}