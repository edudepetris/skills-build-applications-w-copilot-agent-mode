import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://reimagined-capybara-w9x5x6vjvfv6q4-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container">
      <div className="card shadow p-4 mb-4 bg-body rounded">
        <h1 className="mb-4 text-danger">Workouts</h1>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout._id}>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-danger mt-3" onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );
}

export default Workouts;
