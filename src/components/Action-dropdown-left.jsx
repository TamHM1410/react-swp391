import { EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useStoreProducts from "../stores/products-store";

/// @api
import { delete_product } from "../apis/products";
import { delete_category } from "../apis/categories";
import { del_course } from "../apis/course";

//  @component
import toast from "react-hot-toast";

const ActionDropDownLeft = ({ item, paths, onlyView, type }) => {

  const { updateSelectedId, updateCurrentSelectProduct, selectedId } =
    useStoreProducts();
  const handleOnclick = () => {
    updateSelectedId(item._id);
    updateCurrentSelectProduct(item);
  };


  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(selectedId,'selected')
    try {
      switch (type) {
        case "category": {
          const res = await delete_category(selectedId);
          if (res) {
            toast.success("Xóa sản phẩm thành công");
          }
          return;
        }

        case "course": {
          const res = await del_course(selectedId);
          if (res) {
            toast.success("Xóa sản phẩm thành công");
          }
          return;
        }
        case "product": {
         const res= await delete_product(selectedId);
          if (res) {
            toast.success("Xóa sản phẩm thành công");
          }
          return;
        }

        default:
          return;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="dropdown dropdown-left dropdown-end h-full p-5">
        <div tabIndex={0} role="button" className="btn ">
          <EllipsisVertical />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-1 shadow h-auto"
        >
          <li className=" pt-2">
            <Link to={`${paths}/${item._id}`} onClick={handleOnclick}>
              <Eye /> Xem
            </Link>
          </li>
          {!onlyView && onlyView !== true && (
            <>
              <li>
                <Link
                  to={`/dashboard/product/${item._id}`}
                  onClick={handleOnclick}
                >
                  <Pencil />
                  Sửa
                </Link>
              </li>
              <li>
                <button
                  className="text-red-700 "
                  onClick={() => {
                    handleOnclick();
                    
                    document.getElementById("my_modal_5").showModal();
                   
                  }}
                >
                  <Trash2 />
                  Xóa
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Muốn xóa</h3>
                      <div className="py-4 text-[26px]">
                        Bạn có chắc muốn xóa ?
                      </div>
                      <div className="modal-action">
                        <form method="dialog " onSubmit={(e)=>onSubmit(e)}>
                          {/* if there is a button in form, it will close the modal */}
                          <button
                            className="btn mr-2"
                            type="button"
                            onClick={() =>
                              document.getElementById("my_modal_5").close()
                            }
                          >
                            Hủy bỏ
                          </button>
                          <button className="btn" type="submit">
                            Xác nhận
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default ActionDropDownLeft;
