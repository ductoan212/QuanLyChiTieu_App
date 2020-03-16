// Action
export const addItem = (item) => {
  return {
    type: "ADD",
    item: item
  }
}

const delItem = (index) => {
  return {
    type: "DEL",
    atIndex: index
  }
}

export default delItem;

export const loadData = (giao_dich, id) => {
  return {
    type: "LOAD",
    giao_dich: giao_dich,
    id: id
  }
}

export const saveData = (giao_dich, id) => {
  return {
    type: "SAVE",
    giao_dich: giao_dich,
    id: id
  }
}