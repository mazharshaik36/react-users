import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, PrimaryButton, TextInput } from "@/shared/components";

import { userSchema, type UserFormData } from "@/features/users/schemas";

type UserFormProps = {
  defaultValues?: UserFormData;
  submitLabel?: string;
  isSubmitting?: boolean;
  onSubmit: (data: UserFormData) => void | Promise<void>;
};

export function UserForm({
  defaultValues,
  submitLabel = "Save",
  isSubmitting = false,
  onSubmit,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-xl bg-white p-8 shadow">
      <FormField label="First Name" error={errors.firstName?.message}>
        <TextInput placeholder="Enter first name" {...register("firstName")} />
      </FormField>

      <FormField label="Last Name" error={errors.lastName?.message}>
        <TextInput placeholder="Enter last name" {...register("lastName")} />
      </FormField>

      <FormField label="Email" error={errors.email?.message}>
        <TextInput type="email" placeholder="Enter email address" {...register("email")} />
      </FormField>

      <FormField label="Age" error={errors.age?.message}>
        <TextInput
          type="number"
          placeholder="Enter age"
          {...register("age", {
            valueAsNumber: true,
          })}
        />
      </FormField>

      <FormField label="Phone" error={errors.phone?.message}>
        <TextInput placeholder="Enter phone number" {...register("phone")} />
      </FormField>

      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : submitLabel}
        </PrimaryButton>
      </div>
    </form>
  );
}
