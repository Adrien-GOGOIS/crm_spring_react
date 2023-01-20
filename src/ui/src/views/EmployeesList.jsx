import {React, useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeesList() {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState();
    const [showModal, setShowModal] = useState({
        display: false,
        props: null
    });

    useEffect(() => {
        axios.get('http://localhost:9000/employees')
        .then(function (response) {
        setEmployees(response.data);
        })
    }, [])

    const updateEmployee = (id) => {
        navigate(`/modify/${id}`)
    }

    const deleteEmployee = (id) => {
        console.log(id)
        axios.delete(`http://localhost:9000/employees/${id}`)
            .then(() => {
                setShowModal({
                    display: false,
                    props: null
                })
            })
            .then(() => {
                setEmployees(employees.filter(employee => employee.id !== id));
            })
    }

    const displayModal = (props) => {
        setShowModal({
            display: true,
            props: props
        })
    }

    function EmptyList() {
        return <p>Empty</p>
    }

    function Modal(props) {
        return (
            <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Supprimer cet employé de la liste?
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Ce changement est irrévocable.
                    J'espère que vous avez un bon avocat...
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal({display: false})}
                  >
                    Non
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => deleteEmployee(props.employeeId)}
                  >
                    Oui
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        )
    }

    function RenderList() {
        return (
          <div className="flex flex-col items-center">
            <ul className="w-1/4">
              {employees.map(employee => {
                return ( 
                  <li key={employee.id} className="flex items-center justify-end my-3 py-2">
                    <p className="mx-2 text-xl">{employee.firstName}</p>
                    <p className="mx-2 text-xl">{employee.lastName}</p>
                    <button
                    onClick={() => updateEmployee(employee.id)}
                    className="mx-2 p-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
                    >
                        Modifier
                    </button>
                    <button
                    onClick={() => displayModal(employee.id)} 
                    className="p-1 bg-red-500 hover:bg-red-700 text-white font-bold border border-red-700 rounded"
                    >
                        Supprimer
                    </button>
                  </li>        
                );
              })}
            </ul> 
          </div>
        )
          
            
    }

    if (showModal.display) {
        return <Modal employeeId={showModal.props}/>
    }

    if (!employees || employees.length === 0) {
        return <EmptyList />
    }

    return <RenderList />
}

export default EmployeesList;