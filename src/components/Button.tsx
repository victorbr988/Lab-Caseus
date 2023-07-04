import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type: ButtonType;
  disabled?: boolean; 
}

export function Button({ children, onClick, type, disabled }: ButtonProps) {
  return (
    <button 
      className="bg-gray-950 px-6 py-2 hover:brightness-75 transition-all flex gap-2 justify-center items-center rounded text-gray-100"
      onClick={onClick}
      type={type}
      disabled={disabled}
      >
      {children}
    </button>
  );
}