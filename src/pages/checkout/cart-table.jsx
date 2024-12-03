import useCart from "../../stores/cart-store";
import { useState } from "react";
const CartTable = () => {
  const { cart,total } = useCart();

  // const [total, setTotal] = useState(() => {
  //   let flag=0
  //   if (Array.isArray(cart?.cart_product) && cart.cart_product.length > 0) {
  //     cart?.cart_product.forEach((item)=>{
  //        flag+=item.stem_id.stem_price * item.quantity
  //     })
  //     return flag
  //   }
  //   return 0
  // });

  console.log(total,'total')
  return (
    <div className=" card bg-base-100  w-full shadow-xl">
      <div className="overflow-x-auto  card-body">
        <div className="font-bold">Giỏ hàng</div>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cart?.cart_product) &&
              cart.cart_product.length > 0 &&
              cart?.cart_product.map((item, index) => {
                return (
                  <tr className="hover:bg-base-200">
                    <th>{index + 1}</th>
                    <td>{item.stem_id.stem_name}</td>
                    <td>{item.stem_id.stem_price}</td>

                    <td>{item.quantity}</td>
                    <td>{item.stem_id.stem_price * item.quantity}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pt-5 flex justify-end">
          <div className="font-bold">
            Tổng: <span>{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
