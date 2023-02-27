import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', isActive: false });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue =
      name === "isActive" ? event.target.checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', password: '', isActive: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Active:
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
