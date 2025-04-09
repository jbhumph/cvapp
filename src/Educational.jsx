import React, { useState } from 'react';

function Educational() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    schoolname: '',
    degree: '',
    gpa: ''
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
    <div className="educational">
      <h1>Educational</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label for="schoolname">School Name:</label><br />
          <input type="text" id="schoolname" value={formData.schoolname} onChange={handleChange}></input><br />
          <label for="degree">Area of Study:</label><br />
          <input type="text" id="degree" value={formData.degree} onChange={handleChange}></input><br />
          <label for="gpa">GPA:</label><br />
          <input type="number" id="gpa" value={formData.gpa} onChange={handleChange}></input><br />
          <div>
            <button type="submit">Submit</button>
            <button type="button">Edit</button>
          </div>
        </form>
      ) : (
        <div>
          <p>School Name: {formData.schoolname}</p>
          <p>Area of Study: {formData.degree}</p>
          <p>GPA: {formData.gpa}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default Educational;