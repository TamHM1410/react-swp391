//  @hook
import { useQuery } from "@tanstack/react-query";

/// @component
import Table from "../../../components/Table";
import Breadcum from "../../../components/Breadcrum";

/// @layout
import DashBoardLayout from "../../../layouts/DashboardLayout";

//  @config
const breadTitle = ["Lịch sử mua hàng"];
const title = [
  "id",
  "Địa chỉ nhận hàng",
  "Mô tả",
  "Tổng sản phẩm",
  "Tổng ",
  "Số điện thoại ",
  "Trạng thái",
  "Thông tin shipper"
];
const statusOption = [
  "Thất bại",
  "Đang xử lý",
  "Đang giao hàng",
  "Đã nhận hàng",
  "Giao hàng thất bại",
];

/// @api
import { user_order } from "../../../apis/order";

const OrderHistoryView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["orderHistory"],
    queryFn: () => user_order(),
  });

  return (
    <>
      <DashBoardLayout>
        <Breadcum title={breadTitle} />

        <Table
          data={data}
          title={title}
          onlyView={true}
          statusOption={statusOption}
          type="user"
          subKeyTitle={["Tên","Số điện thoại"]}
          
        />
      </DashBoardLayout>
    </>
  );
};

export default OrderHistoryView;
