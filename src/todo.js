import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import data from "./data.json";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Todo = () => {
  const [listItems, setListItems] = React.useState(data);
  const [search, setsearch] = React.useState();
  const [editStatus, setEditStatus] = React.useState(false);
  const [indexValue, setIndexValue] = React.useState();

  const handleChangeText = (event) => {
    const searchValue = event.target.value;
    setsearch(searchValue);
  };

  const handleAdd = () => {
    let itemLength = listItems.length + 1;
    let str = itemLength.toString();

    let newItemValues = {
      id: str,
      value: search,
    };
    const newListItems = [...listItems, newItemValues];
    setListItems(newListItems);
  };

  const handleEdit = (index) => {
    //TODO: set the index
    setEditStatus(true);
    setIndexValue(index);
  };

  const handleEditSave = (index) => {
    setEditStatus(false);
    // search, indexValue
    let itemLength = listItems;
    itemLength.forEach((element, index) => {
      if (index === indexValue) {
        element.value = search;
      }
    });
    // const newListItems = [listItems];
    setListItems(itemLength);
    console.log(itemLength);
  };

  const handleEditCancel = (index) => {
    setEditStatus(false);
  };

  const handleDelete = (index) => {
    delete listItems[index];
    setListItems([...listItems]);
  };

  return (
    <>
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

          <Button size="small" variant="contained" onClick={handleAdd}>
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
            {listItems?.map(
              (item, index) =>
                item && (
                  <ListItem
                    key={index}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {editStatus && indexValue === index ? (
                      <TextField
                        onChange={handleChangeText}
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        placeholder={item.value}
                      />
                    ) : index === indexValue ? (
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

                    {!editStatus && (
                      <span>
                        <Button
                          xs={4}
                          size="small"
                          color="primary"
                          variant="contained"
                          onClick={() => handleEdit(index)}
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
                    {editStatus && indexValue === index && (
                      <span>
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
                          onClick={() => handleEditSave(index)}
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
            {listItems.length === 0 && <ListItem> No Items </ListItem>}
          </List>
        </Box>
      </div>
    </>
  );
};

export default Todo;
