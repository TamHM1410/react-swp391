import axiosInstance from "../utils/axiosClient"

export const getCategories=()=>{
    return axiosInstance.get('/categories')
}

export const checkOut=(payload)=>{
    return axiosInstance.post('/payments/orders',payload)
}