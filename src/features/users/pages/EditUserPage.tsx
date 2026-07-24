import { useNavigate, useParams } from "react-router-dom";

import { ErrorState, Loader } from "@/shared/components";
import { FormLayout } from "@/shared/layouts";

import { UserForm } from "@/features/users/components/UserForm";
import { useUser, useUpdateUser } from "@/features/users/hooks";
import { type UserFormData } from "@/features/users/schemas";

export default function EditUserPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data: user, isLoading, isError, refetch } = useUser(id!);

  const mutation = useUpdateUser();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !user) {
    return (
      <ErrorState
        title="Unable to load user"
        description="We couldn't load this user's information."
        onRetry={() => {
          void refetch();
        }}
      />
    );
  }

  const handleSubmit = async (data: UserFormData) => {
    await mutation.mutateAsync({
      id: id!,
      user: data,
    });

    navigate(`/users/${id}`);
  };

  return (
    <FormLayout
      title="Edit User"
      subtitle="Update the user's information"
      onBack={() => navigate(-1)}
    >
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
    </FormLayout>
  );
}
