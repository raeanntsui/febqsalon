import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div className="bg-gray-300">
        <h1>Clickable Links here</h1>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </>
  );
}
