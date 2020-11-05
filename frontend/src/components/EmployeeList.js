import React from "react";
import Employee from "./Employee";

const EmployeeList = (props) => {
  // console.log("Dummy data props passed from App:", props);
  return (
    <div>
      {props.employees.map((employee) => {
        return <Employee employee={employee} key={employee.id}/>
      })}
    </div>
  );
};

export default EmployeeList;
