import React from 'react'
import './Cashback.css'
import Product from '../Product'

export default function Cashback() {
  return (
    <div className='cashback'>
      <div className='cashback__container'>
        <div className='cashback__row'>
        <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
        <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
        <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
        </div>
      </div>
    </div>
  )
}
