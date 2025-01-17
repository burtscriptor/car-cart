"use client";

import { CustomButtonProps } from '@/types';
import React from 'react';

const CustomButton = ({
    title, 
    containerStyles, 
    handleClick,
    btnType
}: CustomButtonProps) => {
    return (
        <button
            className={`custom-btn ${containerStyles}`} 
            type={btnType || "button"}
            disabled={false} 
            onClick={handleClick} 
        >
            <span className="flex-1">
                {title} 
            </span>
        </button>
    );
}

export default CustomButton;
