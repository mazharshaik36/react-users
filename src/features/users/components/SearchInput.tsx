type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-72 rounded-lg border border-gray-300 px-4 py-2 shadow-sm outline-none transition focus:border-blue-500"
    />
  );
}