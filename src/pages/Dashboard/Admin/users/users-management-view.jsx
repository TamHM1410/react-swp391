//  @hook
import { useQuery, useQueries } from "@tanstack/react-query";

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
    queryFn: () => get_all_user("user"),
  });

  const result = useQueries({
    queries: [
      {
        queryKey: ["users"],
        queryFn: () => get_all_user("user"),
      },
      {
        queryKey: ["shippers"],
        queryFn: () => get_all_user("shipper"),
      },
    ],
  });
  console.log(result[1].data, "iiiii");
  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={breadTitle} />
        <div>Người dùng</div>
        <Table
          data={result[0].data}
          title={tableTitle}
          onlyView={true}
          statusOption={statusOption}
        />

        <div className="py-10">
          <div>Shipper của bạn</div>

          <Table
            data={result[1].data}
            title={tableTitle}
            onlyView={true}
            statusOption={statusOption}
          />
        </div>
      </DashBoardLayout>
    </>
  );
};

export default UserManagementView;
