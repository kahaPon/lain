import React, { Component } from 'react'
import home from './home.png'
import Options from '../Options';
import axios from 'axios'
import swal from 'sweetalert'
// import { Modal } from 'semantic-ui-react';

class Retrieve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            ret: []
        }
    }
    onclickHome(e) {
        this.setState({ home: true })
    }
    retreiveAll() {
        var jeepR = []
        axios.get('http://localhost:3000/jeepme/retrieveAll').then(response => {
            var dataT = response.data;
            var counter = 0;
            for (counter; counter < dataT.length; counter++) {
                jeepR.push({
                    route: dataT[counter].route,
                    places: dataT[counter].places,
                    
                });
            }
            jeepR.forEach(val => {
                console.log(val.route + " = " +val.places)
               swal("Cebu City Routes",val.route + " = " +val.places, "success")
            });
        })
            .catch(error => {
                console.log(error);
            });

    }
    render() {
        if (!this.state.home) {
            return (
                <center>
                    <div>
                        <img src={home} alt="Smiley face" onClick={(e) => this.onclickHome(e)} />
                    </div>
                    <div id="simdash">
                        <h1>Click the button to retrieve all data</h1>
                        <button onClick={this.retreiveAll}>Click here!</button>

                    </div>
                </center>
            )
        } else {
            return (
                <Options></Options>
            )
        }
    }
}
export default Retrieve;