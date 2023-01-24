import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import { useState } from "react";

const Todo = () => {
  const [listItems, setListItems] = React.useState([]);
  const [search, setsearch] = React.useState();
  const handleChangeText = (event) => {
    const searchValue = event.target.value;
    setsearch(searchValue);
  };

  const handleAdd = () => {
    const newListItems = [...listItems, search];
    setListItems(newListItems);
  };

  const handleDelete = (index) => {
    delete listItems[index];
    setListItems([...listItems]);
  };
  return (
    <div>
      <div>
        <TextField
          onChange={handleChangeText}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <List>
        {listItems?.map(
          (item, index) =>
            item && (
              <ListItem key={index}>
                {item}{" "}
                <Button onClick={() => handleDelete(index)}>Delete</Button>
              </ListItem>
            )
        )}
        {listItems.length === 0 && <ListItem> No Items </ListItem>}
      </List>
    </div>
  );
};

export default Todo;
