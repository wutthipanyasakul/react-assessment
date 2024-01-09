import React from 'react';

function User({ employees }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;


