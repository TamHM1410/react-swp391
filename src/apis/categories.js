import axiosInstance from "../utils/axiosClient"

export const getCategories=()=>{
    return axiosInstance.get('/categories')
}