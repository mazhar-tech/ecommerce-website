const INIT_STATE = {
    carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ADD_CART":
        const IteamIndex = state.carts.findIndex(
          (iteam) => iteam.id === action.payload.id
        );
  
        if (IteamIndex >= 0) {
          state.carts[IteamIndex].qnty += 1;
          return {
            ...state,
            carts: [...state.carts],
          };
        } else {
          const temp = { ...action.payload, qnty: 1 };
          return {
            ...state,
            carts: [...state.carts, temp],
          };
        }
  
      case "RMV_CART":
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
  
      case "RMV_ONE":
        const IteamIndex_dec = state.carts.findIndex(
          (iteam) => iteam.id === action.payload.id
        );
  
        if (state.carts[IteamIndex_dec].qnty > 1) {
          // If the quantity is greater than 1, decrement it
          state.carts[IteamIndex_dec].qnty -= 1;
          return {
            ...state,
            carts: [...state.carts],
          };
        } else if (state.carts[IteamIndex_dec].qnty === 1) {
          // If the quantity is 1, remove the item from the cart
          const data = state.carts.filter((el) => el.id !== action.payload.id);
          return {
            ...state,
            carts: data,
          };
        }
  
      case "UPDATE_QUANTITY":
        const { itemId, newQuantity } = action.payload;
        const updatedCarts = state.carts.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              qnty: parseInt(newQuantity), // Convert newQuantity to an integer
            };
          }
          return item;
        });
        return {
          ...state,
          carts: updatedCarts,
        };
  
      default:
        return state;
    }
  };
  