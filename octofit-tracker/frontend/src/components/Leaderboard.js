import React, { useEffect, useState } from 'react';


function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://reimagined-capybara-w9x5x6vjvfv6q4-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container">
      <div className="card shadow p-4 mb-4 bg-body rounded">
        <h1 className="mb-4 text-success">Leaderboard</h1>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(entry => (
              <tr key={entry._id}>
                <td>{entry.user && entry.user.username ? entry.user.username : ''}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3" onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );
}

export default Leaderboard;
