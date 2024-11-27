import { Link } from "react-router-dom";
import { dashboardConfig } from "../config/dashboard-layout-config";
const DashBoardLayout = ({ children }) => {
  const config = dashboardConfig();

  return (
    <>
      <div className="w-full h-[100vh] flex gap-2 font-semibold	">
        <div className="w-1/5">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {Array.isArray(config) &&
                  config.length > 0 &&
                  config.map((item) => {
                    return (
                      <>
                        <div>{item.tittle}</div>
                        {Array.isArray(item?.subheader) &&
                          item.subheader.map((sub) => {
                            return (
                              <>
                                <li>
                           
                                    <Link to={sub.path} className="flex gap-2">
                                      <sub.icon />
                                      <span className="flex items-center font-semibold	">
                                        {sub.name}
                                      </span>
                                    </Link>
                                  
                                </li>
                              </>
                            );
                          })}
                      </>
                    );
                  })}
                {/* Sidebar content here */}
                {/* <div>App</div>
                  <li>
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Analytic</a>
                  </li>
                  <div>Management</div> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-4/5">
          {children} {/* Sử dụng children để render nội dung trang */}
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
