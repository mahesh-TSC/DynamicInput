import React, { Component } from 'react';

class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkedin: "",
            github: "",
            pinterest: "",
            email: ""
        }
        this.change = this.change.bind(this);
    }
    change(e){
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
       }
    render() {
        return (

            <div className='login-page'>
                <h1>Social Links</h1>
                <div>
                    <label>LinkedIn:</label><br />
                    <input type='text' name="linkedin" value={this.state.linkedin} placeholder='Enter your linkedIn Id '  onChange={this.change}/>
                    <span>{this.props.val}</span>
                </div>
                <div>
                    <label>GitHub:</label><br />
                    <input type='text' name="github" value={this.state.github} placeholder='Enter your GitHub Id' onChange={this.change} />
                    <span>{this.props.val}</span>
                </div>
                <div>
                    <label>Pinterest:</label><br />
                    <input type='text' name="pinterest" value={this.state.pinterest} placeholder='Enter your Pinterest Id' onChange={this.change} />
                    <span>{this.props.val}</span>
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type='email' name="email" value={this.state.email} placeholder='Enter your Email' onChange={this.change} />
                    <span>{this.props.val}</span>
                </div>
            </div>

        );
    }
}

export default Social;