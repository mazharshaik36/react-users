import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useDebounce, useUsers } from "@/features/users/hooks";
import { sortUsers } from "@/features/users/utils";
import type { SortState } from "@/features/users/types";

const PAGE_SIZE = 10;

export function useUserManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");

  const search = searchParams.get("search") ?? "";

  const [sortField, sortDirection] = [
    searchParams.get("sort") ?? "name",
    searchParams.get("direction") ?? "asc",
  ];

  const sort = useMemo<SortState>(
    () => ({
      field: sortField as SortState["field"],
      direction: sortDirection as SortState["direction"],
    }),
    [sortField, sortDirection],
  );
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isError, refetch } = useUsers(page, debouncedSearch);
  const sortedUsers = useMemo(() => {
    return sortUsers(data?.users ?? [], sort);
  }, [data?.users, sort]);

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page.toString());

    setSearchParams(params);
  };

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    setSearchParams(params);
  };

  const handleSort = (field: SortState["field"]) => {
    const params = new URLSearchParams(searchParams);

    const nextDirection = sort.field === field && sort.direction === "asc" ? "desc" : "asc";

    params.set("sort", field);
    params.set("direction", nextDirection);

    setSearchParams(params);
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
    refetch,

    totalPages,
  };
}
