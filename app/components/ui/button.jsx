// File: app/components/ui/button.jsx

"use client"

import React from 'react';

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    disabled = false,
    type = "button",
    ...props
}) => {
    const baseClasses = "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-white text-slate-900 hover:bg-gray-100 focus:ring-white",
        secondary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "border-2 border-white text-white hover:bg-white hover:text-slate-900 focus:ring-white",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;