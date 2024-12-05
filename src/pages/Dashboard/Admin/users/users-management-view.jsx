//  @hook
import { useQuery } from "@tanstack/react-query";

//  @component
import Breadcrum from "../../../../components/Breadcrum";
import DashBoardLayout from "../../../../layouts/DashboardLayout";
import Table from "../../../../components/Table";
//  @api
import { get_all_user } from "../../../../apis/user";

///@ config
const breadTitle = ["Dashboard", "Quản lý", "Người dùng"];
const tableTitle = [
  "Id",
  "Tên",
  "Số điện thoại",
  "Email",
  "Role",
  "Trạng thái",
];
const statusOption = ["Đang hoạt động", "Ngừng hoạt động", "Bị Cấm"];
const UserManagementView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => get_all_user(),
  });

  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={breadTitle} />
        <Table
          data={data}
          title={tableTitle}
          onlyView={true}
          statusOption={statusOption}
        />
      </DashBoardLayout>
    </>
  );
};

export default UserManagementView;
