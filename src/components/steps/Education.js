import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                cname: "",
                degree: "",
                pyear: "",
                stream: ""
            }
            ]
        }
        this.change = this.change.bind(this);
    }
    change(e,changeIndex) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
        const {name, value } = e.target;
        this.state.data[changeIndex][name] = value; 
        this.setState(this.state);
    }
    addMore = () => {
        // event.preventDefault();
        let addNew = {
            cname: "",
            degree: "",
            pyear: "",
            stream: ""
        };
        this.setState({
            data: [...this.state.data, addNew]
        })
        console.log(this.state)
    }
    removeItem(key) {
        let addNew = [...this.state.data];
        addNew.splice(key, 1)
        this.state.data = addNew;
        this.setState(this.state);
    }
    render() {
        return (

            <div className='login-page'>
                <h1>Education Details</h1>
                <form className='login-page'>
                    {this.state.data.map((inputData, index) => {
                        return (
                            <div key={index} className='login-page'>
                                <div className='login-page'>
                                    <label>College Name:</label><br />
                                    <input type='text' name="cname" value={inputData.cname} placeholder='College Name' onChange={(e)=>{this.change(e,index)}} />
                                    <span>{this.props.val}</span>
                                </div>
                                <div className='login-page'>
                                    <label>Course Name:</label><br />
                                    <input type='text' name="degree" value={inputData.degree} placeholder='Course Name' onChange={(e)=>{this.change(e,index)}} />
                                    <span>{this.props.val}</span>
                                </div>
                                <div className='login-page'>
                                    <label>Passing Year:</label><br />
                                    <input type='text' name="pyear" value={inputData.pyear} placeholder='Passing Year' onChange={(e)=>{this.change(e,index)}} />
                                    <span>{this.props.val}</span>
                                </div>
                                <div className='login-page'>
                                    <label>Stream:</label><br />
                                    <input type='text' name="stream" value={inputData.stream} placeholder='Stream Name' onChange={(e)=>{this.change(e,index)}} />
                                    <span>{this.props.val}</span>
                                </div>
                                {index !== 0 && <button className='removeItem' type='button' onClick={() => this.removeItem(index)}>-</button>}
                            </div>
                        );
                    })}
                    {/* <div>
                        <label>College Name:</label><br />
                        <input type='text' name="cname" value={this.state.cname} placeholder='College Name' onChange={this.change} />
                        <span>{this.props.val}</span>
                    </div>
                    <div>
                        <label>Course Name:</label><br />
                        <input type='text' name="degree" value={this.state.degree} placeholder='Course Name' onChange={this.change} />
                        <span>{this.props.val}</span>
                    </div>
                    <div>
                        <label>Passing Year:</label><br />
                        <input type='text' name="pyear" value={this.state.pyear} placeholder='Passing Year' onChange={this.change} />
                        <span>{this.props.val}</span>
                    </div>
                    <div>
                        <label>Stream:</label><br />
                        <input type='text' name="stream" value={this.state.stream} placeholder='Stream Name' onChange={this.change} />
                        <span>{this.props.val}</span>
                    </div> */}
                    <button type='button' onClick={() => this.addMore()} className='additem'>+</button>
                </form>
            </div>
        );
    }
}

export default Education;