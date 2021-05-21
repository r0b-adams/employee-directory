import React from 'react'

// event handles attached to 
export default function TableHeader(props) {
    return (
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Picture</th>
                <th onClick={props.sortBy} scope="col">First Name</th>
                <th onClick={props.sortBy} scope="col">Last Name</th>
                <th onClick={props.sortBy} scope="col">Email</th>
                <th onClick={props.sortBy} scope="col">Location</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
    )
}
