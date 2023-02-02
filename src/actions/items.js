import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, GET_ITEMS } from "./action-types"

export const addItem = (newItem) => {
    return {
        type: ADD_ITEM,
        payload: newItem
    }
}

export const editItem = (editItem) => {
    return {
        type: EDIT_ITEM,
        payload: editItem
    }
}

export const deleteItem = (deleteItem) => {
    return {
        type: DELETE_ITEM,
        payload: deleteItem
    }
}

export const getItems = () => {
    return { type: GET_ITEMS }
}