import React, { Component } from 'react'
import "../Admin.css";
import { Dropdown } from 'semantic-ui-react'
import swal from 'sweetalert'
import Options from '../Options';
import home from './home.png'
import axios from 'axios'

class DeleteRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: [
                { key: 'af', value: 'Barangay', text: 'Barangay' },
                { key: 'ax', value: 'Route', text: 'Route' },
            ],
            choosed: "",
            home: false

        }
    }
    exposedCampaignOnChange = (e, { value }) => {
        e.persist = () => { };
        this.setState({ choosed: e.target.textContent })
    }

    OptionChoose = () => (
        <Dropdown
            selection
            options={this.state.option}
            onChange={this.exposedCampaignOnChange}
        />
    )

    onselect(e) {
        if (this.state.choosed === "Barangay") {
            swal({
                title: "What barangay do you want to update?",
                content: "input"
            }).then((toUpdate) => {
                swal({
                    title: "Change the " + toUpdate,
                    content: "input"
                }).then((values) => {
                    axios.post("http://localhost:3000/jeepme/updateplaces", { place: toUpdate, newValue: values })
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            return err
                        })
                })
            })
        } else {
            swal({
                title: "What route you want to change?",
                content: "input"
            }).then((toChangeRoute) => {
                swal({
                    title: "Change the " + toChangeRoute,
                    content: "input"
                }).then((values) => {
                    axios.post("http://localhost:3000/jeepme/updateroute", { place: toChangeRoute, newValue: values })
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            return err
                        })
                })
            })
        }
    }
    onclickHome(e) {
        this.setState({ home: true })
    }
    render() {
        if (!this.state.home) {
            return (
                <center>
                    <div>
                        <img src={home} alt="Smiley face" onClick={(e) => this.onclickHome(e)} />
                    </div>
                    <div id="deleteDiv">
                        <h1>What do you want to Change? (Barangay or Route)</h1><br></br>
                        {this.OptionChoose()}
                        <button onClick={(e) => this.onselect(e)}>Select</button>
                    </div>
                </center>
            )
        } else {
            return (
                <Options />
            )
        }
    }
}
export default DeleteRoute;