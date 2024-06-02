import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { RequireOne } from "@/types/common";

interface Props {
  trigger: ReactNode;
  closeButton?: RequireOne<{ variant?: "none"; element?: React.ReactNode }>;
  children: ReactNode;
  className?: string;
}

function CustomDialog({
  trigger,
  closeButton,
  children,
  className = "",
}: Props) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent closeButton={closeButton}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
