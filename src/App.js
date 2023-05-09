import React, { Component } from 'react';
import "./App.css"
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
// import { Skill } from './components';
class App extends Component {

    render() {
        return (
            <div>
               
                <BrowserRouter>
                <Layout></Layout>
                <Home></Home>
                <SignIn></SignIn>
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        {/* <Route path='layout' element={<Layout></Layout>}></Route> */}
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;