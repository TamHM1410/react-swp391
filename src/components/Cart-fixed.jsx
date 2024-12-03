import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { get_carts } from "../apis/cart";
import useCart from "../stores/cart-store";

const CartTable = () => {
  const { cart, updateCart } = useCart();

  return (
    <div className="">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Sản phẩm</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cart &&
            Array.isArray(cart.cart_product) &&
            cart.cart_product.length > 0 &&
            cart.cart_product.map((item) => {
              return (
                <>
                  {" "}
                  <tr>
                    <td>
                      <img src={item?.thumb_image} />
                    </td>
                    <td>{item.stem_name}</td>
                    <td>{item.stem_price}</td>
                  </tr>
                </>
              );
            })}

          {/* row 3 */}
        </tbody>
      </table>
    </div>
  );
};

const CartFixed = () => {
  const { cart, updateCart } = useCart();
  const { data, isLoading } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await get_carts();
      updateCart(res.data);

      return res;
    },
  });
  console.log(cart, "cart");
  const toggleDrawer = () => {
    const drawerToggle = document.getElementById("my-drawer");
    if (drawerToggle) {
      drawerToggle.checked = !drawerToggle.checked;
    }
  };

  return (
    <div className="fixed w-[50px] h-full top-[90vh] left-4 z-50">
      <div className="drawer fixed w-[50px] h-full top-[90vh] left-4 z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <button className="btn glass relative" onClick={toggleDrawer}>
            <ShoppingCart width={40} height={40} />
            <span className="absolute bg-red-500 p-1 rounded-xl text-[8px] w-[18px] h-[18px] right-3 top-2 text-white">
              {isLoading ? 0 : cart.cart_count_product}
            </span>
          </button>
        </div>
        <div className="drawer-side right-0">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-12">
            <li>
              <CartTable />
            </li>

            <div className="flex flex-col justify-items-end">
              <div className="flex  justify-between	">
                Tổng tiền:
                <span>
                  {cart &&
                    cart.cart_product &&
                    cart.cart_product.reduce((total, item) => {
                      return total + item.stem_price * (item.quantity || 1); // Nếu có quantity thì nhân
                    }, 0)}
                </span>
              </div>
              <div className="flex flex-col justify-items-end text-end	pt-5">
                <Link to="/checkout?step=0 " className="btn btn-outline">
                  Thanh toán
                </Link>
              </div>
            </div>
          </ul>
          <div className="p-5 font-bold">Giỏ hàng của bạn</div>
        </div>
      </div>
    </div>
  );
};

export default CartFixed;
