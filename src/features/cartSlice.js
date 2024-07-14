import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
  isError: false,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { amount, price } = action.payload.product

      const newCartItem = { ...action.payload.product, isInCart: true }
      state.cartItems.push(newCartItem)
      state.amount += 1
      state.total += price
    },
    increase: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      )
      state.amount += 1
      selectedItem.amount += 1
      state.total += action.payload.price
    },
    decrease: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      )

      state.amount -= 1
      selectedItem.amount -= 1
      state.total -= action.payload.price // toast.error(`item quantity remain ${selectedItem.amount}`)
    },
    removeItem: (state, action) => {
      const { amount, price, name } = action.payload.item
      state.cartItems = state.cartItems.filter((item) => name !== item.name)

      state.total -= price * amount
      const selectedItem = action.payload
      state.amount -= amount
      // toast.error('item removed form cart')
    },
    clearCart: (state, action) => {
      state.cartItems = []
      state.amount = 0
      state.total = 0
    },
  },
})
export default cartSlice.reducer
export const { addToCart, increase, decrease, removeItem, clearCart } =
  cartSlice.actions
export const { testing } = cartSlice.actions
