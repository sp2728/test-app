import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import "./App.css";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  editItem,
  saveItem,
  cancelItem,
  deleteItem,
} from "./redux/itemsSlice";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const itemsTodo = useSelector((state) => state.items.value);
  const itemsLength = itemsTodo.length;

  const [search, setsearch] = React.useState();

  const handleChangeText = (event) => {
    const searchValue = event.target.value;
    setsearch(searchValue);
  };

  function handleAddItem(search, itemsLength) {
    dispatch(
      addItem({
        value: search,
        id: itemsLength.toString(),
        editedStatus: false,
      })
    );
  }

  const handleEditItem = (index) => {
    dispatch(editItem(index));
  };

  const handleSaveItem = (index) => {
    dispatch(saveItem({ search, index }));
  };

  const handleEditCancel = (index) => {
    dispatch(cancelItem({ index, editedStatus: false }));
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1
          className="todo"
          style={{
            textAlign: "center",
          }}
        >
          To-Do App (Redux)
        </h1>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            columnGap: "50px",
          }}
        >
          <TextField
            onChange={handleChangeText}
            id="outlined-basic"
            label=""
            variant="outlined"
            placeholder="Add a task"
          />

          <Button
            size="small"
            variant="contained"
            onClick={() => handleAddItem(search, itemsLength)}
          >
            Add
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {itemsTodo?.map(
              (item, index) =>
                item && (
                  <ListItem
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "465px",
                    }}
                  >
                    {item.editedStatus && item.indexEditValue === index ? (
                      <TextField
                        onChange={handleChangeText}
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        placeholder={item.value}
                      />
                    ) : index === item.indexEditValue ? (
                      <ListItemText
                        sx={{ wordWrap: "break-word" }}
                        primary={item.value}
                      />
                    ) : (
                      <ListItemText
                        sx={{ wordWrap: "break-word" }}
                        primary={item.value}
                      />
                    )}

                    {!item.editedStatus && (
                      <span>
                        <Button
                          xs={4}
                          size="small"
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
                          size="small"
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
                    )}
                    {item.editedStatus && item.indexEditValue === index && (
                      <span
                        style={{
                          marginRight: "25px",
                        }}
                      >
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
                      </span>
                    )}
                  </ListItem>
                )
            )}
            {itemsTodo.length === 0 && <ListItem> No Items </ListItem>}
          </List>
        </Box>
      </div>
    </>
  );
};

export default TodoRedux;
