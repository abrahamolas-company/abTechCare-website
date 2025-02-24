/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, placeholder, ...props }, ref) => {
        return (
            <input
                type={type}
                className={`p-3 border-[1px] border-ga-green rounded-xl font-light placeholder:text-sm w-full outline-none pe-4 text-base ${className}`}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;
