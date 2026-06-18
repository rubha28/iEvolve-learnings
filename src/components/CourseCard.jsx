function CourseCard({ course }) {
  return (
    <div className="card">

      <h3>{course.title}</h3>

      <p>{course.category}</p>

      <p>Course ID: {course.id}</p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${course.progress}%`
          }}
        ></div>
      </div>

      <p>{course.progress}% Completed</p>

      <button>
        Continue Learning
      </button>

    </div>
  );
}

export default CourseCard;