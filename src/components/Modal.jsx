import { CirclePlus, Pencil } from "lucide-react";
import { memo } from "react";
import { update_oders } from "../apis/order";
const Modal = ({
  modalId = "",
  name = "",
  title = "",
  type = "",
  ...other
}) => {
  const showModal = () => {
    document.getElementById(modalId).showModal();
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
   
      // const res = await update_oders(
      //   {
      //     ...other.item,
      //     status: 2,
      //   },
      //   other.item._id
      // );
      console.log(other.item, "res");
    } catch (error) {
      console.log(error);
    }
  };

  const render_transaction = (
    <>
      <form>
        <div className="px-5 flex w-full justify-center ">
          <p className="py-4">Xác nhận giao dịch</p>
        </div>
        <div className="w-full flex gap-2 justify-end">
          {/* <button className="btn" type="button">Close</button> */}
          <button className="btn" onClick={(e) => handleUpdateCourse(e)}>
            Lưu
          </button>
        </div>
      </form>
    </>
  );

  return (
    <div className=" py-5">
      <button className="btn flex gap-3" onClick={() => showModal()}>
        {title}
        {type === "add" && <CirclePlus size={28} />}
        {type === "edit" && <Pencil size={25} />}
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box w-auto max-w-5xl">
          <h3 className="font-bold text-lg">{name}</h3>
          <div>{type === "transaction" && render_transaction}</div>
        </div>
      </dialog>
    </div>
  );
};
export default memo(Modal);
