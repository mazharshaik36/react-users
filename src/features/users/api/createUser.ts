import { apiClient } from "@/shared/api";

import { type UserFormData } from "@/features/users/schemas";

export async function createUser(user: UserFormData) {
  const { data } = await apiClient.post("/users/add", user);

  return data;
}
