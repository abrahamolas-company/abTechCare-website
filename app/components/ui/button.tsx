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
                className={`bg-[#FFCC29] text-white font-medium py-3 px-6 rounded-full hover:bg-ga-green-dark2-foreground hover:text:bg-ga-green-dark2 ${className}`}
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
