import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BillDetails from './BillDetails';

const Card = ({ avatar, name, age, gender, billNumber, billDetails, index, expandedIndex, setExpandedIndex }) => {
    const isExpanded = index === expandedIndex;

    const toggleDetails = () => {
        setExpandedIndex(isExpanded ? -1 : index);
    };

    return (
        <div className='flex w-[500px] h-[110px] '  >
            <div
                className={`card rounded-lg shadow-md p-2 max-w-xs ml-5 my-3 flex bg-blue-200 relative ${isExpanded ? 'z-10' : ''} flex w-[500px] `}
            >
                <div>
                    <img className="w-20 h-20 rounded-2xl mr-4" src={avatar} alt="Avatar" />
                </div>
                <div className="flex flex-col cursor-pointer" onClick={toggleDetails}>
                    <h2 className="mb-2">{name}</h2>
                    <div className='flex '>
                        <p className="text-sm mb-1 mr-2">{age},</p>
                        <p className="text-sm mb-1">{gender}</p>
                    </div>
                    <p className="text-sm">Bill Number: {billNumber}</p>
                </div>
            </div>
            {isExpanded && (
                <div className="absolute right-40 top-0 h-[500px] w-[50%]">
                    <BillDetails billDetails={billDetails} />
                </div>
            )}
        </div>
    );
};

export default Card;
