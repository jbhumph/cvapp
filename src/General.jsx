import React, { useState } from 'react';

function General() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  }
  
  return (
    <div className="general">
      <h1>General</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label for="name">Name:</label><br />
          <input type="text" id="name" value={formData.name} onChange={handleChange}></input><br />
          <label for="email">Email:</label><br />
          <input type="email" id="email" value={formData.email} onChange={handleChange}></input><br />
          <label for="phone">Phone Number:</label><br />
          <input type="tel" id="phone" value={formData.phone} onChange={handleChange}></input><br />
          <div>
            <button type="submit">Submit</button>
            <button type="button">Edit</button>
          </div>
        </form>
      ) : (
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default General;