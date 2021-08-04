import React, {useEffect, useState} from 'react';

const Riddle = ({difficulty}) => {
    const [riddles, setRiddles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/games/${difficulty}`)
          .then((r) => r.json())
          .then((riddles) => setRiddles(riddles));
      }, []);

      return (
          <div>
      {riddles.map(riddle => (
        <div>
            <p>{riddle.name}</p>
        </div>
      ))}
      </div>
      )
}

export default Riddle