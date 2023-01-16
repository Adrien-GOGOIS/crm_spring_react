import React from "react";
import { Link } from "react-router-dom";
import EmployeesList from "../views/EmployeesList";

function Navbar() {
    return (
        <nav>
            <ul className="flex w-100 bg-red-200">
                <li className="mx-5">
                    <Link to={"/list"}>Go to list</Link>
                </li>
                <li>
                    <Link to={"/add"}>Create new employee</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;