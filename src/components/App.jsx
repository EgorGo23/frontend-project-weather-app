import React from 'react';
import Canvas from './Canvas';
import Logic from './Logic';

const App = () => {
    fetch('http://api.sypexgeo.net/')
    .then(resp => console.log(resp.body))
    

    return (
        <div className="app night">
            <Logic />
        </div>
    )
}

export default App;