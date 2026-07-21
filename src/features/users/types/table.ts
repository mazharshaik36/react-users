export type SortField = "name" | "email" | "age";

export type SortDirection = "asc" | "desc";

export type SortState = {
  field: SortField;
  direction: SortDirection;
};
