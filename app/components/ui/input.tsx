/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, placeholder, ...props }, ref) => {
        return (
            <input
                type={type}
                className={`py-3 px-5 border-[1px] border-[#211D1D] rounded-[10px] font-light placeholder:text-sm  placeholder:text-[#D9D9D9] w-full outline-none pe-2 text-base ${className}`}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;
