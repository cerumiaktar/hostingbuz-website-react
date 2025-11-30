import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    const {name} = feature
    return (
        <div className='flex items-start gap-3 space-y-6'>
            <span className='text-[#100B94]'><FaCheckCircle /></span>
            <h1>{name}</h1>
        </div>
    );
};

export default Feature;