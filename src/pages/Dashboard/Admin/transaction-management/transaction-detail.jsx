import DashBoardLayout from "../../../../layouts/DashboardLayout";
import Breadcrum from "../../../../components/Breadcrum";
import TransactionDetailForm from "./transation-detail-form";
import { useQuery } from "@tanstack/react-query";
import { get_order_detail } from "../../../../apis/order";
import { useParams } from "react-router-dom";
const breadTitle = ["Giao dịch", "Chi tiết"];

const TransactionDetailView = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["transactionDetail", id],
    queryFn: () => get_order_detail(id),
  });
  console.log(data, "id");

  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={breadTitle} />
        <TransactionDetailForm  data={data}/>
      </DashBoardLayout>
    </>
  );
};

export default TransactionDetailView;
