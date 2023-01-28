import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import data from "./data.json";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Todo = () => {
  const [listItems, setListItems] = React.useState(data);
  const [search, setsearch] = React.useState();
  const [editStatus, setEditStatus] = React.useState(false);
  
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
  }

  const handleEditSave = (index) => {

    setEditStatus(false);
  }


  const handleEditCancel = (index) => {

    setEditStatus(false);
  }

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
                    <ListItemText
                      sx={{ wordWrap: "break-word" }}
                      primary={item.value}
                    />
                    {!editStatus && <span>
                      <Button
                        xs={4}
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={()=> handleEdit(index)}
                        endIcon={<ModeEditIcon />}
                        padding="none"
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
                      >
                        Delete
                      </Button>
                    </span>}
                    {editStatus && <span>
                      <Button
                        xs={4}
                        size="small"
                        color="primary"
                        variant="outlined"
                        onClick={() => handleEditCancel(index)}
                        padding="none"
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
                      >
                        Save
                      </Button>
                    </span>}
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
