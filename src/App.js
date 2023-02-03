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
          // gridTemplateColumns: "auto",
          alignItems: "center",

          marginTop: "15px",
          justifyContent: "space-between",
          marginRight: "45%",
          marginLeft: "45%",
        }}
      >
        <div>
          <Button variant="outlined" href="/">
            useState
          </Button>
        </div>
        <div>
          <Button variant="outlined" href="/redux">
            redux
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
