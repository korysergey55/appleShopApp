

export const cartItemSelector = (state) => state.cart.items;
export const cartTotalPricelSelector = (state) => state.cart.total;
export const cartOrderSelector = (state) => state.cart.order;


export const cartItemLengthSelector = (state) => state.cart.items?.length;