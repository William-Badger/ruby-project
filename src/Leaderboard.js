import React from 'react';

const Leaderboard = () => {
    return (
        <div id="leaderboard">
        <table class="ui selectable inverted table">
        <thead>
          <tr>
            <th>Username</th>
            <th class="right aligned">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>William</td>
            <td class="right aligned">0</td>
          </tr>
          <tr>
            <td>James</td>
            <td class="right aligned">0</td>
          </tr>
          <tr>
            <td>Noam</td>
            <td class="right aligned">0</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
}

export default Leaderboard;
