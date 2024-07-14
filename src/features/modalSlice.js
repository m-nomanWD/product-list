import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open_Modal: (state, action) => {
      state.isOpen = true
    },
    close_Modal: (state, action) => {
      state.isOpen = false
    },
  },
})
export default modalSlice.reducer
export const { open_Modal, close_Modal } = modalSlice.actions
