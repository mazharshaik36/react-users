import { PageHeader, Pagination, UsersPageSkeleton, UsersTable } from "@features/users/components";
import { useUserManagement } from "@/features/users/hooks";
import { ErrorState } from "@/shared/components";
import { AppLayout } from "@/shared/layouts";

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
    <AppLayout>
      <PageHeader totalUsers={data?.total ?? 0} search={search} onSearch={handleSearch} />

      <UsersTable users={sortedUsers} sort={sort} onSort={handleSort} />

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </AppLayout>
  );
}
