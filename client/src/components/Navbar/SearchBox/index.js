import React, { Component } from 'react';
import  {Search} from 'react-bootstrap-icons';

import './searchbox.css';

export class SearchBar extends Component {
    render() {
        return (
            <form className="d-flex">
                <div class="searchBox">

                    <input class="searchInput" type="text" name="" placeholder="Search"/>
                        <button class="searchButton">
                            <Search/>
                        </button>
                </div>
            </form>
        )
    }
}

export default SearchBar
