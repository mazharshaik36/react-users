import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import {UsersPage, UserDetailsPage} from "@features/users/pages";

export default function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/users" replace />}
        />

        <Route
          path="/users"
          element={<UsersPage />}
        />

        <Route
          path="/users/:id"
          element={<UserDetailsPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}