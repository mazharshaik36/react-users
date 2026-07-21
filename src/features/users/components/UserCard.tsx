import { type User } from "../types/user";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "12px",
        alignItems: "center",
      }}
    >
      <img
        src={user.image}
        alt={user.firstName}
        width={70}
      />

      <div>
        <h3>
          {user.firstName} {user.lastName}
        </h3>

        <p>{user.email}</p>

        <p>Age: {user.age}</p>

        <p>{user.phone}</p>
      </div>
    </div>
  );
}