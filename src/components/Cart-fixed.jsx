import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartTable = () => {
  return (
    <div className="">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Só lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Bikini Brazil</td>
            <td>1</td>
            <td>4000</td>
          </tr>

          <tr>
            <th>Long Bào</th>
            <td>1</td>
            <td>4000</td>
          </tr>
          {/* row 3 */}
        </tbody>
      </table>
    </div>
  );
};

const CartFixed = () => {
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
              0
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
                Tổng tiền:<span>80000</span>
              </div>
              <div className="flex flex-col justify-items-end text-end	pt-5">
                <Link to='/checkout?step=0 ' className="btn btn-outline">Thanh toán</Link>
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
