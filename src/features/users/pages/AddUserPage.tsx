import { useNavigate } from "react-router-dom";

import { FormLayout } from "@/shared/layouts";

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
    <FormLayout title="Add User" subtitle="Create a new user account" backTo="/">
      <UserForm
        onSubmit={handleSubmit}
        isSubmitting={mutation.isPending}
        submitLabel="Create User"
      />
    </FormLayout>
  );
}
