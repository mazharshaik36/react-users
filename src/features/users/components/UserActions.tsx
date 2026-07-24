import { Eye, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

import DeleteUserButton from "@/features/users/components/DeleteUserButton";

type UserActionsProps = {
  userId: number;
};

export default function UserActions({ userId }: UserActionsProps) {
  return (
    <div className="flex justify-center gap-3">
      <Link
        to={`/users/${userId}`}
        className="rounded p-2 text-blue-600 transition hover:bg-blue-100"
        aria-label="View user"
      >
        <Eye size={18} />
      </Link>

      <Link
        to={`/users/${userId}/edit`}
        className="rounded p-2 text-amber-600 transition hover:bg-amber-100"
        aria-label="Edit user"
      >
        <Pencil size={18} />
      </Link>

      <DeleteUserButton userId={userId} />
    </div>
  );
}
