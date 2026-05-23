import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={onCancel}
    >
      <div className="confirm-dialog">
        <p>{message}</p>

        <div className="confirm-actions">
          <Button
            variant="secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
}