import React from 'react'

function Hamburger() {
    return (
        <React.Fragment>
             <button className="navbar-toggler" type="button"
               data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
        </React.Fragment>
    )
}

export default Hamburger;
