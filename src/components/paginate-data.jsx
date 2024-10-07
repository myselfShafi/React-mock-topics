import React, { useState, useEffect } from 'react';

export default function Pagination() {
  const [count, setCount] = useState([0, 10]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const value = await result.json();
        setData(value.slice(count[0], count[1]));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [count]);

  const handleClick = () => {
    setCount((prev) => [prev[0] + 10, prev[1] + 10]);
  };

  return (
    <div>
      <h1>Paginate Data!</h1>
      {data.map((list) => (
        <p>- {list.title}</p>
      ))}
      <button onClick={handleClick}>Next</button>
    </div>
  );
}
