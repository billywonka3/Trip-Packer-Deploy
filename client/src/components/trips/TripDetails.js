import React, { Component } from 'react';
import axios from 'axios';

import './tripdetails.css';

import AddClothing from '../items/AddClothing.js';
import EditClothing from '../items/EditClothing.js';
import AddToiletries from '../items/AddToiletries.js';
import AddElectronics from '../items/AddElectronics.js';

class TripDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            searchCity: "",
            searchCountry: "",
            latitude: "",
            longitude: "",
            forecast: ""
        }
    }
          
    handleChangeCity = (event) => {
        event.preventDefault();
        // console.log(event)
        // console.log("city is above")
        this.setState({searchCity: event.target.value})
        console.log(this.state.searchCity)
        this.getLatLong()
        this.getForecast()

    }
    handleChangeCountry = (event) => {
        event.preventDefault();
        // console.log(event)
        // console.log("country is above")
        this.setState({searchCountry: event.target.value})
        console.log(this.state.searchCountry)
        this.getLatLong()
        this.getForecast()
    }
    
    getLatLong = ()=>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchCity},+${this.state.searchCountry}&key=`)
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=Paris,+France&key=`)
            .then((response) =>{
                console.log("All the data", response);
                this.setState({latitude: response.data.results[0].geometry.location.lat})
                // console.log(this.state.latitude)
                this.setState({longitude: response.data.results[0].geometry.location.lng})
                // console.log(this.state.longitude)
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    getForecast = ()=>{
        axios.get(`https://darksky.net/widget/default/${this.state.latitude},${this.state.longitude}/us12/en.js`)
        // axios.get(`https://darksky.net/widget/default/25.7743,-80.1937/us12/en.js`)
            .then((response) =>{
                
                // console.log("Darksky Widget", response);
                this.setState({forecast: `https://darksky.net/widget/default/${this.state.latitude},${this.state.longitude}/us12/en.js`})
                // console.log(`https://darksky.net/widget/default/${this.state.latitude},${this.state.longitude}/us12/en?domain=&quot;+encodeURIComponent(window.location.href)+&quot;&amp;auth=1565285343_4a83196ed81f764cbec954f01ac0b1c8&amp;`)
                console.log(this.state.forecast)
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    componentDidMount() {
        this.getLatLong()
        this.getForecast()

        const script = document.createElement("script");
        script.src = `https://darksky.net/widget/default/${this.state.latitude},${this.state.longitude}/us12/en.js`
        script.async = true;
        document.body.appendChild(script);
    }

    resetEdit = () =>{
        this.setState({editing: false})
    }
    edit = (whichNumber) =>{
        this.setState({editing: whichNumber})
    }

    deleteClothing = (theID) =>{
        axios.delete('http://localhost:5000/api/clothing/'+theID)
        .then(()=>{
            this.props.getData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    deleteToiletries = (theID) =>{
        axios.delete('http://localhost:5000/api/toiletries/'+theID)
        .then(()=>{
            this.props.getData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    deleteElectronics = (theID) =>{
        axios.delete('http://localhost:5000/api/electronics/'+theID)
        .then(() =>{
            this.props.getData();
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    render(){
        const allTheTrips = this.props.allTheTrips;
        const theID = this.props.match.params.theID;

        const theActualTrip = allTheTrips.find((eachTrip)=>{
            return eachTrip._id === theID
        })

        const showCoordinates  = () =>{
            return(
                <div className= "coordinates">
                    <p>Latitude  : {this.state.latitude}</p>
                    <p>Longitude : {this.state.longitude}</p>
                </div>
            )
        }

        // const showForecast = () => {    
        //     return(
        //         <div>
        //             {this.getForecast()}
        //         </div>
        //     )
        // }

        const showClothing = () =>{
            return theActualTrip.clothing.map((eachClothing, index)=>{
                // console.log(eachClothing)
                if(this.state.editing !== index)
                    return ( <li key={eachClothing._id}>
                                <h4>{eachClothing.category}</h4>
                                <p>{eachClothing.name}</p>
                                <button onClick = {()=>{this.edit(index)}}>Edit</button>
                                <button onClick = {()=>{this.deleteClothing(eachClothing._id)}}>Delete</button>
                            </li>
                    )
                else
                    return(
                        <EditClothing
                            theClothing ={eachClothing}
                            getAllTheTripsInAppJS = {this.props.getData}
                            resetEditingSituation = {this.resetEdit}
                        />
                    )
            })  
        }

        const showToiletries = () =>{
            return theActualTrip.toiletries.map((eachToiletries)=>{
                // console.log(eachToiletries)
                return ( <li key={eachToiletries._id} >
                            <div className="list-and-btn">
                                <div>
                                    <p>{eachToiletries.name}</p>
                                </div>
                                <p>
                                    <button className="delete-btn" onClick = {()=>{this.deleteToiletries(eachToiletries._id)}}>Delete</button>
                                </p>
                            </div>
                        </li>
                )
            })  
        }

        const showElectronics = () =>{
            return theActualTrip.electronics.map((eachElectronics)=>{
                // console.log(eachElectronics)
                return ( <li key={eachElectronics._id}>
                            <div className="list-and-btn">
                                <div>
                                    <p>{eachElectronics.name}</p>
                                </div>
                                <p>
                                    <button className="delete-btn" onClick = {()=>{this.deleteElectronics(eachElectronics._id)}}>Delete</button>
                                </p>
                            </div>
                        </li>
                )
            })  
        }

        const showWidget = () => {
            return(
                <iframe 
                    height= "600px"
                    width="600px"
                    src={this.state.forecast}>
                </iframe>
            )
        }


        if(this.props.ready)
            return(
                <div style={{paddingTop: '20px'}}>

                    <div className="center">
                        <div className= "trip-details">
                            <span>
                                <h2> {theActualTrip.title} </h2>
                                <h5> {theActualTrip.description} </h5>
                            </span>
                        </div>
                    </div>
                    <div className="center">
                        <div className="loc-form-div">
                            <form id="location-form">
                                <input type="text" id="location-input" className="form-control form-control-lg" onChange={this.handleChangeCity} value={this.state.searchCity} placeholder="Enter City"/>
                                <br/>
                                <input type="text" id="location-input" className="form-control form-control-lg" onChange={this.handleChangeCountry} value={this.state.searchCountry}  placeholder="Enter Country"/>
                                {/* <br/>
                                <button onClick = {()=>{this.getLatLong()}}
                                        className="btn btn-primary btn-block">Submit</button> */}
                            </form>
                        </div>
                        {showCoordinates()}
                    </div>

                    <hr />

                    <div>
                        <div className="container weather-bar">

                            {showWidget()}
        
                        </div>
                    </div>

                    <hr />

                    <div className="item-columns">
                        <div className= "clothing">
                            <h3>Clothing</h3>
                            <div>
                                <hr />
                                {theActualTrip.clothing.length > 0 && 
                                    <ul className= "list-format">
                                        {showClothing()}
                                    </ul>                           
                                }
                                <hr /> 
                            </div>     
                            <div className="add-item"> 
                                <AddClothing 
                                    theTripToAddClothingTo = {theActualTrip._id} 
                                    getData = {this.props.getData}
                                />
                            </div>
                        </div>

                        <div className= "toiletries">
                            <h3>Toiletries</h3>
                            <div>
                                <hr />
                                {theActualTrip.toiletries.length > 0 && 
                                    <ul>
                                        {showToiletries()}
                                    </ul>                           
                                }
                                <hr /> 
                            </div>
                            <div className= "add-item">
                                <AddToiletries 
                                    theTripToAddToiletriesTo = {theActualTrip._id} 
                                    getData = {this.props.getData}
                                />
                            </div>
                        </div>

                        <div className= "electronics">
                            <h3>Electronics</h3>
                            <div>
                                <hr /> 
                                {theActualTrip.electronics.length > 0 && 
                                    <ul>
                                        {showElectronics()}
                                    </ul>                           
                                }
                                <hr /> 
                            </div> 
                            <div className= "add-item">
                                <AddElectronics 
                                    theTripToAddElectronicsTo = {theActualTrip._id} 
                                    getData = {this.props.getData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        else // Loading Icon & Msg
            return(<h3>Loading...</h3>)
    }
}


export default TripDetails;