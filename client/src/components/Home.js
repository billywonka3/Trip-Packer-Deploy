import React from 'react';

function Home(props){
    return (
        <div>
            <div className= "landing-page">
                <div className= "landing-text">
                    <h2> Travelling is about experiencing new things, and being unprepared can mean missed opportunities. </h2>
                    <h2> Trip-Packer helps you generate a customizable packing checklists to make sure you don’t miss a thing. </h2>
                </div>
                {/* <div >
                    <img src="/images/laoTzu-miles.jpg"/>
                </div> */}
            </div>
            <div className="img-stripe">
                <img src="/images/backgrounds/maldives.jpeg"/>
                <img src="/images/backgrounds/kyoto-yakasa-pagoda.jpg"/>
                <img src="/images/backgrounds/Torii-Gate1.jpg"/>
                <img src="/images/backgrounds/Fushimi Inari1.jpg"/>
                <img src="/images/backgrounds/broken-bay.jpg"/>
            </div>
        </div>
    )
}

export default Home;