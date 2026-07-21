export const userKeys = {
  all: ["users"] as const,

  lists: () => [...userKeys.all, "list"] as const,

  list: (page: number, search: string) => [...userKeys.lists(), page, search] as const,

  details: () => [...userKeys.all, "detail"] as const,

  detail: (id: string) => [...userKeys.details(), id] as const,
};
