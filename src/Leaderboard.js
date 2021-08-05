import React, {useEffect, useState} from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
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
          <tr id="rankings">
            <td>1</td>
            <td>{users.length <= 0 ? `Arthur` : users[0].username}</td>
            <td className="right aligned">{users.length <= 0 ? `0` : users[0].highscore === null ? `0` : users[0].highscore }</td>
          </tr>
          <tr id="rankings">
            <td>2</td>
            <td>{users.length <= 1 ? `The French` : users[1].username}</td>
            <td className="right aligned">{users.length <= 1 ? `0` : users[1].highscore === null ? `0` : users[1].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>3</td>
            <td>{users.length <= 2 ? `Tim the Enchanter` : users[2].username}</td>
            <td className="right aligned">{users.length <= 2 ? `0` : users[2].highscore === null ? `0` : users[2].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>4</td>
            <td>{users.length <= 3 ? `Bridge Keeper` : users[3].username}</td>
            <td className="right aligned">{users.length <= 3 ? `0` : users[3].highscore === null ? `0` : users[3].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>5</td>
            <td>{users.length <= 4 ? `A Dead Parrot` : users[4].username}</td>
            <td className="right aligned">{users.length <= 4 ? `0` : users[4].highscore === null ? `0` : users[4].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>6</td>
            <td>{users.length <= 5 ? `Brian` : users[5].username}</td>
            <td className="right aligned">{users.length <= 5 ? `0` : users[5].highscore === null ? `0` : users[5].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>7</td>
            <td>{users.length <= 6 ? `The Black Knight` : users[6].username}</td>
            <td className="right aligned">{users.length <= 6 ? `0` : users[6].highscore === null ? `0` : users[6].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>8</td>
            <td>{users.length <= 7 ? `Zoot` : users[7].username}</td>
            <td className="right aligned">{users.length <= 7 ? `0` : users[7].highscore === null ? `0` : users[7].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>9</td>
            <td>{users.length <= 8 ? `Prince Herbert` : users[8].username}</td>
            <td className="right aligned">{users.length <= 8 ? `0` : users[8].highscore === null ? `0` : users[8].highscore}</td>
          </tr>
          <tr id="rankings">
            <td>10</td>
            <td>{users.length <= 9 ? `Rabbit of Caerbannog` : users[9].username}</td>
            <td className="right aligned">{users.length <= 9 ? `0` : users[9].highscore === null ? `0` : users[9].highscore}</td>
          </tr>
        </tbody>
      </table>
    );
}

export default Leaderboard;
