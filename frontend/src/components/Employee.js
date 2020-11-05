import React from "react";

const Employee = (props) => {
  // Access props to get exampleEmployee data: props ==> employee
  // console.log("Employee obj from employeeList:", props);
  // console.log("Employee's first name:", props.employee.first_name);

  return (
    <div>
      {/* Single Employee here  */}
      <h3>{props.employee.first_name} {props.employee.last_name}</h3>
      <p>{props.employee.city}</p>
    </div>
  )
};

export default Employee;
