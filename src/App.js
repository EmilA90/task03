import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

function App() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData((prevTableData) => [...prevTableData, formData]);
  };

  return (
    <div>
      <h1>React Form Example</h1>
      <Form onSubmit={handleFormSubmit} />
      <h1>Table Data</h1>
      <Table data={tableData} />
    </div>
  );
}

export default App;
