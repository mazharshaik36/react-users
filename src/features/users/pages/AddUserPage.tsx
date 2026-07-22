import { useNavigate } from "react-router-dom";
import { UserForm } from "@/features/users/components/UserForm";
import { useCreateUser } from "@/features/users/hooks";
import { type UserFormData } from "@/features/users/schemas";

export default function AddUserPage() {
  const navigate = useNavigate();

  const mutation = useCreateUser();

  const handleSubmit = async (data: UserFormData) => {
    await mutation.mutateAsync(data);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Add User</h1>

        <UserForm
          onSubmit={handleSubmit}
          isSubmitting={mutation.isPending}
          submitLabel="Create User"
        />
      </div>
    </div>
  );
}
