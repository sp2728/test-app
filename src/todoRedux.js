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
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <Stack spacing={4} direction="row" sx={{ justifyContent: "center" }}>
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
        </Stack>
        <Box
          sx={{
            margin: "0px auto 0px auto",
            width: "400px",
          }}
        >
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            {itemsTodo?.map(
              (item, index) =>
                item && (
                  <ListItem
                    key={index}
                    style={{
                      border: "2px solid red",
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

                        <OpenModal
                          open={item.editedStatus}
                          item={item}
                          handleChangeText={handleChangeText}
                          index={index}
                          handleEditCancel={handleEditCancel}
                          changeDate={changeDate}
                          changeTime={changeTime}
                          handleSaveItem={handleSaveItem}
                        />
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
