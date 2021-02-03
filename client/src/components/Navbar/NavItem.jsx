import React from 'react'

function NavItem({itemName,link,active}) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${active}`} aria-current="page" href={link}>{itemName}</a>
        </li>
    )
}
NavItem.defaultProps = {
    active:null,
    link:"#",
    itemName:"navitem"

}
export default NavItem;
