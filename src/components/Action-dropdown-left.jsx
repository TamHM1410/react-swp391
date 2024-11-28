import { EllipsisVertical,Eye ,Pencil,Trash2} from "lucide-react";
import { Link } from "react-router-dom";
const ActionDropDownLeft = () => {
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
            <button><Eye /> View</button>
          </li>
          <li>
            <a><Pencil/>Edit</a>
          </li>
          <li>
            <button className="text-red-700"><Trash2 />Delete</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ActionDropDownLeft;
