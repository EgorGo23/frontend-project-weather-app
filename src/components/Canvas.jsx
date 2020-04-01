import React from 'react';
import Cloud from './Cloud';

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    
    const rectWidth = 5000;
    const rectHeight = 1200;
    
    const style = {
        
    }

    return (
        <svg viewBox={viewBox} className='night' preserveAspectRatio="xMaxYMax">
            
            <rect x={5000 / -2} y={0} width={5000} height={100} fill="red" />
                
            {/* <Cloud />
            
            <path d="M50 20A40 40 0 1 0 50 70 30 30 0 1 1 50 20z" stroke="black" strokeWidth="5" fill="red"/> */}
        </svg>
            
    );
}

export default Canvas;