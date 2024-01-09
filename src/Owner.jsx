
import React, { useState, useEffect } from 'react';

// Mock data for initial state
const initialData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  

];

function Owner() {
  const [data, setData] = useState(initialData);

  const handleAddNewItem = () => {
    // Logic to add a new item
  };

  const handleDeleteItem = (itemId) => {
    // Logic to delete an item
  };

  return (
    <div className="owner-container">
    <div className="button-container">
        <button onClick={handleAddNewItem}>Add New Item</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Owner;
