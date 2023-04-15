import React from "react";

function Body(props) {
  return (
    <div className="min-h-screen bg-main flex flex-col">
      {props.children}
    </div>
  );
}

export default Body;
