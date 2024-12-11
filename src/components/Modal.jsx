import { useState } from "react";

import { CirclePlus, Pencil } from "lucide-react";
import { memo } from "react";
import { update_oders } from "../apis/order";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

import { update_ship_status } from "../apis/shipping";

const Modal = ({
  modalId = "",
  name = "",
  title = "",
  type = "",
  ...other
}) => {
  const queryClient = useQueryClient();

  const auth=useAuth()

 

  const [value, setValue] = useState(2);

  const showModal = () => {
    document.getElementById(modalId).showModal();
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await update_oders(
        {
          user_id: other.item.user_id._id,
          status: 2,
        },
        other.item._id
      );
      if (res) {
        queryClient.invalidateQueries(["users"]);
        queryClient.invalidateQueries(["transactions"]);

        toast.success("Cap nhat thanh cong");
        document.getElementById(modalId).close();
      }
    } catch (error) {
      toast.error(error.message);
      document.getElementById(modalId).close();
    }
  };

  const handleUserRequest = async (e) => {
    e.preventDefault();
    try {
      const res = await update_oders(
        {
          user_id: auth?._id,
          status: 2,
        },
        other.item._id
      );
      if (res) {
        queryClient.invalidateQueries(["orderHistory"]);

        toast.success("Cap nhat thanh cong");
        document.getElementById(modalId).close();
      }
    } catch (error) {
      toast.error(error.message);
      document.getElementById(modalId).close();
    }
  };

  const handleUpdateShip = async (e) => {
    e.preventDefault();

    try {
      const res = await update_ship_status(other.item._id, Number(value));
      if (res) {
        toast.success("Cap nhat thanh cong");
        queryClient.invalidateQueries(["ship"]);

        document.getElementById(modalId).close();
      }
    } catch (error) {
      console.log(error, "err");
    }
  };
  const render_transaction = (
    <>
      <form>
        <div className="px-5 flex w-full justify-center ">
          <p className="py-4">Cập nhật trạng thai</p>
        </div>
        <div className="w-full flex gap-2 justify-end">
          {/* <button className="btn" type="button">Close</button> */}
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault(document.getElementById(modalId).close());
              mo;
            }}
          >
            Đóng
          </button>
          <button className="btn" onClick={(e) => handleUpdateCourse(e)}>
            Lưu
          </button>
        </div>
      </form>
    </>
  );

  const render_ship = (
    <>
      <form className="w-[350px] text-black">
        <div className="px-5 flex w-full justify-center ">
          <p className="py-4">Cập nhật trạng thái giao hàng</p>
        </div>
        <div className="w-full flex flex-col gap-4">
          {/* Select trạng thái giao hàng */}
          <div className="w-full flex flex-col items-start">
            <label
              htmlFor="deliveryStatus"
              className="text-sm font-medium py-5"
            >
              Trạng thái giao hàng
            </label>
            <select
              id="deliveryStatus"
              name="deliveryStatus"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value={null} disabled>
                Chọn trạng thái
              </option>
              <option value={2}>Thành công</option>
              <option value={0}>Thất bại</option>
            </select>
          </div>
        </div>
        <div className="w-full flex gap-2 justify-end mt-4">
          {/* Button lưu */}

          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault(document.getElementById(modalId).close());
              mo;
            }}
          >
            Đóng
          </button>
          <button className="btn" onClick={(e) => handleUpdateShip(e)}>
            Lưu
          </button>
        </div>
      </form>
    </>
  );

  const render_user=(
    <>
      <form>
        <div className="px-5 flex w-full justify-center ">
          <p className="py-10 text-[40px]" >Yêu cầu giao hàng lại</p>
        </div>
        <div className="w-full flex gap-2 justify-end">
          {/* <button className="btn" type="button">Close</button> */}
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault(document.getElementById(modalId).close());
              mo;
            }}
          >
            Đóng
          </button>
          <button className="btn" onClick={(e) => handleUserRequest(e)}>
          Xác nhận
          </button>
        </div>
      </form>
    </>
  )

  return (
    <div className=" py-5">
      <button
        className={`btn flex gap-3 text-${other.text ? other.text : ""}-700`}
        onClick={() => showModal()}
      >
        {title}
        {type === "add" && <CirclePlus size={28} />}
        {type === "edit" && <Pencil size={25} />}
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box w-auto max-w-5xl">
          <h3 className="font-bold text-lg">{name}</h3>
          <div>
            {type === "transaction" && render_transaction}
            {type === "ship" && render_ship}
            {type==='user' && render_user}
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default memo(Modal);
