//  @react
import { useState } from "react";
//  @store
import useCart from "../../stores/cart-store";
//  @asset
import { Trash2 } from "lucide-react";

//  @api
import { update_cart } from "../../apis/cart";

//  @hook
import { useQueryClient } from "@tanstack/react-query";

const CartTable = () => {
  const { cart, total, updateCart } = useCart();
  const queryClient = useQueryClient();

  const handleRemoveItemInCart = async (index) => {
    console.log("Removing item at index:", index);
    const newCartProducts = [...cart.cart_product]; // Create a copy
    newCartProducts.splice(index, 1); // Remove the item
    
    // Update the cart with the new array of products
    const res = await update_cart({
      cart_product: newCartProducts
    });
    if (res) {
      updateCart(res);
      queryClient.invalidateQueries(["carts"]);
    }

    console.log("After delete:", newCartProducts);
  };

  const handleQuantityChange = async (index, newQuantity) => {
    // Create a copy of the current cart products
    const updatedCartProducts = [...cart.cart_product];
    
    // Update the quantity of the specific item
    updatedCartProducts[index] = {
      ...updatedCartProducts[index],
      quantity: newQuantity
    };

    // Update the cart on the server
    const res = await update_cart({
      cart_product: updatedCartProducts
    });

    if (res) {
      updateCart(res);
      queryClient.invalidateQueries(["carts"]);
    }
  };

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="overflow-x-auto card-body">
        <div className="font-bold">Giỏ hàng</div>

        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cart?.cart_product) &&
              cart.cart_product.length > 0 &&
              cart?.cart_product.map((item, index) => {
                return (
                  <tr key={index} className="hover:bg-base-200">
                    <th>{index + 1}</th>
                    <td>{item.stem_id.stem_name}</td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.stem_id.stem_price)}{" "}
                    </td>

                    <td>
                      <input
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value);
                          if (!isNaN(newQuantity) && newQuantity > 0) {
                            handleQuantityChange(index, newQuantity);
                          }
                        }}
                        type="number"
                        min={1}
                        className="w-[20%]"
                      />
                    </td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.stem_id.stem_price * item.quantity)}{" "}
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveItemInCart(index)}
                        className="text-red-700"
                      >
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pt-5 flex justify-end">
          <div className="font-bold">
            Tổng:{" "}
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;