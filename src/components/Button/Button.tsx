import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
