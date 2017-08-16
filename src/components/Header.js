import React, { Component } from 'react'

import Search from './Search';

import './Header.css';


class Header extends Component {
    render () {
        return (
            <div className="header">
                <div>
                    <h1>Your Dashboard</h1>
                </div>
                <Search />
            </div>
        )
    }
}

export default Header