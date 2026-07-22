import { ArrowDown, ArrowUp, Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import { USER_COLUMNS } from "@/features/users/constants/tableColumns";
import type { SortState } from "@/features/users/types/table";
import type { User } from "@/features/users/types/user";

type Props = {
  users: User[];
  sort: SortState;
  onSort: (field: SortState["field"]) => void;
};

export default function UsersTable({ users, sort, onSort }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            {USER_COLUMNS.map((column) => (
              <th
                key={column.key}
                className={`px-6 py-4 text-left ${
                  column.sortable ? "cursor-pointer select-none" : ""
                }`}
                onClick={() => {
                  if (column.sortable) {
                    onSort(column.key);
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  {column.label}

                  {column.sortable &&
                    sort.field === column.key &&
                    (sort.direction === "asc" ? <ArrowUp size={16} /> : <ArrowDown size={16} />)}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="border-b transition hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={user.image} alt={user.firstName} className="h-10 w-10 rounded-full" />

                    <div>
                      <p className="font-semibold">
                        {user.firstName} {user.lastName}
                      </p>

                      <p className="text-xs text-gray-500">ID #{user.id}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">{user.email}</td>

                <td className="px-6 py-4">{user.age}</td>

                <td className="px-6 py-4">{user.phone}</td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <Link
                      to={`/users/${user.id}`}
                      className="rounded p-2 text-blue-600 transition hover:bg-blue-100"
                      aria-label={`View ${user.firstName} ${user.lastName}`}
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/users/${user.id}/edit`}
                      className="rounded p-2 text-amber-600 transition hover:bg-amber-100"
                      aria-label={`Edit ${user.firstName} ${user.lastName}`}
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      type="button"
                      className="rounded p-2 text-red-600 transition hover:bg-red-100"
                      aria-label={`Delete ${user.firstName} ${user.lastName}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
