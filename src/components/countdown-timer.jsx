import React, { useEffect, useState } from "react";

export default function CountDownTimer() {
  const [count, setCount] = useState(300);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const set = setInterval(() => {
        setCount((prev) => {
          if (prev === 0) {
            clearInterval(set);
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
    }
  }, [start]);

  let hour = Math.floor(count / 3600)
    .toString()
    .padStart(2, "0");
  let min = Math.floor(count / 60)
    .toString()
    .padStart(2, "0");
  let sec = Math.floor(count % 60)
    .toString()
    .padStart(2, "0");

  return (
    <div
      style={{
        display: "flex",
        height: `100vh`,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>CountDown Timer</h1>
      <h2>
        {hour}:{min}:{sec}
      </h2>
      <button onClick={() => setStart(true)} disabled={start}>
        start
      </button>
    </div>
  );
}
