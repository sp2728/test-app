import { Button } from "@mui/material";
import "./App.css";
import Todo from "./todo";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import TodoRedux from "./todoRedux";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 15px 0px 15px",
          backgroundColor: "#f3f6f9",
        }}
      >
        <h1
          className="todo"
          style={{
            textAlign: "center",
          }}
        >
          To-Do App
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={2} direction="row">
            <Button variant="contained">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                useState
              </Link>
            </Button>

            <Button variant="contained">
              <Link
                to="/redux"
                style={{ textDecoration: "none", color: "white" }}
              >
                redux
              </Link>
            </Button>
          </Stack>
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
