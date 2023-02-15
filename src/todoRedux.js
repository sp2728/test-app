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
import Modal from "@mui/material/Modal";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const itemsTodo = useSelector((state) => state.items.value);
  const itemsLength = itemsTodo.length;

  const [search, setsearch] = React.useState();

  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  const handleChangeText = (event) => {
    const searchValue = event.target.value;
    setsearch(searchValue);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
  };

  function handleAddItem(search, itemsLength) {
    dispatch(
      addItem({
        value: search,
        id: itemsLength.toString(),
        editedStatus: false,
        time: "null",
      })
    );
  }

  const handleEditItem = (index) => {
    dispatch(editItem(index));
  };

  const handleSaveItem = (index, value) => {
    dispatch(saveItem({ search, index, time: value.$d }));
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
                      <span>
                        <TextField
                          onChange={handleChangeText}
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          placeholder={item.value}
                        />
                        <Modal open={item.editedStatus}>
                          <Box sx={style}>
                            <TextField
                              onChange={handleChangeText}
                              id="outlined-basic"
                              label=""
                              variant="outlined"
                              placeholder={item.value}
                            />
                            <span style={{ margin: "auto" }}>
                              <Button
                                size="small"
                                color="primary"
                                variant="outlined"
                                onClick={() => handleEditCancel(index)}
                                padding="none"
                                sx={{ marginRight: "10px" }}
                              >
                                Cancel
                              </Button>
                              <Button
                                xs={4}
                                size="small"
                                color="warning"
                                variant="contained"
                                onClick={() => handleSaveItem(index, value)}
                                padding="none"
                                sx={{}}
                              >
                                Save
                              </Button>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                  label="Date&Time picker"
                                  value={value}
                                  onChange={(newValue) => {
                                    setValue(newValue);
                                  }}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </LocalizationProvider>
                            </span>
                          </Box>
                        </Modal>
                      </span>
                    ) : index === item.indexEditValue ? (
                      <ListItemText
                        sx={{ wordWrap: "break-word" }}
                        primary={item.value}
                      />
                    ) : (
                      <>
                        <ListItemText
                          sx={{ wordWrap: "break-word" }}
                          primary={<>{item.value}</>}
                        />
                      </>
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
                          onClick={() => handleSaveItem(index, value)}
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
