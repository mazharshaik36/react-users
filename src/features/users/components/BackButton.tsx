import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-6 flex items-center gap-2 rounded-md px-3 py-2 text-blue-600 transition hover:bg-blue-50"
    >
      <ArrowLeft size={18} />
      Back to Users
    </button>
  );
}