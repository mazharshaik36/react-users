import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getUsers } from "@/features/users/api";
import { userKeys } from "@/features/users/constants";

export function useUsers(page: number, search: string) {
  return useQuery({
    queryKey: userKeys.list(page, search),
    queryFn: () => getUsers(page, search),

    placeholderData: keepPreviousData,
  });
}
