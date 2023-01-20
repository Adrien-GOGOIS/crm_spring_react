import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddEmployeeForm() {

    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const registerEmployee = data => {
        axios.post('http://localhost:9000/employee', {
            firstName: data.firstName,
            lastName: data.lastName,
            mail: data.email,
            password: data.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            navigate('/list');
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(registerEmployee)}>
                <input type={"text"} placeholder="first name" {...register("firstName", { required: true })} />
                <input type={"text"} placeholder="last name" {...register("lastName", { required: true })} />
                <input type={"email"} placeholder="mail" {...register("email", { required: true })} />
                <input type="password" placeholder="password" {...register("password", { required: true })} />
                <input type="submit" onClick={registerEmployee}/>
            </form>
        </div>
    )   
}

export default AddEmployeeForm;