import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/action-types';
import { addItem, deleteItem, editItem } from '../reducer-helper';
import data from "../data.json";

const initialState = {
    items: [],
}
export default function reducers(state = initialState, action){
    switch (action.type) {
        case GET_ITEMS:
            console.log(data, 'data')
            return {items: data};
        case ADD_ITEM:
            const addeditems = addItem(action.payload, state.items);
            return { items: addeditems };

        case EDIT_ITEM:
            const editedItems = editItem(action.payload, state.items);
            return { items: editedItems };

        case DELETE_ITEM:
            const deleteItems = deleteItem(action.payload, state.items);
            return { items: deleteItems };

        default:
            return initialState;
    }
};


