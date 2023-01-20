import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function ModifyEmployeeForm(props) {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState();
    let employeeId = props.id.id;

    useEffect(() => {
        axios.get(`http://localhost:9000/employees/${employeeId}`)
        .then(function (response) {
            setEmployee(response.data);
        })
    }, [])
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const updateEmployee = data => {
        axios.put(`http://localhost:9000/employees/${employeeId}`, {
            firstName: data.firstName,
            lastName: data.lastName,
            mail: data.email,
            password: data.password
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            navigate('/list');
        })
    };

    function RenderList() {
        if (employee) {
            return (
                <div>
                    <form onSubmit={handleSubmit(updateEmployee)}>
                        <input type={"text"} placeholder="first name" defaultValue={employee.firstName} {...register("firstName", { required: true })} />
                        <input type={"text"} placeholder="last name" defaultValue={employee.lastName} {...register("lastName", { required: true })} />
                        <input type={"email"} placeholder="mail" defaultValue={employee.mail} {...register("email", { required: true })} />
                        <input type="password" {...register("password", { required: true })} />
                        <input type="submit" onClick={updateEmployee}/>
                    </form>
                </div>
            ) 
        }

        return <p>Problemo</p>
    }

    return <RenderList />
}

export default ModifyEmployeeForm;