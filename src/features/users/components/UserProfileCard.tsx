import { type User } from "../types/user";

type Props = {
  user: User;
};

export default function UserProfileCard({ user }: Props) {
  return (
    <div className="mb-8 flex items-center gap-6 rounded-xl border bg-white p-6 shadow-sm">
      <img
        src={user.image}
        alt={user.firstName}
        className="h-32 w-32 rounded-full border"
      />

      <div>
        <h1 className="text-3xl font-bold">
          {user.firstName} {user.lastName}
        </h1>

        <p className="mt-2 text-gray-500">
          {user.email}
        </p>

        <div className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Active User
        </div>
      </div>
    </div>
  );
}