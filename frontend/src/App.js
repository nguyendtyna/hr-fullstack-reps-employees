import React, { Component } from "react";
import exampleEmployees from "./exampleEmployees";
import EmployeeList from "./components/EmployeeList";
import Employee from "./components/Employee";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: exampleEmployees,
      value: '',
      selectedEmployee: {}
    };

    // Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*

  Enter a user id to the form and view the selected employee
  - Define a function to handle change of text value
      Set the state of the value to user input value
  - Define a function to handle submit
      On submit, handleSubmit will run
      Takes in an event and finds a single employee
      If state value is valid, send the employee

  */

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // console.log('Input submitted!');
    // stop the event from reverting
    event.preventDefault();
    // access the employee list property
    let allEmployees = this.state.employees;
    // iterate through the employee list
    for (let i = 0; i < allEmployees.length; i++) {
      let currentEmployee = allEmployees[i];
      if (currentEmployee['id'] === this.state.value.toString()) {
        // set the state of the employee to the desired employee
        this.setState({selectedEmployee: currentEmployee});
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Full Stack Reps!</h1>

        <EmployeeList employees={this.state.employees}/>

        {/* form to choose single employee */}
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter employee id:" value={this.state.value} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>

        {/* if an employee is selected, show that employee here */}
        <Employee employee={this.state.selectedEmployee}/>
      </div>
    );
  }
}

export default App;
