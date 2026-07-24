import { ArrowDown, ArrowUp, Users } from "lucide-react";
import { EmptyState } from "@/shared/components";
import { USER_COLUMNS } from "@/features/users/constants";
import { UserRow } from "@/features/users/components";

import type { SortState } from "@/features/users/types";
import type { User } from "@/features/users/types";

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
            users.map((user) => <UserRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td colSpan={5}>
                <EmptyState
                  icon={<Users size={36} />}

                  title="No users found"
                  description="Try adjusting your search to find what you're looking for."
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
