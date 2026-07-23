import { Skeleton } from "@/shared/components";

export default function UsersTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Age</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              </td>

              <td className="px-6 py-4">
                <Skeleton className="h-4 w-52" />
              </td>

              <td className="px-6 py-4">
                <Skeleton className="h-4 w-10" />
              </td>

              <td className="px-6 py-4">
                <Skeleton className="h-4 w-32" />
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
