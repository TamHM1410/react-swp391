import axiosInstance from "../utils/axiosClient";

export const create_new_lessoon = async (payload) => {
  const res = await axiosInstance.post("/lessons", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};
