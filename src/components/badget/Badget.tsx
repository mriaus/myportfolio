import React from 'react';

interface BadgeProps {
    name: string;
    color: string;
}

const Badge: React.FC<BadgeProps> = ({ name, color }) => {

    return (
        <span
            key={name}
            className={`inline-flex items-center px-3 py-1 text-sm font-medium text-white rounded-full ${color} border-2 border-orange-400`}>
            {name}
        </span >

    );
}

export default Badge;