import React from 'react'
import data from '../data.json'
import SingleProduct from './SingleProduct'

export default function ProductList() {
  console.log(data)
  return (
    <div>
      <h1 className='text-4xl text-Rose_900 mb-8'>Dessert</h1>
      {data.map((product, index) => {
        return (
          <SingleProduct
            key={index}
            product={{ ...product, amount: 0, isInCart: false }}
          />
        )
      })}
    </div>
  )
}
