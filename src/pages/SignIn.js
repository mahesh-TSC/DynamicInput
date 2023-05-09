import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Skill } from '../components';

class SignIn extends Component {
    render() {
        return (
            <div>
                <Link to="/login" >Login</Link>
            </div>
        );
    }
}

export default SignIn;