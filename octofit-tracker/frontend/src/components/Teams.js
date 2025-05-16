import React, { useEffect, useState } from 'react';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://reimagined-capybara-w9x5x6vjvfv6q4-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container">
      <div className="card shadow p-4 mb-4 bg-body rounded">
        <h1 className="mb-4 text-info">Teams</h1>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{team.members && team.members.map(member => member.username).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-3" onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );
}

export default Teams;
