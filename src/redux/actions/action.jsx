export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
    inCart: true
  };
};
// remove iteams
export const DLT = (id) => {
  return {
      type: "RMV_CART",
      payload: id
  }
}

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
      type: "RMV_ONE",
      payload: iteam,
      inCart: false
  }
}
export const UPDATE_QUANTITY = (itemId, newQuantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { itemId, newQuantity },
  };
};
