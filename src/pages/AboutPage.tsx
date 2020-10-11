import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Info page</h1>
      <p>khfleigfleivfhns;ldvj</p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to todos
      </button>
    </>
  );
};
