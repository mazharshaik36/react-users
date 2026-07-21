import { type User } from "@/features/users/types/user";

export const SORT_ACCESSORS = {
  name: (user: User) => `${user.firstName} ${user.lastName}`,
  email: (user: User) => user.email,
  age: (user: User) => user.age,
} as const;
