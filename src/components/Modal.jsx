import { CirclePlus, Pencil } from "lucide-react";
import { memo } from "react";
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

  return (
    <div className=" py-5">
      <button className="btn flex gap-3" onClick={() => showModal()}>
        {title}
        {type === "add" && <CirclePlus size={28} />}
        {type === "edit" && <Pencil size={25} />}
      </button>
      <dialog id={modalId} className="modal">
        
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{name}</h3>
          <div>
            <form>
              <div className="px-5 flex w-full justify-center ">
                <p className="py-4">Click the button below to close</p>
              </div>
              <div className="w-full flex gap-2 justify-end">
                <button className="btn">Close</button>
                <button className="btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default memo(Modal);
