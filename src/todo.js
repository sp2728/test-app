import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import data from "./data.json";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";

const Todo = () => {
  const [listItems, setListItems] = React.useState(data);
  const [search, setsearch] = React.useState();
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
    console.log(newListItems);
    setListItems(newListItems);
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
                    secondaryAction={
                      <Button
                        xs={4}
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => handleDelete(index)}
                        endIcon={<DeleteIcon />}
                        padding="none"
                      >
                        Delete
                      </Button>
                    }
                  >
                    <ListItemText
                      sx={{ wordWrap: "break-word" }}
                      primary={item.value}
                    />
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
