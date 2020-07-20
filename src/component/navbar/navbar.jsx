import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Navbar extends Component{
    render() {
        return (
            <header>
                <nav >
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/new">New</Link>
                    </div>
                </nav>
            </header>
        );
    }
}