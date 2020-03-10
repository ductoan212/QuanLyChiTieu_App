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