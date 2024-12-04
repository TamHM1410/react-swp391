/// @hook
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

//  @component
import Breadcrum from "../../../../components/Breadcrum";
import DashBoardLayout from "../../../../layouts/DashboardLayout";
import Table from "../../../../components/Table";

/// @api
import { get_all_transaction } from "../../../../apis/transaction";

const title = ["Dashboard", "Quản lý", "Giao dịch"];
const tableTitle=["id","Khách hàng","Mô tả","Tổng số sản phẩm","Tổng","Trang thái giao dịch","Ngày giao dịch"]

const TransactionView = () => {
   
    const {data,isLoading}=useQuery({
        queryKey:['transaction'],
        queryFn:()=>get_all_transaction()
    })

    console.log(data,'data')
  return <>
  <DashBoardLayout>
    <Breadcrum title={title}/>
    <Table title={tableTitle} data={data} onlyView={true}/>

    
     
  </DashBoardLayout>
  </>;
};

export default TransactionView;
