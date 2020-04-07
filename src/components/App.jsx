import React from 'react';
import Canvas from './Canvas';
import Logic from './Logic';

const App = () => { 

    const fill = '#594e78';
    const style = {
        fill,
    }
    return (
        <div className="root__container">
            <header className="main__header">

                <div className="left__section">

                    <svg class="hamburger__icon" id="Menu_Burger_Icon" data-name="Menu Burger Icon"
                            viewBox="31.5 30 49.9 32">
                        <defs>
                        <style>
                            .cls-1 {
                                'fill': 'none';
                                stroke-linecap: round;
                                stroke-miterlimit: 10;
                                stroke-width:15px
                            }
                        </style>
                        </defs>
                        <rect id="Rectangle_9" width="49.9" height="4"
                            class="hamburger__icon__fill" data-name="Rectangle 9" rx="2"
                            transform="translate(31.5 58)"></rect>
                        <rect id="Rectangle_10" width="49.9" height="4"
                            class="hamburger__icon__fill" data-name="Rectangle 10" rx="2"
                            transform="translate(31.5 44)"></rect>
                        <rect id="Rectangle_11" width="49.9" height="4"
                            class="hamburger__icon__fill" data-name="Rectangle 11" rx="2"
                            transform="translate(31.5 30)"></rect>
                    </svg>

                </div>

            </header>


            <main className="main__container">

            </main>
        </div>
    )
}

export default App;