import React, { Fragment } from 'react';

const App = () => { 

    
    return (
        <Fragment>
            <header className="main__header">

                <div className="logo__icon">
                    <svg className="hamburger__icon" width="2500" height="2246" viewBox="0 0 256 230" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z" fill="#FFF"/><path d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z" fill="#53C1DE"/><path d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z" fill="#FFF"/><path d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177" fill="#53C1DE"/></svg>
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


            <main className="main-container__bg">

                <div className="add-wrapper">


                    <section className="main-card">

                        <div className="city-search-wrapper">

                            <div className="city-search-header">
                            <h3 className="city-search-title">SEARCH CITIES</h3>
                            <div className="search-city-input-wrapper">
                                <input className="search-city-input" auto-complete-placeholder="search city" placeholder="search city"/>

                                <button className="search-city-btn">
                                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451">
                                    <path fill="#FFF"
                                        d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"></path>
                                </svg>
                                </button>
                            </div>
                           
                            </div>

                            <div className="city-search-body">
                                
                            </div>

                        </div>



                        <div className="fav-city-wrapper">








                            {/* <div className="fav-city-image-overlay"></div>

                            <div className="fav-city-header">
                            <h3 className="fav-city-title">CITY OF THE MONTH</h3>
                            <hr className="fav-city-hr" />
                            <span className="fav-city-date">Sunday, 31th July</span>
                            </div>

                            <div className="fav-city-body">
                            <div className="fav-city-body-subwrapper">

                                

                                <div className="fav-city-info">
                                <span className="fav-city-temp"></span>
                                <div className="fav-city-name-wrapper"><span className="fav-city-name">ROME</span><span
                                    className="fav-city-country"></span></div>
                                <span className="fav-city-state"></span>
                                </div>
                                <button className="fav-city-add-btn"></button>
                            </div>
                            </div> */}

                        </div>


                    </section>
                </div>

            </main>
        </Fragment>
    )
}

export default App;









/* Icon weather */

/*
<div className="fav-weather-icon" >
          <svg viewBox="2436.9 -843.1 275.5 274.1">
            <g data-name="cloudy icon" transform="translate(84 790)">
              <circle cx="137" cy="137" r="137" fill="#fff" data-name="Ellipse 23"
                      transform="translate(2354 -1633)"/>
              <path fill="#ffde17"
                    d="M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z"
                    data-name="Subtraction 1"/>
            </g>
          </svg>
          <svg viewBox="3170 -843.1 163.5 242.7">
            <g data-name="Rain Icon">
              <g data-name="Water Drops">
                <path fill="#0032cc" d="M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z" data-name="Path 7"/>
                <path fill="#003eff" d="M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z" data-name="Path 3"/>
              </g>
            </g>
          </svg>
          <svg viewBox="3487.9 -810.7 291.2 200.3">
            <g data-name="Strom icon" transform="translate(1959 -1260.7)">
              <ellipse cx="55.3" cy="51.7" className="cls-1" data-name="Ellipse 14" rx="55.3" ry="51.7"
                       transform="translate(1529 490.4)"/>
              <ellipse cx="55.3" cy="51.7" className="cls-1" data-name="Ellipse 15" rx="55.3" ry="51.7"
                       transform="translate(1569.6 467.8)"/>
              <circle cx="55.3" cy="55.3" r="55.3" className="cls-1" data-name="Ellipse 16"
                      transform="translate(1618.9 476.8)"/>
              <ellipse cx="55.3" cy="51.7" className="cls-1" data-name="Ellipse 17" rx="55.3" ry="51.7"
                       transform="translate(1631.8 450)"/>
              <ellipse cx="55.3" cy="51.7" className="cls-1" data-name="Ellipse 18" rx="55.3" ry="51.7"
                       transform="translate(1687.1 477.5)"/>
              <ellipse cx="55.3" cy="51.7" className="cls-1" data-name="Ellipse 19" rx="55.3" ry="51.7"
                       transform="translate(1709.6 507.3)"/>
              <circle cx="55.3" cy="55.3" r="55.3" className="cls-1" data-name="Ellipse 20"
                      transform="translate(1639.6 500.1)"/>
              <ellipse cx="55.3" cy="51.7" className="cls-1" data-name="Ellipse 21" rx="55.3" ry="51.7"
                       transform="translate(1569.6 507.3)"/>
              <path fill="none" stroke="#fd0" strokeWidth="18"
                    d="M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2" data-name="Path 59"/>
              <path fill="none" stroke="#fd0" strokeWidth="15" d="M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2"
                    data-name="Path 60"/>
            </g>
          </svg>
          <svg viewBox="2050 -845 262 262">
            <circle cx="131" cy="131" r="131" fill="#ffde17" data-name="Sun Icon" transform="translate(2050 -845)"/>
          </svg>
          <svg viewBox="0 0 454 366">
            <path fill="#12bcff"
                  d="M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z"/>
          </svg>
        </div>
        */


