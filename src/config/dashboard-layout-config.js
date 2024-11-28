import { Target, ChartNoAxesCombined, PackageSearch, Users,CalendarCheck,MessageSquare,UserCog } from "lucide-react";
import { paths } from "./endPoint";

const dashboardLayoutConfig = [
  {
    tittle: "APP",
    subheader: [
      {
        name: "Overview",
        path: paths.dashboard.overview,
        icon: Target, // Trả về component React
      },
      {
        name: "Analytics",
        path: paths.dashboard.analytic,
        icon: ChartNoAxesCombined, // Trả về component React
      },
    ],
    icon: "/",
  },
  {
    tittle: "MANAGEMENT",
    subheader: [
      {
        name: "Users",
        path: paths.dashboard.user,
        icon: Users, // Trả về component React
      },
      {
        name: "Products",
        path: paths.dashboard.product,
        icon: PackageSearch, // Trả về component React
      },
      {
        name: "Courses",
        path: paths.dashboard.courses,
        icon: CalendarCheck, // Trả về component React
      },
    ],
    icon: "/",
  },
  {
    tittle: "Other",
    subheader: [
      {
        name: "Account",
        path: paths.dashboard.account,
        icon: UserCog , // Trả về component React
      },   
      {
        name: "Chat",
        path: paths.dashboard.courses,
        icon: MessageSquare , // Trả về component React
      },
    ],
    icon: "/",
  },
];

export const dashboardConfig = (role = 0) => {
  switch (role) {
    case 0:
      return dashboardLayoutConfig;
    default:
      return dashboardLayoutConfig;
  }
};
