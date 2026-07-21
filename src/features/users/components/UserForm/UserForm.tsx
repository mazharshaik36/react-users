import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCreateUser } from "@/features/users/hooks";
import { userSchema, type UserFormData } from "@/features/users/schemas";

export default function UserForm() {
  const mutation = useCreateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 18,
      phone: "",
    },
  });

  const onSubmit = (data: UserFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-xl bg-white p-8 shadow">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block font-medium">First Name</label>

          <input {...register("firstName")} className="w-full rounded-lg border px-4 py-2" />

          <p className="mt-1 text-sm text-red-600">{errors.firstName?.message}</p>
        </div>

        <div>
          <label className="mb-2 block font-medium">Last Name</label>

          <input {...register("lastName")} className="w-full rounded-lg border px-4 py-2" />

          <p className="mt-1 text-sm text-red-600">{errors.lastName?.message}</p>
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium">Email</label>

        <input {...register("email")} className="w-full rounded-lg border px-4 py-2" />

        <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block font-medium">Age</label>

          <input
            type="number"
            {...register("age", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          <p className="mt-1 text-sm text-red-600">{errors.age?.message}</p>
        </div>

        <div>
          <label className="mb-2 block font-medium">Phone</label>

          <input {...register("phone")} className="w-full rounded-lg border px-4 py-2" />

          <p className="mt-1 text-sm text-red-600">{errors.phone?.message}</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {mutation.isPending ? "Saving..." : "Save User"}
      </button>
    </form>
  );
}
