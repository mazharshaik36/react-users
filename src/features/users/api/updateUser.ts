import { apiClient } from "@/shared/api";

import { type UserFormData } from "@/features/users/schemas";
import { type User } from "@/features/users/types";

export async function updateUser(id: number, user: UserFormData): Promise<User> {
  const { data } = await apiClient.put<User>(`/users/${id}`, user);

  return data;
}
