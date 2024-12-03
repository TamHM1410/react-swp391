import { create } from "zustand";

const useStoreProducts = create((set) => ({
  currentProduct: {},
  updateCurrentSelectProduct: (payload) => set({ currentProduct: payload }),

  selectedId: 0,
  updateSelectedId: (payload) => set({ selectedId: payload }),

  listProducts: [],
  updateListProducts: (payload) => set({ listProducts: payload }),
}));

export default useStoreProducts;
