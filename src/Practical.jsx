function Practical() {
  return (
    <div className="practical">
      <h1>Practical</h1>
      <form>
        <label for="companyname">Company Name:</label><br />
        <input type="text" id="companyname"></input><br />
        <label for="position">Position Held:</label><br />
        <input type="text" id="position"></input><br />
        <label for="tasks">Responsibilities:</label><br />
        <textarea id="tasks"></textarea><br />
        <label for="startdate">Start Date:</label><br />
        <input type="date" id="startdate"></input><br />
        <label for="enddate">End Date:</label><br />
        <input type="date" id="enddate"></input><br />
        <div>
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </div>
      </form>
    </div>
  );
}
export default Practical;