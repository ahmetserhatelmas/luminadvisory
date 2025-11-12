import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string };
export function Button({ className = "", ...props }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 bg-gray-900 text-white hover:opacity-90 transition shadow ${className}`}
      {...props}
    />
  );
}
export default Button;
