import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
            My Home page
            <button type="button" className="btn btn-danger"><Link to="/home/login">Login</Link></button>
            </div>
        );
    }
}

export default Home;