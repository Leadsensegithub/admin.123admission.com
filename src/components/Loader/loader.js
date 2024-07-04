import React from "react";

const Loader = (margin) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100" >
        <div
          className="spinner-border"
          style={{
            width: "3rem",
            height: "3rem",
          }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

    </>
  );
};

export default Loader;
