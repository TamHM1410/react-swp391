import axiosInstance from "../utils/axiosClient";
export const get_carts = async () => {
  const res = await axiosInstance.get("/carts");
  return res;
};

export const checkOut = async (payload) => {
  const res = await axiosInstance.post("/payments/orders", payload);
  return res;
};

export const update_cart = async (payload, update_quantity = false) => {
  const res = await axiosInstance.patch(
    `/carts?update_quantity=${update_quantity}`,
    payload
  );
  return res.data;
};
