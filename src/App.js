import { Button } from "@mui/material";
import "./App.css";
import Todo from "./todo";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import TodoRedux from "./todoRedux";

function App() {
  return (
    <>
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
          <Link to="/">
            <Button>useState</Button>
          </Link>
          <Link to="/redux">
            <Button>redux</Button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/redux" element={<TodoRedux />} />
      </Routes>
    </>
  );
}

export default App;
