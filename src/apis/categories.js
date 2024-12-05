import axiosInstance from "../utils/axiosClient"

export const getCategories=async()=>{
    const res=await axiosInstance.get('/categories')
    return res.data
}

