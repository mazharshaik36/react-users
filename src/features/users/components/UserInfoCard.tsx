import { type User } from "../types/user";

type Props = {
  user: User;
};

export default function UserInfoCard({ user }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Personal Information
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Info label="Age" value={user.age} />

        <Info label="Gender" value={user.gender} />

        <Info label="Phone" value={user.phone} />

        <Info label="Username" value={user.username} />

        <Info label="Birth Date" value={user.birthDate} />

        <Info label="Blood Group" value={user.bloodGroup} />

      </div>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-semibold">
        {value}
      </p>
    </div>
  );
}