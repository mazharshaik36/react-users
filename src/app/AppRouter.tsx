import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { UsersPage, UserDetailsPage, EditUserPage } from "@features/users/pages";
import { AddUserPage } from "@/features/users/pages";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />

        <Route path="/users" element={<UsersPage />} />

        <Route path="/users/:id" element={<UserDetailsPage />} />

        <Route path="/users/:id/edit" element={<EditUserPage />} />

        <Route path="/users/new" element={<AddUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
