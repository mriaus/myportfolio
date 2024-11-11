import React from 'react';

const ChevronDown = () => {
    return (
        <div className="fixed bottom-10 w-full flex justify-center">
            <svg
                className="w-8 h-8 animate-bounce text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
    );
};

export default ChevronDown;