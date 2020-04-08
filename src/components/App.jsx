import React from 'react';

const App = () => { 

   

    return (
        <div className="app__container">
            <header className="main__header">

                <div className="logo__icon">
                    <img className="hamburger__icon" src="../../react.svg" />
                    <span className="logo__text">Weather App</span>
                </div>

                <h3 className="date__text">Today</h3>

                <div className="mode-toggle__container">
                    <span className="mode-toggle__text">Light</span>

                    <label className="toggle-button__container">
                        <input type="checkbox" className="mode-toggle__input"/>
                        <span className="mode-toggle__bg"></span>
                        <span className="mode-toggle__circle"></span>
                    </label>

                    <span className="mode-toggle__text">Dark</span>
                </div>

            </header>











            <main className="main__container__bg">

            </main>
        </div>
    )
}

export default App;