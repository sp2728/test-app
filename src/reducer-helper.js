export const addItem = (newItem, items) => [...items, newItem];

export const editItem = (existingItem, items) => {
    let findItem = items.find(item=> item.id === existingItem.id);
    findItem.value = existingItem.value;
    return items;
}

export const deleteItem = (existingItemId, items) => {
    let index = items.findIndex(item=> item.id === existingItemId);
    delete items[index];
    return items;
}