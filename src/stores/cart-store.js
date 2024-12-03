import { create } from "zustand";



const useCart = create((set) => ({
    cart:null,
    updateCart: (payload) => set({ cart: payload }),
  
    
  }));
  
  export default useCart;
  