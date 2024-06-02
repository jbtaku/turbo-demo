import { ReactNode } from "react";
import { Dialog, DialogOverlay, DialogPortal } from "../ui/dialog";
import { LoadingSpinner } from "./LoadingSpinner";

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  backgroundColor?: string;
  spinnerSize?: number;
  spinnerClass?: string;
}

function PendingDialog({
  isOpen,
  children,
  backgroundColor,
  spinnerSize,
  spinnerClass,
}: Props) {
  return (
    <Dialog open={isOpen}>
      <DialogPortal>
        <DialogOverlay className={backgroundColor ?? "bg-white/70"} />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]">
          {children ?? (
            <LoadingSpinner
              size={spinnerSize ?? 100}
              className={spinnerClass}
            />
          )}
        </div>
      </DialogPortal>
    </Dialog>
  );
}

export default PendingDialog;
