import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";
import JobPostsPage from "./pages/JobPostsPage";
import ProviderProfile from "./pages/ProviderProfile";
import ProviderDashboard from "./pages/ProviderDashboard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "providers",
          element: <SearchPage />,
        },
        {
          path: "providers/:id",
          element: <ProviderProfile />,
        },
        {
          path: "job-posts",
          element: <JobPostsPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
        },
        {
          path: "checkout",
          element: <CheckoutPage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <ProviderDashboard />,
        },
        {
          path: "bookings",
          element: <ProviderDashboard />,
        },
        {
          path: "wallet",
          element: <ProviderDashboard />,
        },
        {
          path: "bids",
          element: <ProviderDashboard />,
        },
      ],
    },
  ],
  {
    basename: "/Khadamat_DEPI",
  }
);

export default router;
