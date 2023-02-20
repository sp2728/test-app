import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function DeleteAndEditButton({
  handleEditItem,
  handleDelete,
  index,
}) {
  return (
    <span>
      <Button
        xs={4}
        size="medium"
        color="primary"
        variant="contained"
        onClick={() => handleEditItem(index)}
        endIcon={<ModeEditIcon />}
        padding="none"
        sx={{ marginRight: "5px" }}
      >
        Edit
      </Button>
      <Button
        xs={4}
        size="medium"
        color="warning"
        variant="contained"
        onClick={() => handleDelete(index)}
        endIcon={<DeleteIcon />}
        padding="none"
        sx={{ marginRight: "5px" }}
      >
        Delete
      </Button>
    </span>
  );
}
