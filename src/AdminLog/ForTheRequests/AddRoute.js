import React, { Component } from 'react'
import "../Admin.css";
import home from './home.png'
import Options from '../Options';
import axios from 'axios'
import swal from 'sweetalert'

class AddRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            rout: "",
            place: "",
            routeStand: "",
            home: false,
            inserIntoCollectionRoute: []
        }
    }
    onclickHandler(e) {
        e.preventDefault();
        var add = {
            route: this.state.rout,
            places: this.state.place.split(", ")
        }
        var placeWithRoute = {
            routePlace: this.state.city,
            routes: this.state.rout
        }

        if (this.state.city !== "" && this.state.rout !== "" && this.state.place !== "") {
            axios.post('http://localhost:3000/jeepme/createplaces', placeWithRoute)
                .then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            axios.post('http://localhost:3000/jeepme/createroute', add)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    return err
                })
            swal({
                icon: "success",
                title: "Route successfully added",
                text: "Check the retrieve all to see the values that you've entered!"
            })
        } else {
            swal({
                icon: "error",
                text: "Complete all fields!"
            })
        }

        this.setState({
            rout: '',
            place: ''
        });

    }

    onclickTry() {
        this.setState({ home: true })
    }
    render() {
        if (!this.state.home) {
            return (
                <div>
                    <div>
                        <img src={home} alt="Smiley face" onClick={(e) => this.onclickTry(e)} />
                    </div>
                    <center>
                        <div className="AddRoute">
                            <h1>What place?</h1><br></br>
                            <input autoComplete="off" placeholder="Place" type="text" className="w3-input w3-border" id="barangay" onChange={(e) => this.setState({ city: e.target.value })}></input><br></br>
                            <input autoComplete="off" placeholder="Route" type="text" className="w3-input w3-border" id="barangay" onChange={(e) => this.setState({ rout: e.target.value })}></input><br></br>
                            <input autoComplete="off" placeholder="Sub-Places" className="w3-input w3-border" id="barangay" onChange={(e) => this.setState({ place: e.target.value })}></input><br></br>

                            <button id="addButton" onClick={(e) => this.onclickHandler(e)}>Submit</button><br></br>
                        </div>
                    </center>
                </div>
            )
        } else {
            return (
                <Options></Options>
            )
        }
    }
}
export default AddRoute;