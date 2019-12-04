import React, { Component } from 'react';
import "./Admin.css";
import Options from './Options';
import swal from 'sweetalert';
// import req from "../helper/api";
import axios from 'axios';
// import api from './helper/api';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            situation: false

        }
    }

    componentsDidMount() {
        var api = require('./helper/api');
        axios.get(api)
        // console.log("sdgdsgdheg")
        .then(response => {
            this.setState({username: response.data.data, password: response.data.data})
            console.log("sdgg");
        })
    }

    handleClick(event) {
        var apiBaseUrl = "/admindata";
        // var self = this;
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        }

        try {
            const response =  axios.post('http://demo0725191.mockable.io/post_data', { posted_data: 'example' });
            console.log('👉 Returned data:', response);
          } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
          }
        
    //     axios.get(apiBaseUrl, payload)
    //         .then(function (response) {
    //             console.log(response);
    //             if(response.data){
    //                 console.log("fsadf")
    //             }
    //             if (response.data.code === 200) {
    //                 console.log("Login successfull");
    //                 // var uploadScreen = [];
    //                 // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
    //                 // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
    //             }
    //             else if (response.data.code === 204) {
    //                 console.log("Username password do not match");
    //                 alert("username password do not match")
    //             }
    //             else {
    //                 console.log("Username does not exists");
    //                 alert("Username does not exist");
    //             }
    //         })
    //         .catch(function (error) {
    //             alert(error);
    //         });
    // }


    // // info = () => {
    // //     req
    // //         .login()
    // //         .then(resp => {
    // //             var tempArray = [];
    // //             let dataz = resp.data.data;
    // //             for (let i = 0 < dataz.length; ++i) {
    // //                 if(i > 1) {
    // //                     let myObj = {
    // //                         username: dataz[i],
    // //                         password: dataz[i].password                            
    // //                     }
    // //                 }
    // //             }
    // //         })

    // // }

    // onclickHandler(e) {
    //     if (this.state.username === "" && this.state.password === "") {
    //         swal({
    //             icon: "error",
    //             title: "Field must be fullfilled!"
    //         });
    //     } else {
    //         this.setState({ situation: true })
    //     }
    }

    render() {
        if (!this.state.situation) {
            return (
                <center>
                    <div className="card">
                        <h1 id="admin">Admin</h1>
                        <input autoComplete="off" placeholder="Username" type="text" className="w3-input w3-border" id="user" onChange={(e) => this.setState({ username: e.target.value })}></input><br></br>
                        <input placeholder="Password" type="password" className="w3-input w3-border" id="pass" onChange={(e) => this.setState({ password: e.target.value })}></input><br></br>
                        <button id="button" onClick={(e) => this.componentsDidMount(e)}>Login</button>
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
export default Login;