import { apiClient } from "@/shared/api";

import { PAGE_SIZE } from "@/features/users/constants";
import { type User, type UsersResponse } from "@/features/users/types";
import { type UserFormData } from "@/features/users/schemas";

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

export async function createUser(user: UserFormData): Promise<User> {
  const { data } = await apiClient.post<User>("/users/add", user);

  return data;
}

export async function updateUser(id: string, user: UserFormData): Promise<User> {
  const { data } = await apiClient.put<User>(`/users/${id}`, user);

  return data;
}
