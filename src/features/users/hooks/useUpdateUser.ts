import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser } from "@/features/users/api";
import { userKeys } from "@/features/users/constants";
import { type UserFormData } from "@/features/users/schemas";

type UpdateUserPayload = {
  id: string;
  user: UserFormData;
};

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, user }: UpdateUserPayload) => updateUser(id, user),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: userKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: userKeys.detail(variables.id),
      });
    },
  });
}
