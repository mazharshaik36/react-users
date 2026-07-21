import { useQuery } from "@tanstack/react-query";

import { getUserById } from "@/features/users/api";
import { userKeys } from "@/features/users/constants";

export function useUser(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
}
