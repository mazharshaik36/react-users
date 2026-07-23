import { PageHeader, Pagination, UsersPageSkeleton, UsersTable } from "@features/users/components";
import { useUserManagement } from "@/features/users/hooks";
import { ErrorState } from "@/shared/components";

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
    refetch,
  } = useUserManagement();
  if (isLoading && !data) {
    return <UsersPageSkeleton />;
  }

  if (isError) {
    return (
      <ErrorState
        title="Unable to load users"
        description="Please check your internet connection and try again."
        onRetry={() => {
          void refetch();
        }}
      />
    );
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
