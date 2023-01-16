import {React, useEffect, useState} from "react";
import axios from "axios";

function EmployeesList() {

  const [employees, setEmployees] = useState();

  useEffect(() => {
    axios.get('http://localhost:9000/employees')
      .then(function (response) {
      setEmployees(response.data);
  })
  }, [])

    return (
        <div>
        <ul>
          {employees && employees.map(employee => {
            return ( 
              <li>{employee.firstName}</li>
            );
          })}
        </ul>
        </div>
    )
}

export default EmployeesList;