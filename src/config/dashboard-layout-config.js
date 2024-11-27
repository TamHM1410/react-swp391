import { Target, ChartNoAxesCombined, PackageSearch, Users } from "lucide-react";
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
