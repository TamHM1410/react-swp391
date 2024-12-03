import { create } from "zustand";

const useCart = create((set) => ({
  cart: null,
  updateCart: (payload) => set({ cart: payload }),
  total: null,
  updateCartTotal: (payload) => set({ total: payload }),
  current_infor:null,
  updateInfor:(payload) => set({ current_infor: payload }),
}));

export default useCart;
