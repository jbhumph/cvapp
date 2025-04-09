function General() {
  return (
    <div className="general">
      <h1>General</h1>
      <form>
        <label for="name">Name:</label><br />
        <input type="text" id="name"></input><br />
        <label for="email">Email:</label><br />
        <input type="email" id="email"></input><br />
        <label for="phone">Phone Number:</label><br />
        <input type="tel" id="phone"></input><br />
        <div>
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </div>
      </form>
    </div>
  );
}
export default General;