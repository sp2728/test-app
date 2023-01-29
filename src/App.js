import { Button } from "@mui/material";
import "./App.css";
import Todo from "./todo";
import React from "react";

function App() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "20px auto",
          alignItems: "center",
          justifyItems: "center",
          marginTop: "15px",
        }}
      >
        <div>
          <Button>useState</Button>
          <Button>redux</Button>
        </div>
        <h1 style={{ textAlign: "center" }}> To-Do App</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <Todo />
      </div>
    </div>
  );
}

export default App;
