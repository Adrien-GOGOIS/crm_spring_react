import React from "react";
import { Link } from "react-router-dom";
import EmployeesList from "../views/EmployeesList";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/list"}>Go to list</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;