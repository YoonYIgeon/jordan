import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-[#FF3B49] text-black border-1 border-black w-full h-10",
        "text-center text-[24px] font-black",
        props.className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
