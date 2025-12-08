import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/defaultColorPreset.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import Login from "./modules/auth/page/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import PlaceholderDashboard from "./modules/dashboard/page/PlaceholderDashboard.tsx";
import LetterBox from "./modules/incognito-qa/page/LetterBox.tsx";
import AuthProvider from "./contexts/auth/AuthProvider.tsx";
import Profile from "./modules/profile/page/Profile.tsx";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Login />,
  },
  {
    element: <ProtectedRoute allowedRoles={["employee", "admin"]} />,
    children: [
      {
        path: "",
        element: <App />,
        children: [
          { path: "dashboard", element: <PlaceholderDashboard /> },
          { path: "incognito-letter", element: <LetterBox /> },
          { path: "profile", element: <Profile /> },
          // { index: true, element: <PlaceholderDashboard /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
