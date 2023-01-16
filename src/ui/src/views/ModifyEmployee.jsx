import React from "react";
import { useParams } from "react-router-dom";
import ModifyEmployeeForm from "../components/ModifyEmployeeForm";

function ModifyEmployee() {

    let id = useParams();

    return (
        <>
            <div>
                <h1>Add an employee :</h1>
            </div>
            <div>
                <ModifyEmployeeForm id={id}/>
            </div>
        </>
    )
}

export default ModifyEmployee;