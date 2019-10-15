import React from 'react';
import {Link} from 'react-router-dom';

function Home(props){
    return (
        <body>
            {!props.theUser && 
                <div>
                    <div className= "landing-page">
                        <div className= "landing-text">
                            <h1> Trip-Packer </h1>
                            <h3> Customizable Lists for Packing your Bags & Prepping your Home </h3>
                        </div>

                        {/* <div className="image-row landing-wrap">
                            <div className="circle-divs">
                            <div className="image-cropper"> 
                                <img className="ergo-circle" src="images/superman_spine.jpg"/>>
                            </div>
                            <p> Ergonomics </p> 
                            </div>
                            <div className="circle-divs">
                            <div className="image-cropper"> 
                                <img className="pressure-points" src="images/Liu-bu-pressure-points.gif"/>> 
                            </div>
                            <p> Pressure-point Massage </p> 
                            </div>
                            <div className="circle-divs">
                            <div className="image-cropper"> 
                                <img className="yoga-type" src="images/deskercise.png"/>> 
                            </div>
                            <p> Stretching </p>
                            </div>
                        </div> */}

                    </div>
                    
                    {/* <div className="img-stripe">
                        <img src="/images/laotzu-1000-miles.jpg"/>
                        <img src="/images/backgrounds/maldives.jpeg"/>
                        <img src="/images/backgrounds/kyoto-yakasa-pagoda.jpg"/>
                        <img src="/images/backgrounds/Torii-Gate1.jpg"/>
                        <img src="/images/backgrounds/Fushimi Inari1.jpg"/>
                        <img src="/images/backgrounds/broken-bay.jpg"/>
                    </div> */}

                    {/* <div> <img src="/images/laotzu-1000-miles.jpg"/> </div> */}

                </div>
            }

            {props.theUser && 
                <span>
                    <Link to="/trips" style={{ textDecoration: 'none', color: '#00B7FF', margin: '10px' }}> To begin, visit the My Trips page </Link>
                </span>
            }
        </body>
    )
}

export default Home;