import { type User } from "../types/user";

type Props = {
  user: User;
};

export default function CompanyCard({ user }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Company
      </h2>

      <div className="space-y-3">

        <p className="font-semibold">
          {user.company.name}
        </p>

        <p>{user.company.department}</p>

        <p>{user.company.title}</p>

      </div>
    </div>
  );
}