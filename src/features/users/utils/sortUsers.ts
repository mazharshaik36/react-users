import { SORT_ACCESSORS } from "@/features/users/constants/sortAccessors";
import { type SortState } from "@/features/users/types/table";
import { type User } from "@/features/users/types/user";

export function sortUsers(users: User[], sort: SortState): User[] {
  const accessor = SORT_ACCESSORS[sort.field];
  if (!accessor) {
    return users;
  }

  return [...users].sort((a, b) => {
    const first = accessor(a);
    const second = accessor(b);

    if (typeof first === "string" && typeof second === "string") {
      return sort.direction === "asc" ? first.localeCompare(second) : second.localeCompare(first);
    }

    if (typeof first === "number" && typeof second === "number") {
      return sort.direction === "asc" ? first - second : second - first;
    }

    return 0;
  });
}
