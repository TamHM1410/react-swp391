import axiosInstance from "../utils/axiosClient";
export const get_carts= async()=>{
    const res =await axiosInstance.get('/carts')
    return res
}

export const checkOut=async (payload)=>{
    const res=await  axiosInstance.post('/payments/orders',payload)
    return res
}