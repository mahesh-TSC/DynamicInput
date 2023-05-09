import React, { Component } from 'react';
import Intro from '../steps/Intro';
import Social from '../steps/Social';
import Education from '../steps/Education';
import Skill from '../steps/Skill';
import Header from '../Header/Header';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            val: ""
        }
        this.incre = this.incre.bind(this);
        this.decre = this.decre.bind(this)
    };
    incre(event) {
        let { counter } = this.state;
        let flag = true;
        let valid = document.getElementsByTagName("input");
        console.log(valid)
        for (let i = 0; i < valid.length; i++) {
            if (valid[i].value === "") {
                this.setState({ val: "*required" })
                flag = false;
            }
            else {
                this.setState({ val: "" })
            }
        }
        if (flag == true) {
            if (counter < 3) {
                counter++;
            }
            this.setState({ counter })
        }
        console.log(valid)
    }
    decre() {
        let { counter } = this.state;
        if (counter > 0) {
            counter--;
        }
        this.setState({ counter })
    }
    render() {
        return (
            <div>
                <header><Header /></header>

                <div className='login'>
                    {this.state.counter === 0 && <Intro val={this.state.val} />}
                    {this.state.counter === 1 && <Social val={this.state.val}/>}
                    {this.state.counter === 2 && <Education val={this.state.val} />}
                    {this.state.counter === 3 && <Skill val={this.state.val}/>}
                    {this.state.counter !== 0 && <button onClick={this.decre}>Prev</button>}
                    {this.state.counter !== 3 && <button onClick={this.incre}>Next</button>}
                    {this.state.counter === 3 && <button onClick={this.incre}>Submit</button>}
                </div>
                <footer>
                    <p>Copyright &copy; All Rights Reserved.</p>
                </footer>
            </div>
        );
    }
}

export default Layout;