import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUser } from "@/features/users/api";
import { userKeys } from "@/features/users/constants";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.all,
      });
    },
  });
}
