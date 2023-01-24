import React from 'react'
import { Button, TextField, List, ListItem } from '@mui/material';

const Todo = () => {

    const [listItems, setListItems] = React.useState([]);

    const handleChangeText = (event) => {
        console.log(event.target.value);
        //TODO: Add search value to useState variable.
    }

    const handleAdd = () => {
        //TODO: Add items to your list
    }

    return (
        <div>
            <div>
                <TextField onChange={handleChangeText} id="outlined-basic" label="Outlined" variant="outlined" />
                <Button onClick={handleAdd}>Add</Button>
            </div>
            <List>
                {
                    listItems?.map(item=> <ListItem> {item} </ListItem>) 
                }
                {
                    listItems.length===0 && <ListItem> No Items </ListItem>
                }
            </List>


        </div>
    )
}

export default Todo