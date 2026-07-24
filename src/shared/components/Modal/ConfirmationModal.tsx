import Modal from "@/shared/components/Modal/Modal";
import { PrimaryButton } from "@/shared/components/Button";

type ConfirmationModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmationModal({
  isOpen,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  isLoading = false,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onCancel}>
      <p className="mb-6 text-slate-600">{message}</p>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100 disabled:opacity-50"
        >
          {cancelLabel}
        </button>

        <PrimaryButton onClick={onConfirm} disabled={isLoading}>
          {isLoading ? "Please wait..." : confirmLabel}
        </PrimaryButton>
      </div>
    </Modal>
  );
}
