//  react
import { useQuery } from "@tanstack/react-query";

//  @layout
import DashBoardLayout from "../../../layouts/DashboardLayout";

//  @component
import Table from "../../../components/Table";
import Breadcrum from "../../../components/Breadcrum";

//  @api
import { get_ship_list } from "../../../apis/shipping";

//  @config

const breadTitle = ["Đơn hàng cần giao"];

const title = ["id", "Đơn hàng", "Người nhận", "Trạng thái"];

const subkey = ["Địa chỉ", "Số điện thoại", "Tổng"];

const statusOption = [
  "Giao hàng thất bại",
  "Đang giao hàng",
  "Giao thành công",
];

const ShippingView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["ship"],
    queryFn: () => get_ship_list(),
  });

  
  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={breadTitle} />
        <Table
          data={data}
          title={title}
          onlyView={true}
          subKeyTitle={subkey}
          statusOption={statusOption}
          type="ship"
        />
      </DashBoardLayout>
    </>
  );
};

export default ShippingView;
