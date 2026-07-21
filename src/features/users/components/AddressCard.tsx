import { type User } from "../types/user";

type Props = {
  user: User;
};

export default function AddressCard({ user }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Address
      </h2>

      <div className="space-y-2">

        <p>{user.address.address}</p>

        <p>
          {user.address.city}, {user.address.state}
        </p>

        <p>{user.address.postalCode}</p>

      </div>
    </div>
  );
}