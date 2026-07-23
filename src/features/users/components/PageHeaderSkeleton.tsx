import { Skeleton } from "@/shared/components";

export default function PageHeaderSkeleton() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <Skeleton className="mb-3 h-8 w-64" />
        <Skeleton className="h-4 w-36" />
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="h-11 w-72" />
        <Skeleton className="h-11 w-32" />
      </div>
    </div>
  );
}
