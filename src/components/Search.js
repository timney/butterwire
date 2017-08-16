import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import './Search.css';


class Search extends Component {
    render () {
        return (
            <div className="search">
                <div className="ctrl">
                    <InputGroup size="sm">
                        <Input placeholder="search" />
                        <InputGroupAddon>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <a href="#">Advanced search</a>                
            </div>
        )
    }
}

export default Search