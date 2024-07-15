import React from 'react'

import SingleProduct from './SingleProduct'
import { useSelector } from 'react-redux'

export default function ProductList() {
  const { data } = useSelector((store) => store.cart)

  return (
    <div className='   max-w-[900px] sm:w-full flex flex-col items-center   '>
      <h1 className='text-4xl text-Rose_900 mb-8 border-b-4 border-Red'>Dessert</h1>
      <div className='flex flex-wrap justify-center   md:gap-x-4'>
        {data.map((product, index) => {
          return (
            <SingleProduct
              key={index}
              product={product}
            />
          )
        })}
      </div>
    </div>
  )
}
