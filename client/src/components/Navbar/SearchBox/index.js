import React, { Component } from 'react';
import  {Search} from 'react-bootstrap-icons';

import './searchbox.css';

export class SearchBar extends Component {
    render() {
        return (
            <form className="d-flex">
                <div className="searchBox">

                    <input className="searchInput" type="text" name="" placeholder="Search"/>
                        <button className="searchButton">
                            <Search/>
                        </button>
                </div>
            </form>
        )
    }
}

export default SearchBar
