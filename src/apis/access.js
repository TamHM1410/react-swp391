import axiosInstance from "../utils/axiosClient";


export const registerApi=async(payload)=>{
    const res= await axiosInstance.post('/register',payload)
    return res
}

export const loginApi=async(payload)=>{
    const res =await axiosInstance.post('/login',payload)
    return res
}