import { PageHeader, Pagination, UsersTable } from "@features/users/components";
import useUserManagement from "@features/users/hooks/useUserManagement";

export default function UsersPage() {
  const {
    page,
    setPage,
    search,
    handleSearch,
    sort,
    handleSort,
    sortedUsers,
    data,
    totalPages,
    isLoading,
    isError,
  } = useUserManagement();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-8 shadow-lg">
        <PageHeader totalUsers={data?.total ?? 0} search={search} onSearch={handleSearch} />

        <UsersTable users={sortedUsers} sort={sort} onSort={handleSort} />

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
