import { createSlice, current } from '@reduxjs/toolkit'
import data from '../data.json'

const initialState = {
  data: data,
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
      const { amount, price, name } = action.payload.product

      const newCartItem = state.data.find((item) => item.name === name)
      state.data.map((item) => {
        if (item.name === name) {
          item.isInCart = true
          item.amount = 1
        }
      })
      state.cartItems.push(newCartItem)
      state.amount += 1
      state.total += price
    },
    increase: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      )
      state.data.map((item) => {
        item.name == action.payload.name ? (item.amount += 1) : item
      })
      state.amount += 1
      selectedItem.amount += 1
      state.total += action.payload.price
    },
    decrease: (state, action) => {
      const selectedItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      )
      state.data.map((item) => {
        item.name == action.payload.name ? (item.amount -= 1) : item
      })
      state.amount -= 1
      selectedItem.amount -= 1
      state.total -= action.payload.price
    },
    removeItem: (state, action) => {
      const { amount, price, name } = action.payload.item
      state.cartItems = state.cartItems.filter((item) => name !== item.name)
      const newData = state.data.map((item) => {
        return item.name === name
          ? { ...item, isInCart: false, amount: 0 }
          : item
      })

      state.data = newData
      state.total -= price * amount
      const selectedItem = action.payload
      state.amount -= amount
      // toast.error('item removed form cart')
    },
    clearCart: (state, action) => {
      state.cartItems = []
      state.amount = 0
      state.total = 0
      const orignalCopy = state.data.map((item) => {
        return (item = { ...item, isInCart: false, amount: 0 })
      })
      state.data = orignalCopy
    },
  },
})
export default cartSlice.reducer
export const { addToCart, increase, decrease, removeItem, clearCart } =
  cartSlice.actions
export const { testing } = cartSlice.actions
