import React from 'react';
import cls from './CustomButton.module.css'
import classNames from "classnames";

interface CustomButtonProps {
    onClick?: (arg0?: any) => void;
    children: React.ReactNode;
    className?: string;
    type?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                       onClick,
                                                       children,
                                                       className,
                                                   }) => {
    const buttonClass = classNames(cls.customButton, className);
    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {children}
        </button>
    );
};


export default CustomButton;