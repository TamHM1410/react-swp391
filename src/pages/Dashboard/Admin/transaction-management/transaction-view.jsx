/// @hook
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

//  @component
import Breadcrum from "../../../../components/Breadcrum";
import DashBoardLayout from "../../../../layouts/DashboardLayout";
import Table from "../../../../components/Table";
import Fitler from "../../../../components/Filter";

/// @api
import { get_all_transaction } from "../../../../apis/transaction";
import { label } from "motion/react-client";

/// @asset

const title = ["Dashboard", "Quản lý", "Giao dịch"];
const tableTitle = [
  "id",
  "Khách hàng",
  "Mô tả",
  "Tổng số sản phẩm",
  "Tổng",
  "Trang thái giao dịch",
  "Loại giao dịch",

  "Ngày giao dịch",
];

const filter = [
  {
    label: "Tất cả giao dịch",
    value: "",
  },
  {
    label: "Tiền mặt",
    value: "CASH",
  },
  {
    label: "Chuyển khoản",
    value: "BANK",
  },
];

const TransactionView = () => {
  const [valueFilter, setValueFilter] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["transaction", valueFilter],
    queryFn: () => get_all_transaction(valueFilter),
  });
  console.log(valueFilter, "value");
  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={title} />

        <Fitler
          setValueFilter={setValueFilter}
          valueFilter={valueFilter}
          listFilter={filter}
        />

        <Table title={tableTitle} data={data} onlyView={true} type="transaction" />
      </DashBoardLayout>
    </>
  );
};

export default TransactionView;
