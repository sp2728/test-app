import React from "react";
import Button from "@mui/material/Button";

export default function EditAndCancelButton({
  index,
  handleEditCancel,
  handleSaveItem,
}) {
  return (
    <>
      <Button
        xs={4}
        size="small"
        color="primary"
        variant="outlined"
        onClick={() => handleEditCancel(index)}
        padding="none"
        sx={{ marginRight: "5px" }}
      >
        Cancel
      </Button>
      <Button
        xs={4}
        size="small"
        color="warning"
        variant="contained"
        onClick={() => handleSaveItem(index)}
        padding="none"
        sx={{ marginRight: "5px" }}
      >
        Save
      </Button>
    </>
  );
}
