import React, { Component } from 'react'
import "../Admin.css";
import { Dropdown } from 'semantic-ui-react'
import swal from 'sweetalert'
import home from './home.png'
import Options from '../Options';
import axios from 'axios';

class DeleteRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: [
                { key: 'af', value: 'Barangay', text: 'Barangay' },
                { key: 'ax', value: 'Route', text: 'Route' },
            ],
            choosed: "",
            bar: "",
            pla: "",
            home: false

        }
    }
    exposedCampaignOnChange = (e, { value }) => {
        e.persist = () => { };
        this.setState({ bar: e.target.textContent })
        this.setState({ pla: e.target.textContent })

    }

    OptionChoose = () => (
        <Dropdown
            selection
            options={this.state.option}
            onChange={this.exposedCampaignOnChange}
        />
    )

    onselect(e) {
        e.preventDefault();
        // var params = {
        //     route: this.state.bar,
        //     places: this.state.pla
        // }
        if (this.state.bar === "Barangay") {
            swal({
                title: "What barangay do you want to delete?",
                content: "input"
            }).then((baraDelete) => {
                axios.delete("http://localhost:3000/jeepme/deleteplaces/"+ baraDelete)
                    .then(res => {
                        console.log("inglahos");
                        console.log(res)

                    })
                    .catch(err => {
                        return err
                    })
                swal({
                    icon: "success",
                    title: baraDelete + " deleted successfully"
                })
            })
        }
        if (this.state.pla === "Route") {
            swal({
                title: "What place do you want to delete?",
                content: "input"
            }).then((plaDelete) => {
                axios.delete("http://localhost:3000/jeepme/deleteroute/"+plaDelete)
                    .then(res => {
                        console.log("inglahos");
                        console.log(res)

                    })
                    .catch(err => {
                        return err
                    })
                swal({
                    icon: "success",
                    title: plaDelete + " deleted successfully"
                })
            })
        }
        //  else {
        //     swal({
        //         title: "What route you want to delete?",
        //         content: "input"
        //     }).then((routeDelete) => {
        //         swal({
        //             icon: "success",
        //             title: routeDelete + " deleted successfully"
        //         })
        //     })
        // }

        // axios.delete("http://localhost:3000/jeepme/createroute", params)
        //     .then(res => {
        //         console.log("inglahos");
        //         console.log(res.data)

        //     })
        //     .catch(err => {
        //         return err
        //     })
        this.setState({
            bar: '',
            pla: ''
        });

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
                        <h1>What do you want to delete? (Barangay or Route)</h1><br></br>
                        {this.OptionChoose()}<br></br>
                        <button onClick={(e) => this.onselect(e)}>Select</button>
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
export default DeleteRoute;