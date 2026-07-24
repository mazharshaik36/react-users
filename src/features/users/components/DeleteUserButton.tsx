import { useState } from "react";
import { Trash2 } from "lucide-react";

import { ConfirmationModal } from "@/shared/components";

import { useDeleteUser } from "@/features/users/hooks";

type DeleteUserButtonProps = {
  userId: number;
};

export default function DeleteUserButton({ userId }: DeleteUserButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const mutation = useDeleteUser();

  const handleDelete = async () => {
    await mutation.mutateAsync(String(userId));

    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded p-2 text-red-600 transition hover:bg-red-100"
        aria-label="Delete user"
      >
        <Trash2 size={18} />
      </button>

      <ConfirmationModal
        isOpen={isOpen}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        isLoading={mutation.isPending}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => {
          void handleDelete();
        }}
      />
    </>
  );
}
