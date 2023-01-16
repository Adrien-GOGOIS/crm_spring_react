import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

function AddEmployeeForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const registerEmployee = data => {
        axios.post('http://localhost:9000/employee', {
            first_name: data.firstName,
            last_name: data.lastName,
            mail: data.email,
            password: data.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
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