import axiosInstance from "../utils/axiosClient";
export const get_carts= async()=>{
    const res =await axiosInstance.get('/carts')
    return res
}