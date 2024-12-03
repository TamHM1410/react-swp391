import axiosInstance from "../utils/axiosClient"

export const updateUserInfor =async(payload)=>{
    const res =await axiosInstance.patch('/users',payload)
    return res
}