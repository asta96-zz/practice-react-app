import React, { useState } from "react";
import "./styles.css";

function Button(props) {
  let handleClick = () => props.onClickFunction(props.increamentValue);
  return <button onClick={handleClick}>+{props.increamentValue}</button>;
}
function Display(props) {
  return <div>{props.counterValue}</div>;
}
function Apps() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={handleIncrement} increamentValue={1} />
      <Button onClickFunction={handleIncrement} increamentValue={5} />
      <Button onClickFunction={handleIncrement} increamentValue={7} />
      <Button onClickFunction={handleIncrement} increamentValue={10} />
      <Display counterValue={counter} />
    </>
  );
}
export default function App() {
  return <Apps />;
}
