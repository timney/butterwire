import React, { Component } from 'react'

import './Menu.css';


class Menu extends Component {

    click () {
        alert('Menu option clicked');
    }

    render() {
        return (
            <div>
                <h1>bw</h1>
                <ul>
                    <li>
                        <a href="#" onClick={this.click}>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={this.click}>
                            <i className="fa fa-line-chart" aria-hidden="true"></i>
                        </a>

                    </li>
                    <li>
                        <a href="#" onClick={this.click}>
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </a>

                    </li>
                    <li>
                        <a href="#" onClick={this.click}>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </a>

                    </li>
                    <li>
                        <a href="#" onClick={this.click}>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>

                    </li>
                    <li>
                        <a href="#" onClick={this.click}>
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                        </a>

                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu