import { type SortState } from "@/features/users/types/table";
import { type User } from "@/features/users/types/user";

const getSortValue = (user: User, field: string): string | number => {
  switch (field) {
    case "name":
      return `${user.firstName} ${user.lastName}`;

    case "email":
      return user.email;

    case "age":
      return user.age;

    default:
      return "";
  }
};

export function sortUsers(users: User[], sort: SortState): User[] {
  return [...users].sort((a, b) => {
    const first = getSortValue(a, sort.field);
    const second = getSortValue(b, sort.field);

    if (typeof first === "string" && typeof second === "string") {
      return sort.direction === "asc" ? first.localeCompare(second) : second.localeCompare(first);
    }

    if (typeof first === "number" && typeof second === "number") {
      return sort.direction === "asc" ? first - second : second - first;
    }

    return 0;
  });
}
