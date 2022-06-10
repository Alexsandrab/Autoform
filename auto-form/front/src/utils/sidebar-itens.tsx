import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiScan, BiEdit, BiBarChartSquare, BiLogOut } from "react-icons/bi";
import { FaWpforms, FaBars } from "react-icons/fa";


const listOptionsMenu = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdOutlineDashboardCustomize size="24px" color="#FFF" />,
  },
  {
    // path: "/register",
    name: "Register",
    icon: <BiEdit size="24px" color="#FFF" />,
    subRoutes: [
      {
        path: "register/dimensions",
        name: "Dimensions",
      },
      {
        path: "register/attributes",
        name: "Attributes",

      },
      {
        path: "register/questions",
        name: "Questions",
      },
    ],
  },
  {
    path: "/register/tdd",
    name: "Tdd",
    icon: <BiScan size="24px" color="#FFF" />,

  },
  {
    path: "/forms",
    name: "Forms",
    icon: <FaWpforms size="24px" color="#FFF" />,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <BiBarChartSquare size="24px" color="#FFF" />,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: < BiLogOut size="24px" color="#FFF" />,
  }
];

export default listOptionsMenu;