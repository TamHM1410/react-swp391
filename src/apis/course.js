import axiosInstance from "../utils/axiosClient";


/// admin 
export  const get_course=async()=>{
    const res =await axiosInstance.get('/courses')
    return res.data
}