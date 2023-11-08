import { FC } from "react";

export interface InputProps {
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  placeholder = "Describe your product...",
}) => {
  return (
    <input
      className="rounded-lg outline-none p-4 w-full bg-[#131315] text-zinc-400"
      placeholder={placeholder}
    />
  );
};
