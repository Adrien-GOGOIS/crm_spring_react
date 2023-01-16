import {React, useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeesList() {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState();

    useEffect(() => {
        axios.get('http://localhost:9000/employees')
        .then(function (response) {
        setEmployees(response.data);
        })
    }, [])

    const updateEmployee = (id) => {
        navigate(`/modify/${id}`)
    }

    function EmptyList() {
        return <p>Empty</p>
    }

    function RenderList() {
        return (
            employees.map(employee => {
                return ( 
                    <li className="" key={employee.id}>
                        <div className="flex my-5">
                        <p className="mx-2">{employee.firstName}</p>
                        <p className="mx-2">{employee.lastName}</p>
                            <button
                            onClick={() => updateEmployee(employee.id)}
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            >
                                Modifier
                            </button>
                            <button 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                            >
                                Supprimer
                            </button>
                        </div>
                    </li>
                );
            })
        )
    }

    if (!employees || employees.length === 0) {
        return <EmptyList />
    }

    return <RenderList />
}

export default EmployeesList;