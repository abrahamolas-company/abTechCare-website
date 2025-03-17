import * as React from "react"
import { ButtonLoader } from "../Loader/ComponentLoader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnIcon?: React.ReactElement;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, type, btnIcon, ...props }, ref) => {
        return (
            <button
                type={type}
                className={`bg-[#FFCC29] font-medium mb-1 flex items-center justify-center mx-auto text-sm rounded-lg text-[#211D1D] py-3 min-w-[200px] transition-all ease-in-out duration-300 border border-[#FFCC29]  hover:text-[#211D1D] ${className}`}
                ref={ref}
                {...props}
            >
                {btnIcon && <span>{btnIcon}</span>}
                {props.disabled && <ButtonLoader />}
                {props.children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
