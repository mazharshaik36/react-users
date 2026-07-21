import axios from "axios";

import { type UserFormData } from "@/features/users/schemas/userSchema";

export async function createUser(user: UserFormData) {
  const response = await axios.post("https://dummyjson.com/users/add", user);

  return response.data;
}
