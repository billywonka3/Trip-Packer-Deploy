import React, { Component } from 'react';
import axios from 'axios';
// import ReactWeather from 'react-open-weather';

import 'react-open-weather/lib/css/ReactWeather.css';
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
            forecast: [],
        }
    }
          
    handleChangeCity = (event) => {
        this.setState({searchCity: event.target.value})
    }
    handleChangeCountry = (event) => {
        this.setState({searchCountry: event.target.value})
    }
    getForecast = ()=>{
        axios.get(`https://openweathermap.org/data/2.5/forecast?q=${this.state.searchCity},${this.state.searchCountry}&appid=b6907d289e10d714a6e88b30761fae22`)
        .then((response) =>{
            for (let i = 0; i < 40; i+= 8) {
                console.log("5 Days of Data", response.data.list[i])
                this.setstate.
            }
            console.log("All the data", response.data);
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    componentDidMount() {
        this.getForecast()
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

        const showClothing = () =>{
            return theActualTrip.clothing.map((eachClothing, index)=>{
                // console.log(eachClothing)
                if(this.state.editing !== index)
                    return ( <li key={eachClothing._id}>
                                <h4>{eachClothing.category}</h4>
                                <h6>{eachClothing.name}</h6>
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
                return ( <li key={eachToiletries._id}>
                            <span className="list-row">
                                <h6>{eachToiletries.name}</h6>
                                <button onClick = {()=>{this.deleteToiletries(eachToiletries._id)}}>Delete</button>
                            </span>
                        </li>
                )
            })  
        }

        const showElectronics = () =>{
            return theActualTrip.electronics.map((eachElectronics)=>{
                // console.log(eachElectronics)
                return ( <li key={eachElectronics._id}>
                            <h6>{eachElectronics.name}</h6>
                            <button onClick = {()=>{this.deleteElectronics(eachElectronics._id)}}>Delete</button>
                        </li>
                )
            })  
        }

        const showForecast = () => {
            return 
        }

        if(this.props.ready)
            return(
                <div style={{paddingTop: '20px'}}>
                    <div className="center">
                        <div className = "trip-details">
                            <span>
                                <h2> {theActualTrip.title} </h2>
                                <h5> {theActualTrip.description} </h5>
                            </span>
                        </div>
                        <div className="loc-form-div">
                            <form id="location-form">
                                <input type="text" id="location-input" className="form-control form-control-lg" onChange={this.handleChangeCity} value={this.state.searchCity} placeholder="Enter City"/>
                                <br/>
                                <input type="text" id="location-input" className="form-control form-control-lg" onChange={this.handleChangeCountry} value={this.state.searchCountry}  placeholder="Enter Country"/>
                                <br/>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <div className="container weather-bar">

                            {/* <ReactWeather 
                                forecast="5days"
                                apikey="b6907d289e10d714a6e88b30761fae22"
                                type="city"
                                city={this.state.searchTerm}
                            /> */}
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