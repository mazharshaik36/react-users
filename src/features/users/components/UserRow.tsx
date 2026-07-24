import type { User } from "@/features/users/types";

import UserActions from "@/features/users/components/UserActions";

type Props = {
  user: User;
};

export default function UserRow({ user }: Props) {
  return (
    <tr className="border-b transition hover:bg-slate-50">
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
        <UserActions userId={user.id} />
      </td>
    </tr>
  );
}
