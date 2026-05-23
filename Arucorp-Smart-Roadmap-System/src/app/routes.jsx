import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Items from "../pages/Items/Items";
import Roadmap from "../pages/Roadmap/Roadmap";
import Settings from "../pages/Settings/Settings";

import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "roadmap",
        element: <Roadmap />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;