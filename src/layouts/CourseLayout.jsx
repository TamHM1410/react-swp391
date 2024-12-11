import { Link } from "react-router-dom";
const CourseLayout = ({ children, data = [] }) => {
  return (
    <>
      <div className="w-full min-h-[100vh] h-full flex gap-2 font-semibold	">
        <div className="w-1/5">
          <div className="drawer lg:drawer-open h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Mở
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {Array.isArray(data) &&
                  data.length > 0 &&
                  data.map((item, index) => {
                    
                    return (
                      <>

                      <Link to={`/courses/${item.course_id}?lesson_id=${item._id}`} className="py-2">
                        <div>
                          Bai {index + 1}: {item.title}{" "}
                        </div>
                        </Link>
                      </>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </>
  );
};

export default CourseLayout;
