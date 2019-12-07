import React, { Component } from 'react'
import home from './home.png'
import Options from '../Options';
import axios from 'axios'
import swal from 'sweetalert'
import Table from 'react-bootstrap/Table';
import List from './List';

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
    componentDidMount() {
        var jeepR = []
        axios.get('http://localhost:3000/jeepme/retrieveAll')
            .then(response => {
                this.setState({
                    ret: response.data
                });
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

    dataTable() {
        return this.state.ret.map((res, i) => {
            return <List obj={res} key={i} />;
        })
    }
    render() {
        if (!this.state.home) {
            return (
                <center>
                    <div>
                        <img src={home} alt="Smiley face" onClick={(e) => this.onclickHome(e)} />
                    </div>
                    <div className="table-wrapper">
                        <h1>List of Routes</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Places</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </Table>
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