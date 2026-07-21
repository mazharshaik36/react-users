import { useMemo, useState } from "react";

import useDebounce from "./useDebounce";
import { useUsers } from "./useUsers";

import { type SortState } from "../types/table";
import { sortUsers } from "@/features/users/utils";

const PAGE_SIZE = 10;

export default function useUserManagement() {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState<SortState>({
    field: "name",
    direction: "asc",
  });

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isError } = useUsers(page, debouncedSearch);

  const sortedUsers = useMemo(() => {
    return sortUsers(data?.users ?? [], sort);
  }, [data?.users, sort]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleSort = (field: SortState["field"]) => {
    setSort((previous) => ({
      field,
      direction: previous.field === field && previous.direction === "asc" ? "desc" : "asc",
    }));
  };
  const totalPages = Math.ceil((data?.total ?? 0) / PAGE_SIZE);

  return {
    page,
    setPage,

    search,
    handleSearch,

    sort,
    handleSort,

    sortedUsers,

    data,

    isLoading,
    isError,

    totalPages,
  };
}
