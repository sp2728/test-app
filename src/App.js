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
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
          justifyContent: "space-between",
          marginRight: "45%",
          marginLeft: "45%",
        }}
      >
        <div>
          <Button variant="outlined">
            <Link to="/" style={{ textDecoration: "none" }}>
              useState
            </Link>
          </Button>
        </div>
        <div>
          <Button variant="outlined">
            <Link to="/redux" style={{ textDecoration: "none" }}>
              redux
            </Link>
          </Button>
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
