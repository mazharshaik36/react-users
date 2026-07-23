import PageHeaderSkeleton from "@/features/users/components/PageHeaderSkeleton";
import PaginationSkeleton from "@/features/users/components/PaginationSkeleton";
import UsersTableSkeleton from "@/features/users/components/UsersTableSkeleton";

export default function UsersPageSkeleton() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-8 shadow-lg">
        <PageHeaderSkeleton />

        <UsersTableSkeleton />

        <PaginationSkeleton />
      </div>
    </div>
  );
}
