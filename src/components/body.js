import React from 'react'

export default function Body() {
  return (
    <div>
        <h1>Your Cart</h1>
        <button className='btn btn-primary mx-4'>+</button>
        <span>Add items to Cart</span>
        <button className='btn btn-primary mx-4'>-</button>
    </div>
  )
}
