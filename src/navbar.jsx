import React from "react";

const NavBar = ({ onFilter }) => {
    return (
        <div className="navbar">
            <ul>
                <li onClick={() => onFilter(null)}>tout</li>
                <li onClick={() => onFilter("favoris")}>favoris</li>
                <li onClick={() => onFilter("action")}>action</li>
                <li onClick={() => onFilter("comedie")}>comedie</li>
                <li onClick={() => onFilter("animation")}>animation</li>
            </ul>
        </div>
    )
}
export default NavBar
