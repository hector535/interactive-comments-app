import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as s from "./modal.typed";

type ModalProps = {
  open?: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ open, children, onClose }: ModalProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.getElementById("overlays");
  }, []);

  if (!open || !ref.current) return null;

  return createPortal(
    <>
      <s.Container>{children}</s.Container>
      <s.Overlay onClick={onClose} />
    </>,
    ref.current
  );
};
