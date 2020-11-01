import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

// Initial of cart
const INITIAL_STATE_CART = {
  cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE_CART, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // item is that going to be added in cart, it's a object
      const item = action.payload
      const existItem = state.cartItems.find(
        (itemInCart) => itemInCart._id === item._id
      )

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((itemInCart) =>
            itemInCart._id === existItem._id ? item : itemInCart
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (itemInCart) => itemInCart._id !== action.payload
        ),
      }

    default:
      return state
  }
}
