import { useState } from "react";
import { useEffect } from "react";

import { useUsers } from "../hooks/useUsers";

import { UsersTable, Pagination, PageHeader } from "@features/users/components";
import { type SortState } from "../types/table";
import useDebounce from "../hooks/useDebounce";

const PAGE_SIZE = 10;

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
const [sort, setSort] = useState<SortState>({
  field: "name",
  direction: "asc",
});
  const debouncedSearch = useDebounce(search, 500);
  const handleSort = (field: string) => {
  setSort((previous) => ({
    field,
    direction:
      previous.field === field && previous.direction === "asc"
        ? "desc"
        : "asc",
  }));
};

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const { data, isLoading, isError } = useUsers(page, debouncedSearch);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading users.</div>;
  console.log(sort);
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-8 shadow-lg">

        <PageHeader
          totalUsers={data?.total ?? 0}
          search={search}
          onSearch={setSearch}
        />

        <UsersTable
          users={data?.users ?? []}
          sort={sort}
          onSort={handleSort}
        />

        <Pagination
          page={page}
          totalPages={Math.ceil((data?.total ?? 0) / PAGE_SIZE)}
          onChange={setPage}
        />

      </div>
    </div>
  );
}