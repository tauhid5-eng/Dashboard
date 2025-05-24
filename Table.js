import React from 'react';

const data = [
  { id: 1, name: 'Product A', price: 100, stock: 20 },
  { id: 2, name: 'Product B', price: 150, stock: 15 },
  { id: 3, name: 'Product C', price: 120, stock: 10 },
];

function Table() {
  return (
    <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Price</th><th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td><td>{item.name}</td><td>{item.price}</td><td>{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;