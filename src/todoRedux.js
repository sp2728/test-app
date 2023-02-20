import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import "./App.css";
import "./todoRedux.css";
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
import AddAlertIcon from "@mui/icons-material/AddAlert";
import IconButton from "@mui/material/IconButton";
import DateAndTimeBtn from "./Components/DateAndTimeBtn";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const itemsTodo = useSelector((state) => state.items.value);
  const itemsLength = itemsTodo.length;

  const [search, setsearch] = React.useState();
  const [value, setValue] = React.useState(null);
  const [valueTime, setValueTime] = React.useState(null);
  const [showDate, setshowDate] = React.useState(false);

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
        time: value + " " + valueTime,
      })
    );
  }

  function handleShowDate() {
    setshowDate(!showDate);
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
      <div className="firstDiv">
        <Stack
          spacing={3}
          direction="row"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            onChange={handleChangeText}
            id="outlined-basic"
            label=""
            variant="outlined"
            placeholder="Add a task"
            size="small"
            sx={{ width: "300px" }}
          />
          <IconButton onClick={() => handleShowDate()}>
            <AddAlertIcon />
          </IconButton>

          <Button
            size="medium"
            variant="contained"
            onClick={() => handleAddItem(search, itemsLength)}
          >
            Add
          </Button>
        </Stack>
        <div style={{ marginTop: "15px", marginRight: "210px" }}>
          {showDate && (
            <DateAndTimeBtn changeDate={changeDate} changeTime={changeTime} />
          )}
        </div>
        <Box
          sx={{
            margin: "0px auto 0px auto",
            width: "475px",
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
                  <ListItem key={index} style={{}}>
                    {item.editedStatus && item.indexEditValue === index ? (
                      <Stack
                        spacing={5}
                        direction="row"
                        sx={{ justifyContent: "center", alignItems: "center" }}
                      >
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
                      </Stack>
                    ) : (
                      <>
                        <ListItemText
                          sx={{ wordWrap: "break-word" }}
                          primary={item.value}
                          secondary={
                            !item.time.includes(null) && (
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
                            )
                          }
                        />

                        <DeleteAndEditButton
                          handleEditItem={handleEditItem}
                          handleDelete={handleDelete}
                          index={index}
                        />
                      </>
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
