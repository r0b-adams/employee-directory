import React from "react";
import API from "../utils/API";

import Table from "./Table";

// By extending the React.Component class, inherits functionality from it
// follow this pattern so we don't need a constructor or binding

// Class-based components give us access to "State"
// parts of the page that rely on "state" will update when state is updated with setState
class DataContainer extends React.Component {

  // variables the UI relies on live in this state object
  // Setting the initial state of the DataContainer component
  state = {
    filterLast: "",
    // reference array
    employees: [],
    // display array
    filteredEmployees: [],

    // these govern sorting by column
    // on click, they reverse sign
    firstSort: 1,
    lastSort: 1,
    emailSort: 1,
    locationSort: 1,
  };

  // this will load employees to state.employees and state.filteredEmployees on page load
  componentDidMount() {
    this.loadEmployees();
  }

  // fetch employees from randomUser API
  loadEmployees = () => {
    API.getEmps()
    .then(res => this.setState({ employees: res.data.results, filteredEmployees:res.data.results}))
    .catch(err => console.log(err));
  }

  // filter the employee array by last name
  filterByLast = event => {

    // boilerplate: Getting the value and name of the text input which triggered the change
    const { name, value } = event.target;

    this.setState({
      // boilerplate: in this case, sets filterLast to text value
      [name]: value,

      // update the filteredEmployees array using the value from event
      filteredEmployees: this.state.employees.filter(e => e.name.last.includes(value))
    });
  };

  // TODO: REFACTOR
  // Sort employees by category
  sortBy = event => {
    event.preventDefault();
    const columnName = event.target.textContent; // grab the title of the column
    // console.log(columnName);


    // can use a switch case of if/else to filter according to column name

    // SORT BY FIRST NAME
    if (columnName === "First Name") {
      const flip = this.state.firstSort * -1;

      this.setState({
        filteredEmployees: this.state.employees.sort((a, b) => a.name.first > b.name.first ? this.state.firstSort : -this.state.firstSort),
        firstSort: flip // multiply by -1 to reverse sort on next click
      });
    }

    // SORT BY LAST NAME
    if (columnName === "Last Name") {
      const flip = this.state.lastSort * -1;

      this.setState({
        filteredEmployees: this.state.employees.sort((a, b) => a.name.last > b.name.last ? this.state.lastSort : -this.state.lastSort),
        lastSort: flip // multiply by -1 to reverse sort on next click
      });
    }

    // SORT BY EMAIL
    if (columnName === "Email") {
      const flip = this.state.emailSort * -1;

      this.setState({
        filteredEmployees: this.state.employees.sort((a, b) => a.email > b.email ? this.state.emailSort : -this.state.emailSort),
        emailSort: flip // multiply by -1 to reverse sort on next click
      });
    }

    // SORT BY LOCATION
    if (columnName === "Location") {
      const flip = this.state.locationSort * -1;

      this.setState({
        filteredEmployees: this.state.employees.sort((a, b) => a.location.city > b.location.city ? this.state.locationSort : -this.state.locationSort),
        locationSort: flip // multiply by -1 to reverse sort on next click
      });
    }
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>

        {/* this input field updates the filtered array by last name */}
        <input
        value={this.state.filterLast}
        name="filterLast"
        onChange={this.filterByLast}
        type="text"
        placeholder="Filter by last name"
      />

      {/* send filtered employee data for display */}
       <Table
        employees={this.state.filteredEmployees}
        sortBy={this.sortBy}
       />
      </div>
    );
  }
}

export default DataContainer;