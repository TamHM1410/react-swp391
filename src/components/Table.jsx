import { useState } from "react";

///@child component
import ActionDropDownLeft from "./Action-dropdown-left";
import Modal from "./Modal";

//@icon
import { Database } from "lucide-react";

const Table = ({
  title = [],
  data = [],
  paths = "/",
  onlyView = false,
  statusOption = ["Thất bại ", "Đang xử lý ", "Thành công", "4", "5"],
  subKeyTitle = ["Địa chỉ"],
  ...other
}) => {
  const [totalPage, setTotalPage] = useState(Math.ceil(data.length / 10));
  const [currentPage, setCurrentPage] = useState(0);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="card shadow-xl bg-base-100 w-full h-auto px-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {title.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data
                  .slice(currentPage * 10, currentPage * 10 + 10)
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {Object.entries(item)
                        .filter(([key]) => key !== "_id" && key !== "stem_slug") // Loại bỏ cột '_id' và 'stem_slug'
                        .map(([key, value]) => {
                          if (key === "thumb_image") {
                            return (
                              <td key={key}>
                                <img
                                  src={value}
                                  alt=""
                                  className="w-[40px] h-[40px]"
                                />
                              </td>
                            );
                          }
                          if (key === "status" && value === 0)
                            return (
                              <td
                                key={key}
                                className="text-red-700 cursor-pointer"
                              >
                                {statusOption[0]}
                              </td>
                            );
                          if (key === "status" && value === 1)
                            return (
                              <td
                                key={key}
                                className="text-yellow-700 cursor-pointer"
                              >
                                <Modal
                                  title={statusOption[1]}
                                  modalId={statusOption[1]}
                                  type={other.type}
                                  item={item}
                                  text='yellow'
                                />
                              </td>
                            );
                          if (key === "status" && value === 2)
                            return (
                              <td
                                key={key}
                                className="text-green-700 cursor-pointer"
                              >
                                <Modal title={statusOption[2]} />
                              </td>
                            );
                          if (key === "status" && value === 3)
                            return (
                              <td
                                key={key}
                                className="text-green-700 cursor-pointer"
                              >
                                {statusOption[3]}
                              </td>
                            );
                          if (key === "status" && value === 4)
                            return (
                              <td
                                key={key}
                                className="text-red-700 cursor-pointer"
                              >
                                <Modal
                                  title={statusOption[4]}
                                  modalId={statusOption[4]}
                                  type={other.type}
                                  item={item}
                                  text='red'
                                />
                              </td>
                            );

                          // Xử lý nếu giá trị là object
                          if (typeof value === "object" && value !== null) {
                            return (
                              <td key={key}>
                                <div className="flex flex-col">
                                  {Object.entries(value)
                                    .filter(([subKey]) => subKey !== "_id") // Loại bỏ '_id' trong object con
                                    .map(([subKey, subValue], subIndex) => {
                                      if (Object.entries(value).length > 2) {
                                        return (
                                          <div
                                            key={`${key}-${subKey}-${subIndex}`}
                                          >
                                            {subKeyTitle[subIndex]} : &nbsp;{" "}
                                            {String(subValue)}
                                          </div>
                                        );
                                      }
                                      return (
                                        <div
                                          key={`${key}-${subKey}-${subIndex}`}
                                        >
                                          {String(subValue)}
                                        </div>
                                      );
                                    })}
                                </div>
                              </td>
                            );
                          }

                          // Xử lý các giá trị thông thường
                          return <td key={key}>{value}</td>;
                        })}

                      <td>
                        <ActionDropDownLeft
                          item={item}
                          paths={paths}
                          onlyView={onlyView}
                          type={other.type}
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {data.length === 0 && (
          <div className="w-full  flex justify-center py-3">
            <div className="w-full">
              <div className="font-bold text-[30px] py-5 text-center">
                Chưa có dữ liệu
              </div>
              <div className="flex w-full justify-center">
                <Database />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="w-full flex items-center justify-center py-5">
        <div className="join">
          <button
            className="join-item btn btn-outline"
            disabled={currentPage === 0}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          {Array.from({ length: totalPage }, (_, index) => (
            <button
              className={`join-item btn btn-outline ${
                currentPage === index ? "btn-active" : ""
              }`}
              key={index}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="join-item btn btn-outline"
            disabled={currentPage === totalPage - 1}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Table;
