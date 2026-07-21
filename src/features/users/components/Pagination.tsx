type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  onChange,
}: Props) {
  return (
    <div className="mt-8 flex items-center justify-between">

      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="rounded-lg bg-slate-800 px-5 py-2 text-white disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-medium">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}