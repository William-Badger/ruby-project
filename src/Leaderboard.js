import React, {useEffect, useState} from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [empty, setEmpty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  
  
    return (
        
        <table id="leaderboard" class="ui selectable inverted table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th className="right aligned">Score</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr>
            <td>{user.username}</td>
            <td className="right aligned">{user.highscore == null ? 'Nothing yet...' : user.highscore}</td>
          </tr>
          ))}
        </tbody>
      </table>
    );
}

export default Leaderboard;
