import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userApi";

export const useUsers = (
  page: number,
  search: string
) => {
  return useQuery({
    queryKey: ["users", page, search],
    queryFn: () => getUsers(page, search),
    placeholderData: (previousData) => previousData,
  });
};