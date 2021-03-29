import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="p-5">
      <Spinner
        animation="border"
        style={{ height: "80px", width: "80px" }}
      ></Spinner>
    </div>
  );
};

export default Loading;
