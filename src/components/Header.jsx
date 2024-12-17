import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LayoutDashboard ,User,MessageCircleMore,LogOut} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const auth = useAuth();
  const navigate=useNavigate()
  const handleLogOut=()=>{
    localStorage.clear()
    navigate('/')

    window.location.reload();


  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Trang chủ</Link>
            </li>

            <li>
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
            <li>
              <a>Câu hỏi thường gặp</a>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost text-xl">FPT STEM</div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>

          <li>
            <Link to="/products">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/courses">Khóa học</Link>
          </li>
          <li>
            <a>Câu hỏi thường gặp</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!auth ? (
          <Link to="/auth/login" className="btn">
            Đăng nhập
          </Link>
        ) : (
          <>
            <div className="dropdown dropdown-left">
              <div tabIndex={0} role="button">
                {" "}
                <div className="avatar w-[30px] h-[30px]">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img
                      src={auth.avatar}
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <Link to='/dashboard'><div className="flex gap-2 justify-between"><LayoutDashboard /><span>Trang quản lý</span></div></Link>
                </li>
                <li>
                  <Link to="/dashboard/account"><div className="flex gap-2 justify-between"><User /><span>Tài khoản</span></div></Link>
                </li>
                <li>
                  <a><div className="flex gap-2 justify-between"><MessageCircleMore /><span>Đóng góp ý kiến</span></div></a>
                </li>
                <li>
                  <a><div className="flex gap-2 justify-between" onClick={handleLogOut}><LogOut /><span>Đăng xuất</span></div></a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
