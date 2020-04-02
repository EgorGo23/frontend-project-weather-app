import React from 'react';
import Cloud from './Cloud';

const Canvas = () => {
    return (
        <svg className='canvas'>
            <svg className="waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 25 150 28"
                preserveAspectRatio="none">
                <defs>
                    <path 
                        id="gentle-wave"
                        d="m -150,44.4 c 30,0 58,
                            -18 87.7,-18 30.3,0 58.3,
                            18 87.3,18 30,0 58,-18 88,
                            -18 30,0 58,18 88,18 l 0,
                            34.5 -351,0 z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill="rgb(68,88,129)"/>
                    <use xlinkHref="#gentle-wave" x="50" y="3" fill="rgb(30,42,73)"/>
                    <use xlinkHref="#gentle-wave" x="50" y="6" fill="rgb(37,50,80)"/>  
                </g>
                
            </svg>
        </svg>
        
        
    );
}

export default Canvas;