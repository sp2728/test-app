import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import "./App.css";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  editItem,
  saveItem,
  cancelItem,
  deleteItem,
} from "./redux/itemsSlice";
import Modal from "@mui/material/Modal";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import OpenModal from "./Components/OpenModal";
import DeleteAndEditButton from "./Components/DeleteAndEditButton";
import EditAndCancelButton from "./EditAndCancelButton";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const itemsTodo = useSelector((state) => state.items.value);
  const itemsLength = itemsTodo.length;

  const [search, setsearch] = React.useState();
  const [value, setValue] = React.useState(null);
  const [valueTime, setValueTime] = React.useState(null);

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
        time: "null",
      })
    );
  }

  const handleEditItem = (index) => {
    dispatch(editItem(index));
  };

  const handleSaveItem = (index) => {
    dispatch(saveItem({ search, index, time: value + " " + valueTime }));
  };

  const handleEditCancel = (index) => {
    dispatch(cancelItem({ index, editedStatus: false }));
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  const changeDate = (event) => {
    setValue(event.target.value.toString());
  };
  const changeTime = (event) => {
    setValueTime(event.target.value.toString());
  };

  return (
    <>
      <h1
        className="todo"
        style={{
          textAlign: "center",
        }}
      >
        To-Do App
      </h1>

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
                      <Box component="span">
                        <TextField
                          onChange={handleChangeText}
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          placeholder={item.value}
                        />
                        <span
                          style={{
                            marginRight: "25px",
                          }}
                        >
                          <EditAndCancelButton
                            handleEditCancel={handleEditCancel}
                            handleSaveItem={handleSaveItem}
                            index={index}
                          />
                        </span>
                        <Modal open={item.editedStatus}>
                          <>
                            <OpenModal
                              item={item}
                              handleChangeText={handleChangeText}
                              index={index}
                              handleEditCancel={handleEditCancel}
                              changeDate={changeDate}
                              changeTime={changeTime}
                              handleSaveItem={handleSaveItem}
                            />
                          </>
                        </Modal>
                      </Box>
                    ) : (
                      <Box>
                        <ListItemText
                          sx={{ wordWrap: "break-word" }}
                          primary={item.value}
                          secondary={
                            <Stack
                              direction="row"
                              spacing={3}
                              alignItems="center"
                            >
                              <AccessTimeIcon
                                sx={{ width: "15px", paddingRight: "5px" }}
                              />
                              {item.time}
                            </Stack>
                          }
                        />

                        <DeleteAndEditButton
                          handleEditItem={handleEditItem}
                          handleDelete={handleDelete}
                          index={index}
                        />
                      </Box>
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
