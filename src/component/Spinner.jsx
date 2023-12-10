import React from "react";

export default function Spinner() {
  return (
    <div className="text-center custom-spinner">
      <div
        className="spinner-grow text-primary"
        style={{ width: "2rem", height: "2rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-secondary"
        style={{ width: "2rem", height: "2rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-success"
        style={{ width: "2rem", height: "2rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
