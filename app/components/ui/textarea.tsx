/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, placeholder, ...props }, ref) => {
        return (
            <textarea
                className={`w-full min-h-28 rounded-md resize-none p-3 placeholder:font-light placeholder:text-[#D9D9D9] placeholder:text-sm border-[1px] border-[#211D1D]  outline-none pe-4 shadow-sm text-base ${className}`}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        );
    }
);

TextArea.displayName = "TextArea";

export default TextArea;
