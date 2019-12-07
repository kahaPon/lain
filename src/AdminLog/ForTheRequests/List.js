import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.route}</td>
                <td>{this.props.obj.places}</td>
                
            </tr>
        );
    }
}

export default List;