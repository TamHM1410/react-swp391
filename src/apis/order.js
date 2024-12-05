import axiosInstance from "../utils/axiosClient";
export const update_oders = async (payload, id) => {
    const res = await axiosInstance.patch(`/orders/${id}`, payload);
    return res.data;
  };
  