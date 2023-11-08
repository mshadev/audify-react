import { FC } from "react";

export interface IButtonProps {
  children?: React.ReactNode;
}

export const Button: FC<IButtonProps> = ({ children }) => {
  return (
    <button className="whitespace-nowrap bg-amber-400 hover:bg-amber-500 align-baseline text-black font-bold p-4 rounded w-max inline-flex active:translate-y-1 cursor-pointer transition-transform">
      {children}
    </button>
  );
};
