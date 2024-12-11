import { data } from "autoprefixer";
import axiosInstance from "../utils/axiosClient";

export const get_ship_list = async () => {
  const res = await axiosInstance.get("/ships/users");
  return res.data;
};

export const update_ship_status = async (id, status) => {
  const res = await axiosInstance.patch(`/ships/${id}`, {
    status: status,
  });
  return res.data;
};
