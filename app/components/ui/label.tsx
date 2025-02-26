/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, htmlFor, ...props }, ref) => {
        return (
            <label
                htmlFor={htmlFor}
                className={`text-base font-light text-[#211D1D] ${className}`}
                {...props}
                {...ref}
            />
        );
    }
);

Label.displayName = "Label";

export default Label;
