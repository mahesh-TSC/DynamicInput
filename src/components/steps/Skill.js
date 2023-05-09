import React, { Component } from 'react';
class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                skill: ""
            }]
        }
        this.addMore = this.addMore.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addMore = () => {
        let addNew = { skill: "" };
        this.state.data.push(addNew);
        this.setState(this.state);
    }
    removeItem = (key) => {
        let addNew = [...this.state.data];
        addNew.splice(key, 1)
        this.state.data = addNew;
        this.setState(this.state);
    }

    changeValue = (e, changeIndex) => {
        const { value } = e.target;
        this.state.data[changeIndex].skill = value;
        this.setState(this.state);
    }

    render() {
        console.log(this.state)
        return (
            <div className='login-page'>
                <h1>Skills</h1>
                <div>
                    {/* <input type='text' name="skill" value={this.state.skill} placeholder='Enter your Skill ' onChange={this.change} /> */}

                    <form className='login-page'>
                        {
                            this.state.data.map((inputData, index) => {
                                return (<div key={index} className='login-page'>
                                    <label>Skills:</label><br />
                                    <input type='text' name="skill" value={inputData.skill} placeholder='Enter your Skill' onChange={(e) => this.changeValue(e, index)} />
                                    <span>{this.props.val}</span>
                                    {index !== 0 && <button type='button' onClick={() => this.removeItem(index)} className='removeItem'>-</button>}
                                </div>);
                            })}
                        <button className='additem' type='button' onClick={() => this.addMore()}>+</button>
                    </form>

                </div>
            </div>

        );
    }
}

export default Skill;