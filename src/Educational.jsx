function Educational() {
  return (
    <div className="educational">
      <h1>Educational</h1>
      <form>
        <label for="schoolname">School Name:</label><br />
        <input type="text" id="schoolname"></input><br />
        <label for="degree">Area of Study:</label><br />
        <input type="text" id="degree"></input><br />
        <label for="gpa">GPA:</label><br />
        <input type="number" id="gpa"></input><br />
        <div>
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </div>
      </form>
    </div>
  );
}
export default Educational;