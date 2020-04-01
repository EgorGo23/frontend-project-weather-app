import React, { Fragment } from 'react';

const Cloud = () => {
    return (
        <>
        <defs>
                <filter id="filter" x="0" y="0">
                    <feGaussianBlur stdDeviation=".4"/>
                </filter>

                
        </defs>
        
            <circle cx="200" cy="80" r="50" fill="#4747d1" filter="url(#filter)"/>
            <circle cx="180" cy="120" r="40" fill="#4747d1" filter="url(#filter)"/>
            <circle cx="140" cy="100" r="40" fill="#4747d1" filter="url(#filter)"/>
            <circle cx="230" cy="125" r="30" fill="#4747d1" filter="url(#filter)"/>
            <circle cx="270" cy="115" r="35" fill="#4747d1" filter="url(#filter)"/>
            <circle cx="255" cy="65" r="25" fill="#4747d1" filter="url(#filter)"/>
        </>
    );
}

export default Cloud;