import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) return false; // Không có user, chưa đăng nhập
      const parsedUser = JSON.parse(user);
      return Boolean(parsedUser); // Trả về true nếu có dữ liệu hợp lệ
    } catch (error) {
      console.error("Lỗi khi parse JSON:", error);
      return false; // Trả về false nếu có lỗi
    }
  };
  

const PrivateRoute = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};
export default PrivateRoute;
