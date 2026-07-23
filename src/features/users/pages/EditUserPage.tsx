import { useNavigate, useParams } from "react-router-dom";

import { Loader } from "@/shared/components";

import { UserForm } from "@/features/users/components/UserForm";
import { useUser, useUpdateUser } from "@/features/users/hooks";
import { type UserFormData } from "@/features/users/schemas";

export default function EditUserPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data: user, isLoading, isError } = useUser(id!);

  const mutation = useUpdateUser();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !user) {
    return <div className="p-10 text-center">User not found.</div>;
  }

  const handleSubmit = async (data: UserFormData) => {
    await mutation.mutateAsync({
      id: id!,
      user: data,
    });

    navigate(`/users/${id}`);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Edit User</h1>

        <UserForm
          defaultValues={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            age: user.age,
            phone: user.phone,
          }}
          submitLabel="Update User"
          isSubmitting={mutation.isPending}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
