import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close_Modal, open_Modal } from '../features/modalSlice'

export default function Modal() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((store) => store.modal)
  return (
    <>
      <div className={isOpen ? 'block' : 'hidden'}>Modal</div>
    </>
  )
}
