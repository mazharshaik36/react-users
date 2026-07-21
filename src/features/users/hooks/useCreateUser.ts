import { useMutation } from "@tanstack/react-query";

import { createUser } from "@/features/users/api";
import { type UserFormData } from "@/features/users/schemas/userSchema";

export default function useCreateUser() {
  return useMutation({
    mutationFn: (user: UserFormData) => createUser(user),
  });
}
