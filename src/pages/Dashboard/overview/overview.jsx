import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import DashBoardLayout from "../../../layouts/DashboardLayout";
import { get_analysis } from "../../../apis/analysis";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Doanh thu hàng tháng",
    },
  },
};

const optionsPie = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Tổng quan người dùng",
    },
  },
};

const Overview = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => get_analysis(),
    queryKey: ["analysis"],
  });

  const columnChart = data?.sales?.map((item) => `Tháng ${item?._id}`);
  const totalMonthly = data?.sales?.map((item) => item?.monthlyTotal);

  const dataPie = {
    labels: ["Khách hàng", "Shipper", "Quản trị viên"],
    datasets: [
      {
        label: "Votes",
        data: [
          data?.total_users?.total_customer,
          data?.total_users?.total_shipper,
          data?.total_users?.total_admin,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const datax = {
    labels: columnChart || [],
    datasets: [
      {
        label: "Doanh thu (đơn vị vnđ)",
        data: totalMonthly || [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <DashBoardLayout>
      <div className="w-full px-10 gap-2 flex justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto mb-8">
          <Bar data={datax} options={options} />
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
          <Pie data={dataPie} options={optionsPie} />
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Overview;
