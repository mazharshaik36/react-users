import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteUser } from "@/features/users/api";
import { userKeys } from "@/features/users/constants";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteUser(id),

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: userKeys.all,
      });

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
