import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Homepage() {

    const navigate = useNavigate();

    const goToList = () => {
        navigate('/list')
    }

    return (
        <>
            <Navbar />
        </>       
    )
}

export default Homepage;