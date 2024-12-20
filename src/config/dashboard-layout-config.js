import {
  Target,
  ChartNoAxesCombined,
  PackageSearch,
  Users,
  CalendarCheck,
  MessageSquare,
  UserCog,
  BadgeDollarSign,
  Truck,
  FolderClock,
  BookPlus
} from "lucide-react";
import { paths } from "./endPoint";

const dashboardLayoutConfig = [
  {
    tittle: "Ứng dụng",
    subheader: [
      {
        name: "Tổng quan",
        path: "/dashboard/overview",
        icon: Target, // Trả về component React
      },
      // {
      //   name: "Phân tích",
      //   path: paths.dashboard.analytic,
      //   icon: ChartNoAxesCombined, // Trả về component React
      // },
    ],
    icon: "/",
  },
  {
    tittle: " QUẢN LÝ",
    subheader: [
      {
        name: "Người dùng",
        path: paths.dashboard.user,
        icon: Users, // Trả về component React
      },
      {
        name: "Danh mục loại hàng",
        path: paths.dashboard.category,
        icon: BookPlus, // Trả về component React
      },
      {
        name: "Sản phẩm",
        path: "/dashboard/product",
        icon: PackageSearch, // Trả về component React
      },
      {
        name: "Khóa học",
        path: paths.dashboard.courses,
        icon: CalendarCheck, // Trả về component React
      },
      {
        name: "Giao dịch",
        path: paths.dashboard.transaction,
        icon: BadgeDollarSign, // Trả về component React
      }
    
    ],
    icon: "/",
  },
  {
    tittle: "Khác",
    subheader: [
      {
        name: "Tài khoản",
        path: paths.dashboard.account,
        icon: UserCog, // Trả về component React
      }
    ],

    icon: "/",
  },
];

const shipperConfig = [
  {
    tittle: " QUẢN LÝ",
    subheader: [
      {
        name: "Giao hàng",
        path: paths.dashboard.shipping,
        icon: Truck, // Trả về component React
      },
    ],
    icon: "/",
  },
  {
    tittle: "Khác",
    subheader: [
      {
        name: "Tài khoản",
        path: paths.dashboard.account,
        icon: UserCog, // Trả về component React
      },

      {
        name: "Chat",
        path: paths.dashboard.courses,
        icon: MessageSquare, // Trả về component React
      },
    ],

    icon: "/",
  },
];

const userLayout = [
  {
    tittle: "Khác",
    subheader: [
      {
        name: "Tài khoản",
        path: paths.dashboard.account,
        icon: UserCog, // Trả về component React
      },
      {
        name: "Lịch sử mua hàng",
        path: paths.dashboard.order_history,
        icon: FolderClock, // Trả về component React
      },
      {
        name: "Chat",
        path: paths.dashboard.courses,
        icon: MessageSquare, // Trả về component React
      },
    ],

    icon: "/",
  },
];
export const dashboardConfig = (role = 0) => {
  switch (role) {
    case "ADMIN":
      return dashboardLayoutConfig;
    case "USER":
      return userLayout;
    case "SHIPPER":
      return shipperConfig;
    default:
      return dashboardLayoutConfig;
  }
};
