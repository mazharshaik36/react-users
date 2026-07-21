import { apiClient } from "@/shared/api";

import { type User, type UsersResponse } from "@/features/users/types/user";
import { PAGE_SIZE } from "@/features/users/constants";

export async function getUsers(page: number, search: string): Promise<UsersResponse> {
  const skip = (page - 1) * PAGE_SIZE;

  const endpoint = search ? "/users/search" : "/users";

  const { data } = await apiClient.get<UsersResponse>(endpoint, {
    params: {
      limit: PAGE_SIZE,
      skip,
      ...(search && { q: search }),
    },
  });

  return data;
}

export async function getUserById(id: string): Promise<User> {
  const { data } = await apiClient.get<User>(`/users/${id}`);

  return data;
}
