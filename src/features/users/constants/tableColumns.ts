import type { SortField } from "../types/table";

type SortableColumn = {
  key: SortField;
  label: string;
  sortable: true;
};

type NonSortableColumn = {
  key: "phone" | "actions";
  label: string;
  sortable: false;
};

export const USER_COLUMNS: readonly (SortableColumn | NonSortableColumn)[] = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "age",
    label: "Age",
    sortable: true,
  },
  {
    key: "phone",
    label: "Phone",
    sortable: false,
  },
  {
    key: "actions",
    label: "Actions",
    sortable: false,
  },
];
