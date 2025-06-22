import React from "react";

// if u want to stop re-render of child component is props have only value , if props have function then REact.memo will not be sufficient u have to use useCallback in parentside.
const ChildComponent = React.memo((props) => {
  console.log("Child component got re-render");
  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponent;
