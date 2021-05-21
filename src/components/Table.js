import React from 'react'
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

export default function Table(props) {
    return (
            <table className="table">
                <TableHeader
                    sortBy={props.sortBy}
                />
                <tbody>
                    {/* react will create a component for each element in the array */}
                    {props.employees.map(employee => (
                        <TableRow
                            key={employee.login.uuid} // needs unique key
                            picture={employee.picture.thumbnail}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            email={employee.email}
                            location={employee.location.city}
                            dob={employee.dob.date}
                        />
                    ))}
                </tbody>
            </table>
    )
}