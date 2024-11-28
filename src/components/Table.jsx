import { useState } from "react";

///@child component
import ActionDropDownLeft from "./Action-dropdown-left";

const Table = ({ title = [], data = [] }) => {
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
      <div className="card shadow-xl bg-base-100 w-full h-full px-5">
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
              {data
                .slice(currentPage * 10, currentPage * 10 + 10)
                .map((item, index) => (
                  <tr key={index}>
                    {Object.entries(item).map(([key, value]) => (
                      <td key={key}>{value}</td>
                    ))}
                    <td>
                      <ActionDropDownLeft />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-5">
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
      </div>
    </>
  );
};

export default Table;
