import React, { useState } from 'react';

function Practical() {
  const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
      companyname: '',
      position: '',
      tasks: '',
      startdate: '',
      enddate: ''
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
    <div className="practical">
      <h1>Practical</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label for="companyname">Company Name:</label><br />
          <input type="text" id="companyname" value={formData.companyname} onChange={handleChange}></input><br />
          <label for="position">Position Held:</label><br />
          <input type="text" id="position" value={formData.position} onChange={handleChange}></input><br />
          <label for="tasks">Responsibilities:</label><br />
          <textarea id="tasks" value={formData.tasks} onChange={handleChange}></textarea><br />
          <label for="startdate">Start Date:</label><br />
          <input type="date" id="startdate" value={formData.startdate} onChange={handleChange}></input><br />
          <label for="enddate">End Date:</label><br />
          <input type="date" id="enddate" value={formData.enddate} onChange={handleChange}></input><br />
          <div>
            <button type="submit">Submit</button>
            <button type="button">Edit</button>
          </div>
        </form>
      ) : (
        <div>
          <p>Company Name: {formData.companyname}</p>
          <p>Position Held: {formData.position}</p>
          <p>Responsibilities: {formData.tasks}</p>
          <p>Start Date: {formData.startdate}</p>
          <p>End Date: {formData.enddate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default Practical;