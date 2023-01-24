import React from "react";
import { Button, TextField, List, ListItem } from "@mui/material";
import data from './data.json';
import { RamenDining } from "@mui/icons-material";


const Todo = () => {
  const [listItems, setListItems] = React.useState(data);
  const [search, setsearch] = React.useState();
  const handleChangeText = (event) => {
    const searchValue = event.target.value;
    setsearch(searchValue);
  };

  const handleAdd = () => {
    const newListItems = [...listItems];
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
          (item) =>
            item && (
              <ListItem key={item.id}>
                {item.value}
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </ListItem>
            )
        )}
        {listItems.length === 0 && <ListItem> No Items </ListItem>}
      </List>
    </div>
  );
};

export default Todo;
