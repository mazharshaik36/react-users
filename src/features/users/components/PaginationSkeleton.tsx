import { Skeleton } from "@/shared/components";

export default function PaginationSkeleton() {
  return (
    <div className="mt-8 flex justify-center gap-2">
      <Skeleton className="h-10 w-24" />

      <Skeleton className="h-10 w-12" />

      <Skeleton className="h-10 w-24" />
    </div>
  );
}
