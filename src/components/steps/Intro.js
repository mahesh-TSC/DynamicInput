import React, { Component } from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            password1: "",
            val1:"",
        }
        this.change = this.change.bind(this);
    }
    change(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }
    render() {
        return (

            <div className='login-page'>
                <h1>Introduction</h1>
                <div>
                    <label>First Name:</label><br />
                    <input type='text' name="fname" value={this.state.fname} placeholder='FName' onChange={this.change}/>
                    <span>{this.props.val}</span>
                </div>
                <div>
                    <label>Last Name:</label><br />
                    <input type='text' name="lname" value={this.state.lname} placeholder='Lname' onChange={this.change}/>
                    <span>{this.props.val}</span>
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type='email' name="email" value={this.state.email} placeholder='Email' onChange={this.change}/>
                    <span>{this.props.val}</span>
                </div>
                <div>
                    <label>Password:</label><br />
                    <input type='password' name="password" value={this.state.password} placeholder='Strong Password' onChange={this.change}/>
                    <span>{this.props.val}</span>
                </div>
                <div>
                    <label>Confirm Password:</label><br />
                    <input type='password' name="password1" value={this.state.password1} placeholder='Confirm Password' onChange={this.change}/>
                    <span>{this.props.val}</span>
                </div>
            </div>
        );
    }
}

export default Intro;