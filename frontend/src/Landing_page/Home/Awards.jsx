import React from 'react';
import largestBroker from '../../assets/media/images/largestBroker.svg'
import PressLogo from'../../assets/media/images/pressLogos.png'
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={largestBroker} />
                </div>
                <div className="col-6 p-5 mt-4">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all reatil order volumes in india daily by  trading and investing in:</p>
                     <div className="row">
                        <div className="col-6 "><ul>
                        <li>
                            <p>Futures and options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>currency derivatives</p>
                        </li>
                     </ul>
                     </div>
                        <div className="col-6 "><ul>
                        <li>
                            <p>Stocks and IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt.Securities</p>
                        </li>
                     </ul>
                     </div>
                     
                     </div>
                     <img src={PressLogo} alt='Presslogo' style={{width:"90%"}}/>
                    
                    
                </div>
            </div>
        </div>
      
     );
}

export default Awards;