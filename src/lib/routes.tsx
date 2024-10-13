import { lazy, Suspense } from "react";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import ConfirmEmail from "@/pages/auth/ConfirmEmail";
import EmailVerified from "@/pages/auth/EmailVerified";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import VerifyEmail from "@/pages/auth/VerifyEmail";
import Skeleton from "@/components/Skeleton";
const Index = lazy(() => import("@/pages/Index"));
const Analytics = lazy(() => import("@/pages/Analytics"));
const Groups = lazy(() => import("@/pages/Groups"));
const Home = lazy(() => import("@/pages/Home"));
const Messages = lazy(() => import("@/pages/messages/Messages"));
const Pack = lazy(() => import("@/pages/Pack"));
const Settings = lazy(() => import("@/pages/Settings"));

export const Routes = [
  {
    path: "/auth/login",
    element: (
      <AuthLayout showHelpBtn>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <AuthLayout showHelpBtn>
        <Register />
      </AuthLayout>
    ),
  },
  {
    path: "/auth/confirm-email",
    element: (
      <AuthLayout>
        <ConfirmEmail />
      </AuthLayout>
    ),
  },
  {
    path: "/auth/verify-email",
    element: (
      <AuthLayout>
        <VerifyEmail />
      </AuthLayout>
    ),
  },
  {
    path: "/auth/email-verified",
    element: (
      <AuthLayout>
        <EmailVerified />
      </AuthLayout>
    ),
  },
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Suspense fallback={<Skeleton />}>
          <Index />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/pack",
        element: <Pack />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
];
