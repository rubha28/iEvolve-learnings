function Navbar() {
  return (
    <nav className="navbar">
      <h2>LearnHub</h2>

      <ul>
        <li>Home</li>
        <li>My Learnings</li>
        <li>Explore</li>
      </ul>

      <input
        type="text"
        placeholder="Search Courses..."
      />
    </nav>
  );
}

export default Navbar;