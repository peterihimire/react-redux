import React from "react";
// import { AppContext } from "../../context";
import { useDispatch } from "react-redux";
import { PRESS_BUTTON, pressButton } from "../../store/actions/action";

import "./style.css";

const Alert = () => {
  const dispatch = useDispatch();

  console.log(pressButton);
  console.log(PRESS_BUTTON);
  // const { dispatchAlertEvent } = useContext(AppContext);

  const handleAlert = () => {
    // dispatchAlertEvent("PRESS_BUTTON", { text: "Hello World" });
    dispatch(pressButton({ text: "Hello World!" }));
  };
  return (
    <div className='btn-wrapper'>
      <button onClick={handleAlert}>Click Me</button>
    </div>
  );
};

export default Alert;
