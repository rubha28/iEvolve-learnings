import "./App.css";

const courses = [
  {
    id: 101,
    title: "Java Fundamentals",
    progress: 75,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 102,
    title: "React JS",
    progress: 60,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*I6kN-6X7nh2nJkQq4M4P8A.png",
  },
  {
    id: 103,
    title: "Spring Boot",
    progress: 85,
    image:
      "https://spring.io/img/projects/spring-boot.svg",
  },
  {
    id: 104,
    title: "PostgreSQL",
    progress: 45,
    image:
      "https://www.postgresql.org/media/img/about/press/elephant.png",
  },
];

function App() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>LearnHub</h2>

        <ul>
          <li>📊 Dashboard</li>
          <li>📚 My Courses</li>
          <li>🏆 Certificates</li>
          <li>📈 Progress</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Top Bar */}
        <div className="topbar">
          <h2>Welcome Back 👋</h2>

          <input
            type="text"
            placeholder="Search Courses..."
          />
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <h3>12</h3>
            <p>Total Courses</p>
          </div>

          <div className="stat-card">
            <h3>8</h3>
            <p>Completed</p>
          </div>

          <div className="stat-card">
            <h3>85%</h3>
            <p>Progress</p>
          </div>

          <div className="stat-card">
            <h3>7 Days</h3>
            <p>Learning Streak 🔥</p>
          </div>
        </div>

        {/* Courses */}
        <h2>My Courses</h2>

        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={`https://picsum.photos/300/150?random=${course.id}`}
                alt={course.title}
              />

              <h3>{course.title}</h3>

              <p>{course.category}</p>

              <p>Course ID: {course.id}</p>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <p>{course.progress}% Completed</p>

              <button>Continue Learning</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;