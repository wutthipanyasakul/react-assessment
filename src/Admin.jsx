import React from 'react';

function Admin({ employees, setEmployees }) {
  const handleAddEmployee = () => {
    // Logic to add an employee
  };

  const handleDeleteEmployee = employeeId => {
    // Logic to delete an employee
  };

  return (
    <div>
      <button onClick={handleAddEmployee}>Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>
                <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;

