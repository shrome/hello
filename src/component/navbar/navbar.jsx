import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Navbar extends Component{
    render() {
        return (
            <header>
                <section className="verticenterize">
                    <Link to="/">Afetra</Link> 
                </section>
                <nav >
                    <div>
                        <Link to="/">About</Link>
                    </div>
                    <div>
                        <Link to="/new">New</Link>
                    </div>
                </nav>
            </header>
        );
    }
}