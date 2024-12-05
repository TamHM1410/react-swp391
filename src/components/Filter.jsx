import { SlidersHorizontal } from "lucide-react";

const Fitler = ({ listFilter = [] ,setValueFilter,valueFilter}) => {
  return (
    <div className="py-3">
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          Bộ lọc <SlidersHorizontal />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {listFilter.length > 0 &&
            listFilter.map((item) => {
              return (
                <>
                  <li onClick={()=>setValueFilter(item?.value)}>
                    <a>{item?.label }</a>
                  </li>
                </>
              );
            })}

         
        </ul>
      </div>
    </div>
  );
};

export default Fitler;
