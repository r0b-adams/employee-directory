import React from 'react'

// returns a single row of employee data
export default function TableRow({dob, email, firstName, lastName, location, picture}) {

    // TODO: format Date of Birth
    return (
        <tr>
            <th scope="row"></th>
                <td><img alt={`${firstName} ${lastName}`} src={picture}/></td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{location}</td>
                <td>{dob}</td>
        </tr>
    )
}
