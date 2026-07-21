import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/features/users/api/userApi";

export default function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
}
