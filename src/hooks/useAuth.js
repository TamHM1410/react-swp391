export const useAuth = () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) return false; // Không có user, chưa đăng nhập
      const parsedUser = JSON.parse(user);
      return parsedUser; // Trả về true nếu có dữ liệu hợp lệ
    } catch (error) {
      return false; // Trả về false nếu có lỗi
    }
  };