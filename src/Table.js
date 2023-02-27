import React from 'react';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={row.isActive ? "" : "red-background"}> 
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.password}</td>
            <td>{row.isActive ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

