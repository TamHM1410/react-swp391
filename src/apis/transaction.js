import axiosInstance from "../utils/axiosClient";


export const get_all_transaction=async()=>{
    const res=await axiosInstance.get('/orders')
    return res.data
}