import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteUser } from "@/features/users/api";
import { userKeys } from "@/features/users/constants";
import type { UsersResponse } from "@/features/users/types";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteUser(id),

    onSuccess: async (_, id) => {
      await queryClient.cancelQueries({
        queryKey: userKeys.lists(),
      });

      queryClient.setQueriesData<UsersResponse>(
        {
          queryKey: userKeys.lists(),
        },
        (old) => {
          if (!old) {
            return old;
          }

          return {
            ...old,
            users: old.users.filter((user) => user.id !== Number(id)),
            total: Math.max(0, old.total - 1),
          };
        },
      );

      queryClient.removeQueries({
        queryKey: userKeys.detail(id),
      });

      toast.success("User deleted successfully.");
    },
    onError: () => {
      toast.error("Failed to delete user.");
    },
  });
}
