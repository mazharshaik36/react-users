import UserForm from "@/features/users/components/UserForm";

export default function AddUserPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Add User</h1>

        <UserForm />
      </div>
    </div>
  );
}
