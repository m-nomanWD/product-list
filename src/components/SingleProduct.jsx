import React from 'react'
import addToCartIcon from '/assets/images/icon-add-to-cart.svg'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'
export default function SingleProduct({ product }) {
  const { name, image, category, price, amount, isInCart } = product
  const { desktop, mobile, tablet } = image

  const distpatch = useDispatch()

  return (
    <article className='w-[400px] mb-8'>
      <div className='flex flex-col  items-center'>
        <img
          src={mobile}
          alt='name'
          className='rounded-2xl border-2 border-Red '
        />

        <div className='-mt-6 h-12 border-Rose_300 border-2 bg-white w-40 rounded-3xl flex items-center justify-center cursor-pointer'>
          <img src={addToCartIcon} alt='' className='mr-2 ' />
          
          <span className='font-semibold capitalize'>add to cart</span>
        </div>
      </div>
      <div className='my-2'>
        <h6 className='text-Rose_300 text-sm'>{category}</h6>
        <h4 className='font-bold text-lg'>{name}</h4>
        <p className='font-bold text-Red'>${price}</p>
      </div>
    </article>
  )
}
