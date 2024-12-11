import axiosInstance from "../utils/axiosClient";
export const get_analysis=async()=>{
    const res=await axiosInstance.get('/analysis')
    return res.data

}
