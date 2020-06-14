import React, { useRef, useEffect, useState } from "react";

const Clock = () => {
  const { hr, mn, sc } = useRef(null);
  const [date, setDate] = useState(new Date());
  const deg = 6;
  let hour = date.getHours() * 30;
  let minute = date.getMinutes() * deg;
  let second = date.getSeconds() * deg;

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, [hour, minute, second]);

  let hrStyle = {
    transform: `rotateZ(${hour + minute / 12}deg)`,
  };
  let minStyle = {
    transform: `rotateZ(${minute}deg)`,
  };
  let secStyle = {
    transform: `rotateZ(${second}deg)`,
  };
  return (
    <div className="clock">
      <div className="clock__wrapper">
        <div className="clock__hour">
          <div className="clock__hr" id="hr" ref={hr} style={hrStyle} />
        </div>
        <div className="clock__min">
          <div className="clock__mn" id="mn" ref={mn} style={minStyle} />
        </div>
        <div className="clock__sec">
          <div className="clock__sc" id="sc" ref={sc} style={secStyle} />
        </div>
      </div>
    </div>
  );
};

export { Clock };
