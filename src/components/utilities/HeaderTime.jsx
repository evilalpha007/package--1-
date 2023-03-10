import React, { useState } from "react";

export default function HeaderTime() {
  let time = new Date().toLocaleTimeString();
  const [date, setDate] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setDate(time);
  };

  setInterval(updateTime, 1000);
  return <>{date}</>;
}
