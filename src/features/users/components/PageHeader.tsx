import SearchInput from "./SearchInput";
import PrimaryButton from "./PrimaryButton";

type Props = {
  totalUsers: number;
  search: string;
  onSearch: (value: string) => void;
};

export default function PageHeader({
  totalUsers,
  search,
  onSearch,
}: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="text-gray-500">
          {totalUsers} registered users
        </p>
      </div>

      <div className="flex items-center gap-4">
        <SearchInput
          value={search}
          onChange={onSearch}
        />

        <PrimaryButton>
          + Add User
        </PrimaryButton>
      </div>
    </div>
  );
}