//  @TamHM1410

//  @react
import { useState } from "react";
import { Link } from "react-router-dom";

//  @hook

import { useQuery } from "@tanstack/react-query";

//  @layout
import DashBoardLayout from "../../../layouts/DashboardLayout";

//  @component
import Breadcrum from "../../../components/Breadcrum";
import Table from "../../../components/Table";

//  @api
import { getCategories } from "../../../apis/categories";

//  @config
var breadTitle = ["Quản lý", "Loại hàng"];
var tabletTitle = ["Id","Tên ", "Mô tả"];

const CategoryView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={breadTitle} />

        <Link className="py-5 btn text-green-700" to={'/dashboard/category/create'}>Tạo mới</Link>
        <Table title={tabletTitle} onlyView={false} data={data} type="category" />
      </DashBoardLayout>
    </>
  );
};

export default CategoryView;
