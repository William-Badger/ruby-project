import React, {useEffect, useState} from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);
  
    return (
        
        <table id="leaderboard" class="ui selectable inverted table">
        <thead>
          <tr>
            <th>Username</th>
            <th class="right aligned">Score</th>
          </tr>
        </thead>
        {users.map(user => (
        <tbody>
          <tr>
            <td>{user.username}</td>
            <td class="right aligned">{user.highscore == null ? 'Nothing yet...' : user.highscore}</td>
          </tr>
        </tbody>
        ))}
      </table>
    );
}

export default Leaderboard;
